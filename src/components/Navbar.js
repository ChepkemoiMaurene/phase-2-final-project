import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(){
  return (
    <div className='navlinks'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink  to="/bookappointment">Book Appointment</NavLink>
        <NavLink to="/contactus">Contact Us</NavLink>

    </div>
  )
}

export default Navbar