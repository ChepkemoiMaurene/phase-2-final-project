import React from 'react'

function ContactUs({data}) {
  const  findData=data.map((everyData)=>(
    <>
<div>
     <img src='https://media.istockphoto.com/vectors/fitness-vector-abstract-design-templatedesign-for-gym-and-fitness-vector-id1144084265?k=20&m=1144084265&s=612x612&w=0&h=t4m6NE8NRCQIOLSFMmtj1qlfJJPao-t8GQ8jVPEulLw=' alt='logo'></img>
     <h1>Tsunami website</h1>
     <img src="https://fontawesome.com/icons/facebook" alt='facebook'></img>
     <img src="https://fontawesome.com/icons/twitter" alt="twitter"></img>
     <img src="https://fontawesome.com/icons/instagram"alt="insta"></img>
     <p></p>

</div>

    </>
  ))
  return (
    <div>ContactUs
    {findData}
    </div>
  )
}

export default ContactUs