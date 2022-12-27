import React from 'react'
import thanks from '../images/icon-thank-you.svg'

const Thanks = () => {
  return (
    <>
<div className="infoSide thanksSection">
    <div className="logo">
        <img  src={thanks}/> 
    </div>
    <div className="thanks">
        <p>Thank you!</p>
    </div>
<div className="text">
    <p>Thanks For confirming your subscription! We hope you have fun using our platform . if you ever need support , please feel free to email us to support@loremgaming.com.</p>
</div>
</div>


    </>
  )
}

export default Thanks