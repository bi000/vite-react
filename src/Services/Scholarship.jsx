import React from 'react'
import ServiceUI from './ServiceUi';
 const Scholarship = () => {
  return (
    <>
<ServiceUI
header={'  Scholarship Assistance '}
intro={'Many students overlook scholarship opportunities — we don’t. Gen Z Global tracks merit-based, need-based, and destination-specific'}
card1={[
  {
Items:'Partner universities',
  },
  {
    Items:'Government schemes (e.g., Destination Australia, Canada Entrance Bursaries',
  },
  {
    Items:'Institutional discounts or alumni grants'
  }

]}
card2={[
  {
Items:'Scholarship matching during course selection'
  },
{
  Items:'SOP/essay writing (for competitive awards)'
},
{
  Items:'Application submission before deadlines'
},
{
  Items:'Guidance on eligibility and renewal conditions  '
}
]}
quotes={'“Over 100 students have received scholarships through our support.”'}
cardHeader1={'Scholarship Offer by:'}
cardHeader2={'We assist with'}
/>
    </>
  )
}
export default Scholarship;