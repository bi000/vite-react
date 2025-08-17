import React from 'react'
import Ui from './ComplinceHubUi';
 const DataProtection = () => {
  return (
    <>
    <Ui  
    cardData={[
      {
Maincontent:'Our Commitment ',
subContent:'We respect and protect student data in compliance with international privacy regulations including GDPR. ',
icon:'faFileAlt'
      },
      {
Maincontent:' Data Collection Transparency   ',
subContent:'We collect only necessary information and always inform students of the purpose and scope. ',
icon:'faEnvelope'  
},
      {
Maincontent:'Storage and Access',
subContent:'All digital records are securely stored and only accessible to authorized personnel.',
icon:'faClock'      
},
      {
Maincontent:'  Third-party Sharing    ',
subContent:'We do not sell or share student data without written consent unless required by law.',
icon:'faShieldAlt'     
},
    {
Maincontent:' Security Systems     ',
subContent:'We use encrypted communication, secure cloud platforms, and multi-level access controls.',
icon:'faShieldAlt'     
}
    ]}
    Head={' Data Protection & Information Security Policy  '}
    />
    </>
  )
}
export default DataProtection;
