import React from 'react'
import Ui from './ComplinceHubUi';
 const Epolicy = () => {
  return (
    <>
    <Ui  
    cardData={[
      {
Maincontent:'Our Commitment ',
subContent:'Gen Z Global prioritizes the safety, support, and special care of students under the age of 18. We recognize the unique responsibilities involved in counseling and placing minors for international education. ',
icon:'faFileAlt'
      },
      {
Maincontent:' Welfare and Guardianship  ',
subContent:'We only recommend institutions that provide verified welfare and guardianship arrangements for underage students We assist parents and students in understanding visa and living requirements for minors.  ',
icon:'faEnvelope'  
},
      {
Maincontent:'  Parental Communication   ',
subContent:'We maintain open and regular communication with parents or legal guardians throughout the application and settlement process. ',
icon:'faClock'      
},
      {
Maincontent:' Safeguarding Standards    ',
subContent:'We ensure all staff dealing with minors are trained in child safety and follow safeguarding protocols. We also align with institutional policies regarding underage students.',
icon:'faShieldAlt'     
},
    ]}
    Head={' Under 18 Policy '}
    />
    </>
  )
}
export default Epolicy;
