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
 const Germany = () => {
  const courseData = [
      {
        title: " Computer Science",
        description: "Software development, cloud, cybersecurity & more.",
        icon: <Laptop className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Engineering",
        description: "Civil, mechanical, and electrical specializations.",
        icon: <Wrench className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: " Renewable Energy",
        description: "Educate and support young learners.",
        icon: <Baby className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Mechatronics",
        description: "Leadership, management, and marketing paths.",
        icon: <Briefcase className="h-8 w-8 text-[#0066b3]" />,
      },
    ];
  return (
    <>
<CountryUI
courseItemData={courseData}
headerText={"Study In Germany"}
image={"Place/Germany.jpg"}
imageName={"Germany"}
countryIntro={"Germany offers world-class engineering and tech programs with zero tuition fees at public universities. It’s ideal for high-performing students seeking academic excellence and PR pathways."}
secondHeader={"Why Germany ?"}
circleCardItem={
  [
    "No tuition fees at most public universities",
  "18-month post-study job search visa",
  "Germany Blue Card PR pathway",
  "High global demand for skilled engineers and IT graduates",
  "Pathways from diploma to master’s level"
]}
visaHighlight={[

{
Items:`Blocked account (approx. €11,208), motivation letter, admission from DSH-accredited institution.`
},
]}
postStudy={[
  {
    Items:`18-month job-seeking visa after graduation`
  }
]}
  />
    </>
  )
}
export default Germany;