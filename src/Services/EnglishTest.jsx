import React from 'react'
import ServiceUI from './ServiceUi';
 const EnglishTest = () => {
  return (
    <>
<ServiceUI
header={' English Test Preparation (IELTS, PTE, Duolingo) '}
intro={'We offer intensive preparation classes tailored to each student’s strengths and visa goals. Our test prep is led by certified instructors and focuses on: '}
card1={[
  {
Items:'IELTS Academic (UK, Canada, Australia, Ireland, NZ)',
  },
  {
    Items:'PTE Academic (Australia, Canada, UK – accepted widely)',
  },
  {
    Items:'Duolingo English Test (Accepted by 3000+ institutions globally)'
  }

]}
card2={[
  {
Items:'Mock tests with real scoring simulation'
  },
{
  Items:'One-on-one feedback and speaking drills'
},
{
  Items:'Custom prep timeline based on test date and visa plan '
},
{
  Items:'Grammar and vocabulary enhancement modules '
}
]}
quotes={'“Your English score is your ticket — let’s unlock it together.”'}
cardHeader1={'What we Offer'}
cardHeader2={'Why Choose Us ?'}
/>
    </>
  )
}
export default EnglishTest;