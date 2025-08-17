import React from 'react'
import Ui from './ComplinceHubUi';
 const AntiFraud = () => {
  return (
    <>
    <Ui  
    cardData={[
      {
Maincontent:'Our Commitment ',
subContent:'Gen Z Global strictly prohibits all forms of bribery, kickbacks, or corrupt payments',
icon:'faFileAlt'
      },
      {
Maincontent:'Zero Tolerance ',
subContent:'No employee or sub-agent is allowed to offer, solicit, or accept bribes in any form, including gifts or incentives.',
icon:'faEnvelope'  
},
      {
Maincontent:' Reporting Violations',
subContent:'We encourage anyone witnessing such actions to report immediately to senior management. All reports are investigated fairly and discreetly. .',
icon:'faClock'      
},
      {
Maincontent:'  Global Compliance     ',
subContent:'Our practices align with the UK Bribery Act, FCPA, and local anti-corruption laws where applicable.',
icon:'faShieldAlt'     
},
 
    ]}
    Head={'Anti-Bribery & Corruption Policy'}
    />
    </>
  )
}
export default AntiFraud;
