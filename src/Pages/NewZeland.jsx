import React from 'react'
import CountryUI from './CountryUI';
import {
  Stethoscope,
  Laptop,
  Wrench,
  Users,
  Baby,
  Calculator,
  Briefcase,
  Globe,
  ShieldCheck
} from "lucide-react";
 const NewZeland = () => {
  const courseData = [
      {
        title: "Early Childhood Education",
        description: "Careers in hospitals, aged care, and health sectors.",
        icon: <Stethoscope className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "IT,",
        description: "Software development, cloud, cybersecurity & more.",
        icon: <Laptop className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Engineering",
        description: "Civil, mechanical, and electrical specializations.",
        icon: <Wrench className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Nursing",
        description: "Educate and support young learners.",
        icon: <Baby className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: " Construction",
        description: "Leadership, management, and marketing paths.",
        icon: <Briefcase className="h-8 w-8 text-[#0066b3]" />,
      },
    ];
  return (
    <>
<CountryUI
courseItemData={courseData}
headerText={"Study In NewZeland"}
image={"Place/NewZeeland.jpg"}
imageName={"NewZeeland"}
countryIntro={"New Zealand offers a safe, welcoming environment with strong education quality and a growing demand for skilled graduates. It's ideal for students looking for practical learning and long-term opportunities."}
secondHeader={"Why NewZeland?"}
circleCardItem={
  [
    "Generous post-study work visa (up to 3 years)",
  "Simple PR points system linked to study",
  "Small class sizes, student-friendly environment",
  "High job demand in health, IT, construction",
  "Pathways from diploma to master’s level"
]}
visaHighlight={[
{
  Items:`Student visa with full medical/travel insurance`
},
{
  Items:`evidence of funds and tuition payment required.`
}

]}
postStudy={[
  {
    Items:`1–3years based on qualification and location`
  }
  ]}
  />
    </>
  )
}
export default NewZeland;