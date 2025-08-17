import React from 'react'
import Ui from './ComplinceHubUi';
 const GrievancePolicy = () => {
  return (
    <>
    <Ui  
    cardData={[
      {
Maincontent:'Our Commitment ',
subContent:'We are dedicated to providing transparent and responsive services. This policy outlines how clients can raise concerns and how we resolve them fairly. ',
icon:'faFileAlt'
      },
      {
Maincontent:'  How to Lodge a Complaint  ',
subContent:'Students can submit complaints via email, phone, or in person. All complaints are documented and acknowledged within 2 working days.  ',
icon:'faEnvelope'  
},
      {
Maincontent:'  Resolution Timeline  ',
subContent:'We aim to resolve most issues within 7 working days. Complex matters may take longer, with updates provided throughout. ',
icon:'faClock'      
},
      {
Maincontent:'  Confidentiality and Fairness   ',
subContent:'All complaints are handled confidentially and without bias. No student will face negative consequences for making a complaint in good faith.',
icon:'faShieldAlt'     
},
      {
Maincontent:'   Escalation Process    ',
subContent:'If unsatisfied, students may request a review by senior management or be referred to a relevant external body or partner institution.',
icon:'faArrowCircleUp'     
}
    ]}
    Head={' Student Grievance & Complaint Resolution Policy'}
    />
    </>
  )
}
export default GrievancePolicy;
