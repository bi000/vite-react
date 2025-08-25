import React from 'react'
import Ui from './codeOfconductUi';
import { icon } from '@fortawesome/fontawesome-svg-core';
 const CodeOfConduct = () => {
  return (
    <>
    <Ui  
    cardData={[
            {
Maincontent:'Our Commitment',
subContent:'At Gen Z Global Education & Visa Services Pvt. Ltd., we are committed to maintaining the highest standards of professionalism, integrity, and ethical behaviour. This Code of Conduct outlines the principles and expectations that guide our work with students, parents, education providers, and partners globally',
icon:'faEnvelope'  
},
      {
Maincontent:'Professional Integrity',
subContent:[
      'We provide honest, accurate, and up-to-date information to all students and clients.',
      'We never misrepresent courses, institutions, or visa outcomes. ',
      'We do not engage in misleading marketing, false promises, or unethical practices.'
],
icon:'faFileAlt'
      },
      {
Maincontent:'Student-Centred Approach',
subContent:[
'We act in the best interest of the student at all times.',
'We ensure students are guided toward courses and institutions appropriate to their goals, background, and capacity.',
'We explain all options clearly and transparently, ensuring informed decisions.' 
],
icon:'faClock'      
},
      {
Maincontent:'Compliance with Laws and Regulations ',
subContent:[
' We comply with all relevant laws, immigration policies, and institutional requirements in Nepal and destination countries.',
'We uphold the standards set by our certifications (e.g., ICEF, QEAC, British Council, and MOE.',
'We cooperate fully with audits, quality checks, and institutional oversight. '
],
icon:'faShieldAlt'     
},
      {
Maincontent:'Anti-Fraud and Zero Tolerance ',
subContent:[
'We maintain a zero-tolerance policy against document fraud, false statements, or unethical shortcuts',
'Any staff or sub-agent found violating this will face immediate disciplinary action and legal consequences if necessary.'
],
icon:'faArrowCircleUp'     
},
{
Maincontent:'Confidentiality and Privacy',
subContent:[
'We protect the personal and academic data of our clients in accordance with our Privacy Policy. ',
'We do not disclose client information to any third party without written consent, except where required by law. '
],
icon:null,
},
{
Maincontent:' Respect and Inclusivity ',
subContent:[
'We treat all individuals—regardless of gender, ethnicity, religion, or background—with dignity and respect.',
'We promote an inclusive environment for both clients and team members.',
'Discrimination, harassment, or abuse of any kind is not tolerated'
],
icon:null,
},
{
Maincontent:' Accountability ',
subContent:[
'Our team members are responsible for the quality and honesty of their counselling and services.',
'We acknowledge and correct any mistakes openly and promptly.',
'Feedback and complaints are welcomed and handled fairly and confidentially.'
],
icon:null,
},
{
Maincontent:'Representation and Branding',
subContent:[
'All sub-agents and representatives must use Gen Z Global branding and materials appropriately and only with prior permission.',
'No unauthorized use of logos, certificates, or marketing materials is allowed.'

],
icon:null,
},
{
Maincontent:'Continuous Improvement ',
subContent:[
'We regularly review our services, policies, and training to maintain the highest standards.',
'All staff and partners are expected to participate in ongoing professional development.'

],
icon:null,
}

    ]}
    Head={'Code of Conduct'}
    />
    </>
  )
}
export default CodeOfConduct;
