import React from 'react'


function ContactUs(){
  
  return (
    <>
   <h2 style={{textAlign:"center", color:"red"}}>Want to reach Us?</h2>
    <div className='contactSection'>
      <div className='contactCard'>
        <h3>Talk to Customer Care</h3>
        <p>Do you have any questions regarding our packages?
          and our company? <br/>
          Talk to our Customercare
        </p>
        <span style={{textAlign:"center", color:"red" ,fontWeight:"600", fontSize:"18px"}} ><p>+2547112000900</p></span>
        
      </div>
      <div className='contactCard'>
        <h3>Talk to personal Trainer</h3>
        <p>
          Do you have any questions about your training program?
          Reach out to your trainer
        </p>
        <span style={{textAlign:"center", color:"red",fontWeight:"600", fontSize:"18px"}}><p>+2547112345676</p></span>
      </div>
      <div className='contactCard'>
        <h3>Check our Social media pages</h3>
        <p>talk to us via our social media handles @Tsunamigym in facebook instagram and twitter</p>
        
      </div>
      
    </div>
    </>
  )
}

export default ContactUs