import React from 'react';
import CountryUI from './CountryUI';
import {
  Stethoscope,
  Laptop,
  Wrench,
  Baby,
  Briefcase,
} from "lucide-react";
 const USA = () => {
  const courseData = [
      {
        title: "STEM",
        description: "Careers in hospitals, aged care, and health sectors.",
        icon: <Stethoscope className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Artificial Intelligence,",
        description: "Software development, cloud, cybersecurity & more.",
        icon: <Laptop className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "MBA",
        description: "Civil, mechanical, and electrical specializations.",
        icon: <Wrench className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Finance",
        description: "Educate and support young learners.",
        icon: <Baby className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Public Health",
        description: "Leadership, management, and marketing paths.",
        icon: <Briefcase className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Education",
        description: "Leadership, management, and marketing paths.",
        icon: <Briefcase className="h-8 w-8 text-[#0066b3]" />,
      },
    ];
  return (
    <>
<CountryUI
courseItemData={courseData}
headerText={"Study In USA"}
image={"America.jpg"}
imageName={""}
countryIntro={"The USA remains a global education leader with Ivy League, state universities, and community colleges. It’s a top choice for academic innovation, research opportunities, and career growth."}
secondHeader={"Why USA?"}
circleCardItem={
  [
    "Largest number of top-ranked universities globally",
  "Optional Practical Training (OPT) and STEM OPT extensions",
  "Transfer options (2+2 pathways) available",
  "Flexible entry intakes and credit transfer systems",
  "Pathways from diploma to master’s level"
]}
visaHighlight={[
{
Items:`F-1 visa with I-20 form`
},
{
Items:`SEVIS fee and embassy interview required`
}

]}
postStudy={[
{
  Items:`1 year OPT (up to 3 years for STEM grads)`
},
{
  Items:`Pathway to to H1B or work-based residency
`
},
]}
  />
    </>
  )
}
export default USA;