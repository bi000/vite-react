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
 const Ireland = () => {
  const courseData = [
      {
        title: " Nursing",
        description: "Careers in hospitals, aged care, and health sectors.",
        icon: <Stethoscope className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Software Development",
        description: "Software development, cloud, cybersecurity & more.",
        icon: <Laptop className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: " Pharmaceutical Science",
        description: "Civil, mechanical, and electrical specializations.",
        icon: <Wrench className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: " Fintech",
        description: "Educate and support young learners.",
        icon: <Baby className="h-8 w-8 text-[#0066b3]" />,
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
headerText={"Study In Ireland"}
image={"Place/Ireland.jpg"}
imageName={"Ireland"}
countryIntro={"Ireland is a fast-growing destination for international students, offering globally recognized degrees in an English-speaking EU country with close industry ties."}
secondHeader={"Why Ireland ?"}
circleCardItem={
  [
    "2-year stay-back for master’s graduates",
  "Strong tech and pharma industry links (Google, Pfizer, Meta HQs)",
  "Part-time work allowed during studies",
  "English-speaking, EU-member country",
  "Pathways from diploma to master’s level"
]}
visaHighlight={[
{
  Items:`Visa via Irish Embassy or INIS system`
},
{
  Items:`Requires tuition payment, funds, and academic background clarity`
},

]}
postStudy={[

  {
    Items:`2 years (Level 9/Master's)`
  },
  {
    Items:`1 year (Level 8/UG)`
  }
]}
  />
    </>
  )
}
export default Ireland;