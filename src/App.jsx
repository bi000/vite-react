import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components for Home Page
import Header from './Files/header';
import Body from './Files/body';
import Body2 from './Files/body2';
import Testimonials from './Files/testomonials';
import Footer from './Files/Footer';
import Badge from './Files/badge';

// Country Pages (Lazy Loaded where needed)
const Australia = React.lazy(() => import('./Pages/Australia'));
import UK from './Pages/UK';
import France from './Pages/France';
import USA from './Pages/USA';
import Canada from './Pages/Canada';
import Ireland from './Pages/Ireland';
const Switzerland = React.lazy(() => import('./Pages/Switzerland'));
const Germany = React.lazy(() => import('./Pages/Germany'));
const NewZealand = React.lazy(() => import('./Pages/NewZeland'));

// Compliance Hub Pages
const CodeOfConduct = React.lazy(() => import('./ComplianceHub/CodeOfConduct'));
const Epolicy = React.lazy(() => import('./ComplianceHub/18Policy'));
const AntiFraud = React.lazy(() => import('./ComplianceHub/AntiFraud'));
const Cancelation = React.lazy(() => import('./ComplianceHub/CancellationPolicy'));
const Protection = React.lazy(() => import('./ComplianceHub/Protection&Privacy'));
const Grievance = React.lazy(() => import('./ComplianceHub/Grievance Policy'));
const SlaveryStatement = React.lazy(() => import('./ComplianceHub/SlaveryStatement'));
const Compliance = React.lazy(() => import('./ComplianceHub/ComplianceInternational'));

// Services Pages
const CourseUniversity = React.lazy(() => import('./Services/CourseUniversity'));
const VisaSOP = React.lazy(() => import('./Services/VisaApplication'));
const EnglishTest = React.lazy(() => import('./Services/EnglishTest'));
const Scholarship = React.lazy(() => import('./Services/Scholarship'));
const Departure = React.lazy(() => import('./Services/Departure'));
const DocumentsVerification = React.lazy(() => import('./Services/DocumentVerify'));

// Journey Pages
const Counseling = React.lazy(() => import('./Journey/Counselling'));
const Interview = React.lazy(() => import('./Journey/Interview'));
const Success = React.lazy(() => import('./Journey/SuccessStories'));
const Alumni = React.lazy(() => import('./Journey/Alumni'));
const FAQ = React.lazy(() => import('./Journey/FAQ'));

// About Us Pages
const WhoWeAre = React.lazy(() => import('./AboutUs/WhoWeAre'));
const DirectorMsg = React.lazy(() => import('./AboutUs/DirectorMessage'));
const MissionVision = React.lazy(() => import('./AboutUs/Mission&Vision'));
const CoreValues = React.lazy(() => import('./AboutUs/CoreValue'));

// University Pages
const EOI = React.lazy(() => import('./Universities/EOI'));
const Testimonial = React.lazy(() => import('./Universities/InstitutionalTestimonials'));
const PatnerBenifits = React.lazy(() => import('./Universities/Patnership'));
const PatnerInstitutions = React.lazy(() => import('./Universities/PatnerInstitutions'));

//Form
import FormData from './Files/Form';

// App Component with Routes
const App = () => {
  return (
    <Suspense fallback={<div className="loading">Loading page...</div>}>
      <Routes>

        {/* Home Page */}
        <Route path='/' element={
          <>
            <Header />
            <Body />
            <Badge />
            <Body2 />
            <Testimonials />
            <Footer />
          </>
        } />

        {/* Country Routes */}
        <Route path='/Australia' element={<Australia />} />
        <Route path='/UK' element={<UK />} />
        <Route path='/France' element={<France />} />
        <Route path='/USA' element={<USA />} />
        <Route path='/Canada' element={<Canada />} />
        <Route path='/Ireland' element={<Ireland />} />
        <Route path='/Switzerland' element={<Switzerland />} />
        <Route path='/Germany' element={<Germany />} />
        <Route path='/New Zealand' element={<NewZealand />} />

        {/* Compliance Hub Routes */}
        <Route path='/CodeOfConduct' element={<CodeOfConduct />} />
        <Route path='/18Policy' element={<Epolicy />} />
        <Route path='/AniFraud' element={<AntiFraud />} />
        <Route path='/CancelationPolicy' element={<Cancelation />} />
        <Route path='/DataProtection' element={<Protection />} />
        <Route path='/StudentGrievancePolicy' element={<Grievance />} />
        <Route path='/ComplianceInternational' element={<Compliance />} />
        <Route path='/ModernSlavery' element={<SlaveryStatement />} />

        {/* Services Routes */}
        <Route path='/CourseUniversity' element={<CourseUniversity />} />
        <Route path='/Visa&SOP' element={<VisaSOP />} />
        <Route path='/EnglistTest' element={<EnglishTest />} />
        <Route path='/Scholarship' element={<Scholarship />} />
        <Route path='/Departure' element={<Departure />} />
        <Route path='/DocumentsVerification' element={<DocumentsVerification />} />

        {/* Journey Routes */}
        <Route path='/Counseling' element={<Counseling />} />
        <Route path='/Interview' element={<Interview />} />
        <Route path='/SucessStories' element={<Testimonials />} />
        <Route path='/Alumni' element={<Alumni />} />
        <Route path='/FAQ' element={<FAQ />} />

        {/* About Us Routes */}
        <Route path='/WhoWeAre' element={<WhoWeAre />} />
        <Route path='/DirectorMsg' element={<DirectorMsg />} />
        <Route path='/MissionVision' element={<MissionVision />} />
        <Route path='/CoreValues' element={<CoreValues />} />

        {/* University Partnership Routes */}
        <Route path='/EOI' element={<EOI />} />
        <Route path='/Testimonials' element={<Testimonial />} />
        <Route path='/PatnerBenifits' element={<PatnerBenifits />} />
        <Route path='/PatnerInstitutions' element={<PatnerInstitutions />} />

{/*Form Navigation */}
<Route path='/Form' element={<FormData />}/>
      </Routes>
    </Suspense>
  )
}

export default App;
