import React from 'react'
import ServiceUI from './ServiceUi';
 const DocumentVerify = () => {
  return (
    <>
<ServiceUI
header={'Document Verification & File Preparation'}
intro={'Our team verifies and organizes every academic and financial document to ensure compliance with visa rules, university policies, and credibility interviews.'}
card1={[
  {
Items:'Transcript and certificate screening ',
  },
  {
    Items:'Financial capacity checks ',
  },
  {
    Items:'Notarization coordination'
  },
  {
    Items:'Translation (if required) '
  },
  {
    Items:'Checklist-based file preparation with detailed tracking'
  }

]}
card2={[
  {
Items:`Guidance on document notarization and translation`
  },
{
  Items:`Mock interviews for visa preparation`
},
{
  Items:`Checklist customized for your destination country`
},
{
  Items:`Apostille and legalization support`
}
]}
quotes={'“Every detail matters. One missing form can delay your dream — we won’t let that happen.”'}
cardHeader1={'We offer: '}
cardHeader2={'Additional Support We Offer'}
/>
    </>
  )
}
export default DocumentVerify;