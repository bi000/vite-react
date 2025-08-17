import React from 'react'
import CountryUI from './CountryUI';
import {
  Stethoscope,
  Laptop,
  Wrench,
  Baby,
  Briefcase
} from "lucide-react";
 const Canada = () => {
  const courseData = [
      {
        title: "Engineering",
        description: "Careers in hospitals, aged care, and health sectors.",
        icon: <Stethoscope className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Project Management,",
        description: "Software development, cloud, cybersecurity & more.",
        icon: <Laptop className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Hospitality",
        description: "Civil, mechanical, and electrical specializations.",
        icon: <Wrench className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Computer Science",
        description: "Educate and support young learners.",
        icon: <Baby className="h-8 w-8 text-[#0066b3]" />,
      },
      {
        title: "Business Analytics",
        description: "Leadership, management, and marketing paths.",
        icon: <Briefcase className="h-8 w-8 text-[#0066b3]" />,
      },
    ];
  return (
    <>
<CountryUI
courseItemData={courseData}
headerText={"Study In Canada"}
image={"Place/Fall.jpg"}
imageName={"Nigeria Fall"}
countryIntro={"Canada offers affordable tuition, excellent education standards, and a welcoming environment. It's especially attractive for students seeking long-term residency or family-friendly migration. ."}
secondHeader={"Why Canada?"}
circleCardItem={
  [
    "PR-focused immigration pathways (PGWP → Express Entry) ",
  "Affordable fees compared to other Western countries",
  "Co-op (internship) options with many degrees",
  "Work while you study (up to 20 hrs/week, unlimited in breaks)",
  "Pathways from diploma to master’s level"
]}
visaHighlight={[{
  Items:`Apply under SDS stream`
},
{
  Items:`upfront GIC + tuition`
},
{
Items:`strong SOP and financials critical`
}
]}
postStudy={[{
  Items:`Upto 3 years PGWP after eligible study"`
}]}
  />
    </>
  )
}
export default Canada;