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
 const France = () => {
  const courseData = [
      {
        title: "Luxury Management",
        description: "Careers in hospitals, aged care, and health sectors.",
        icon: <Stethoscope className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Hospitality",
        description: "Civil, mechanical, and electrical specializations.",
        icon: <Wrench className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Data Science",
        description: "Educate and support young learners.",
        icon: <Baby className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "International Business",
        description: "Leadership, management, and marketing paths.",
        icon: <Briefcase className="h-8 w-8 text-[#0066b3]" />,
      },
    ];
  return (
    <>
<CountryUI
courseItemData={courseData}
headerText={"Study In France"}
image={"Place/Tower.jpg"}
imageName={"Eiffel Tower"}
countryIntro={"France is a rising study destination known for affordable tuition, cultural richness, and access to EU-wide opportunities. Programs in English are growing, especially in business and tech."}
secondHeader={"Why France?"}
circleCardItem={
  [
    "Low-cost public universities and Grandes Écoles",
  "Up to 2 years post-study work for master's students",
  "Central European location with Schengen travel",
  "Strong ties to business, fashion, and arts industries",
  "Pathways from diploma to master’s level"
]}
visaHighlight={[

{
Items:`Études en France system required`
},
{
Items:`Campus France interview + visa via French embassy`
},
]}
postStudy={[

{
Items:`12–24 months APS (job-seeking visa)`
},
]}
  />
    </>
  )
}
export default France;