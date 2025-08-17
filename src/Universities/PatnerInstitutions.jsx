import React from 'react'
import PatnerI from '../Services/ServiceUi';
 const PatnerInstitutions = () => {
 return (
    <>
<PatnerI
header={`Partner Institutions`}
intro={`Gen Z Global Education & Visa Services proudly partners with over 100 reputable universities, 
colleges, and pathway providers across:`}
card1={[
  {
Items:'Australia ',
  },
  {
    Items:` United Kingdom`,
  },
  {
    Items:' Canada '
  },
  {
    Items:'United States  '
  },
  {
    Items:' New Zealand '
  },
  {
    Items:' Ireland  '
  },
  {
    Items:' France, Germany & EU Countries '
  }

]}
card2={[
  {
Items:`Student diversity `
  },
{
  Items:`Ethical and transparent recruitment `
},
{
  Items:`High visa success and retention `
},
{
  Items:'Compliant documentation and admissions integrity '
}
]}
quotes={`“We don’t just represent institutions — we advocate for quality, fit, and long-term student 
success.” `}
cardHeader1={`partners with 100 reputed universities`}
cardHeader2={`institutions Values`}
slogan={` Logos of select partners can be displayed here with permission — or use “Representative Only"`}
/>

    </>
  )
}
export default PatnerInstitutions;