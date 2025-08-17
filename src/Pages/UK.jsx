import React from 'react'
import CountryUI from './CountryUI';
import {
  Stethoscope,
  Laptop,
  Wrench,
  Users,
  Baby,
  Calculator,
  Briefcase
} from "lucide-react";
 const UK = () => {
  const courseData = [
      {
        title: "Data Science",
        description: "Careers in hospitals, aged care, and health sectors.",
        icon: <Stethoscope className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Cyber Security",
        description: "Software development, cloud, cybersecurity & more.",
        icon: <Laptop className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Hospitality",
        description: "Civil, mechanical, and electrical specializations.",
        icon: <Wrench className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "HealthCare",
        description: "Educate and support young learners.",
        icon: <Baby className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "MBA",
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
headerText={"Study In UK"}
countryIntro={"The UK offers globally respected degrees, fast-track master's programs, and vibrant campus life. With flexible intakes and growing scholarship options, it’s an ideal destination for students focused on quality and career outcomes. ."}
secondHeader={"Why UK?"}
image={"Place/Bridge.jpg"}
imageName={"London Bridge"}
circleCardItem={
  [
    "2-year post-study work visa (Graduate Route) ",
  "1-year Master’s programs save time and cost ",
  "Scholarship opportunities from many universities",
  " Wide range of foundation, undergraduate, and PG courses",
  "Pathways from diploma to master’s level"
]}
visaHighlight={[
{
  Items:`Standard Student Visa with CAS from UKVI-licensed sponsor`
},
{
  Items:`TB test required`
},
{
  Items:`financial and English evidence needed`
}

]}
postStudy={[
  {
    Items:`18 months for UG/PG`
  },
  {
    Items:`3 years for PhD students`
  }]}
  />
    </>
  )
}
export default UK;