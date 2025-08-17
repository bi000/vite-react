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
 const Switzerland = () => {
  const courseData = [
      {
        title: " Luxury Brand Management",
        description: "Software development, cloud, cybersecurity & more.",
        icon: <Laptop className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Hospitality Management",
        description: "Civil, mechanical, and electrical specializations.",
        icon: <Wrench className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "International Relations",
        description: "Educate and support young learners.",
        icon: <Baby className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "  Finance",
        description: "Leadership, management, and marketing paths.",
        icon: <Briefcase className="h-8 w-8 text-[#0066b3]" />,
      },
    ];
  return (
    <>
<CountryUI
courseItemData={courseData}
headerText={"Study In Switzerland"}
image={"Place/Switerzland.jpg"}
imageName={"Switerzland"}
countryIntro={"Switzerland offers elite hospitality and business programs in a multilingual, innovation-driven environment. Known for high academic standards and global research hubs."}
secondHeader={"Why Switzerland ?"}
circleCardItem={
  [
    "World-famous for hospitality and tourism studies",
  "Strong career pathways in finance and diplomacy",
  "Centrally located in Europe for travel and job markets",
  "High graduate employability from Swiss institutions",
  "Pathways from diploma to master’s level"
]}
visaHighlight={[
  {
    Items:`Financial proof with admission letter, and accommodation confirmation required.`
  }]}
postStudy={[
  {
    Items:`6-month job search visa for graduates of eligible programs`
  }
  ]}
  />
    </>
  )
}
export default Switzerland;