import React from 'react'
import Ui from './codeOfconductUi';
 const CancelPolicy = () => {
  return (
    <>
    <Ui  
    cardData={[
            {
Maincontent:' Application & Service Fees',
subContent:`All service fees paid to Gen Z Global for counselling, application processing, visa guidance, or test preparation are non-refundable once the service has commenced.
Fees paid to third parties universities, testing agencies, visa application centres are subject to their own refund and cancellation policies, which are outside our control.`,
icon:'faEnvelope'  
},
          {
Maincontent:' University/College Application Fees',
subContent:`Application fees charged by institutions are non-refundable under all circumstances.
Any refund request must be made directly to the respective institution, in line with their policy. `
},
          {
Maincontent:` Visa Refusal Cases`,
subContent:`In the event of a visa refusal, Gen Z Global will not refund service fees, as all work is completed before visa submission.
Tuition fee refunds (if applicable) will be processed according to the policy of the respective institution.'` 
},
          {
Maincontent:` Cancellation by the Student`,
subContent:`If a student chooses to cancel services before an application is submitted to an institution or immigration authority, Gen Z Global may consider a partial refund at its discretion after deducting administrative charges.
No refund will be provided if the cancellation occurs after the application has been lodged.`,
icon:'faEnvelope'  
},
          {
Maincontent:` Cancellation by Gen Z Global`,
subContent:`In the rare event that Gen Z Global is unable to proceed with the agreed services due to internal reasons, a full refund of unutilized service fees will be made to the student within 14 business days.`,
icon:'faEnvelope'  
},
          {
Maincontent:` Tuition Fee Refunds`,
subContent:`Tuition fees paid to institutions are governed entirely by their refund policies.
Gen Z Global will assist students in submitting refund applications to the respective institution but holds no liability for the outcome.`,
icon:'faEnvelope'  
},
          {
Maincontent:` Mode of Refund`,
subContent:`Approved refunds will be made via bank transfer to the student’s or parent’s account within 14 business days of confirmation.
Proof of payment may be required to process refunds.`,
icon:'faEnvelope'  
},
          {
Maincontent:` Dispute Resolution`,
subContent:` Any dispute regarding refunds will first be addressed through internal review.
If unresolved, the matter will be referred to the Ministry of Education, Government of Nepal or other relevant authority.`,
icon:'faEnvelope'  
},
    ]}
    Head={'Refund & Cancellation Policy'}
    subContent={'At Gen Z Global Education & Visa Services Pvt. Ltd., we are committed to transparency and fairness in all our services. This Refund & Cancellation Policy outlines the terms and conditions under which refunds may be granted and services may be cancelled.'}
  Note={`Note:This policy is subject to change without prior notice to align with updated institutional, immigration, or legal requirements`}
  />
    </>
  )
}
export default CancelPolicy;
