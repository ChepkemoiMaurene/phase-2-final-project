
import React from 'react'

function BookAppointment() {
  return (
    <div >
<form className='form'>
  <label> fill in the form</label>
  <input className='input' type="email" placeholder='email...'/>
  <input className='input' type="date" placeholder='enter date...'/>
  <input className='input' type="contact" placeholder='eneter phone number'/>
  <input className='input' type="tel"placeholder="+254..."/>
  <input type="submit" value='Book now'/>
</form>
      </div>
  )
}

export default BookAppointment