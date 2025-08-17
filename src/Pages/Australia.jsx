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
 const Australia = () => {
  const courseData = [
      {
        title: "Nursing",
        description: "Careers in hospitals, aged care, and health sectors.",
        icon: <Stethoscope className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "IT",
        description: "Software development, cloud, cybersecurity & more.",
        icon: <Laptop className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Engineering",
        description: "Civil, mechanical, and electrical specializations.",
        icon: <Wrench className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Social Work",
        description: "Empower communities, support mental health.",
        icon: <Users className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Early Childhood",
        description: "Educate and support young learners.",
        icon: <Baby className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Accounting",
        description: "Finance, auditing, and tax careers.",
        icon: <Calculator className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Business",
        description: "Leadership, management, and marketing paths.",
        icon: <Briefcase className="h-8 w-8 text-[#0066b3]" />,
      },
    ];
  return (
    <>
<CountryUI
courseItemData={courseData}
image={"landMark.jpg"}
imageName={"Opera House"}
headerText={"Study In Australia"}
countryIntro={"Australia remains one of the top choices for Nepali students seeking world-class education, cultural diversity, and excellent post-study work opportunities.With a reputation for academic excellence and globally ranked universities, Australia offers career-driven degrees and industry-integrated programs."}
secondHeader={"Why Australia?"}
circleCardItem={
  [
    "Up to 5 years post-study work rights in major cities",
  "Globally ranked universities and TAFE institutions",
  "Safe, multicultural society with Nepali community presence",
  "Part-time work rights (48 hours/fortnight)",
  "Pathways from diploma to master’s level"
]}
visaHighlight={[
{
  Items:`Subclass 500 visa with Genuine Student (GS) assessment`
},
{
  Items:`Health insurance is mandatory`
},
{
  Items:`Proof of funds and English language required`
}

]}
postStudy={[
{
  Items:`Pathway to via General Skilled Migration (GSM)`
},
{
  Items:`2-5 Years based on degree and regional area`
}

]}
  />
    </>
  )
}
export default Australia;