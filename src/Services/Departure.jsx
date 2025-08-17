import React from 'react'
import ServiceUI from './ServiceUi';
 const Departure = () => {
  return (
    <>
<ServiceUI
header={'Pre-departure & Post-arrival Support '}
intro={'Getting a visa is just the beginning. We provide full support before and after your flight to help you adjust smoothly'}
card1={[
  {
Items:'Cultural orientation and do/don’ts ',
  },
  {
    Items:'Accommodation guidance (hostel or homestay)',
  },
  {
    Items:' Airport arrival tips'
  },
  {
    Items:'Packing checklists and travel rules'
  },
  {
    Items:'Health insurance briefings (OSHC, NHS, etc.)'
  }

]}
card2={[
  {
Items:' Onshore check-ins and alumni connection'
  },
{
  Items:'Job search advice (part-time)'
},
{
  Items:'Support in setting up bank, SIM, and transit cards '
},
{
  Items:' Mental health & homesickness resources'
}
]}
quotes={'“Your new chapter should feel exciting — not overwhelming.”'}
cardHeader1={'Pre-departure'}
cardHeader2={'Post-arrival'}
/>
    </>
  )
}
export default Departure;