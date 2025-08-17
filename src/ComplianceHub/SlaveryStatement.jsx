import React from 'react'
import Ui from './codeOfconductUi';
import { icon } from '@fortawesome/fontawesome-svg-core';
 const CodeOfConduct = () => {
  return (
    <>
    <Ui  
    cardData={[
            {
Maincontent:'Purpose',
subContent:'Gen Z Global Education & Visa Services Pvt. Ltd. is committed to preventing modern slavery, human trafficking, forced labour, and exploitation in all aspects of our operations and supply chains. This policy outlines our commitment to ethical practices and our zero-tolerance approach to modern slavery.',
icon:null, 
},
      {
Maincontent:' Our Business',
subContent:'Gen Z Global is a Nepal Government-registered educational consultancy based in Baluwatar, Kathmandu. We support students in pursuing international education opportunities in Australia, Canada, the UK, USA, Ireland, Denmark, and New Zealand. Our services include counselling, visa processing, test preparation, and student welfare support.',
icon:null,
      },
      {
Maincontent:' Our Commitment',
subContent:[
'No form of forced, bonded, or involuntary labor is tolerated in our organization or by those we work with.',
'All employees and partners are treated fairly and ethically.',
'We only work with institutions and service providers who share our values on human rights and ethical business practices..' 
],
icon:'faClock'      
},
      {
Maincontent:' Risk Management',
subContent:[
` Background checks and due diligence on education providers and partners`,
`Contracts with clear expectations regarding ethical conduct and compliance with 
anti-slavery laws.`,
`Internal training and awareness among staff on recognizing signs of exploitation or 
unethical practices. `
],
icon:null,     
},
      {
Maincontent:' Employee Rights and Welfare  ',
subContent:[
    `Voluntary employment with fair compensation.`,
    `Safe working conditions`,
    `Freedom of association and protection from discrimination or harassment.`
],
icon:null,    
},
{
Maincontent:' Third-Party Relationships',
subContent:[
    `Comply with modern slavery laws. `,
    `Uphold fair labor standards and ethical recruitment practices.`,
    ` Cooperate in audits or compliance reviews when necessary. `
],
icon:null,
},
{
Maincontent:' Continuous Improvement ',
subContent:`We review this policy annually and update it based on changes in law, industry best practices, 
or operational developments.`,
icon:null,
},
    ]}
    Head={' Modern Slavery Policy'}
    />
    </>
  )
}
export default CodeOfConduct;
