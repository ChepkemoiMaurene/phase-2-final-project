
import React,{useState} from 'react'

function BookAppointment() {
  const[contactUs, setContactUs]=useState({
    email:"",
    date:"",
    fullname:"",
    tel:""
  })
  function handleChange(e){
      let name=e.target.name
      let value=e.target.value
      setContactUs({
        ...contactUs, [name]:value,
        
      })
  }
 
  function handleSubmit(e){
      e.preventDefault();
      fetch('http://localhost:3000/book',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(contactUs)

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        alert('your appointment has been received')
      })

  }
  return (
    <div >
      <form onSubmit={handleSubmit} className='form'>
        <label> fill in the form</label>
        <input onChange={handleChange} className='input' type="email" placeholder='email...' name='email'/>
        <input onChange={handleChange} className='input' type="date" placeholder='enter date...' name='date'/>
        <input onChange={handleChange} className='input' type="name" placeholder='enter your fullname...'name='fullname'/>
        <input onChange={handleChange} className='input' type="tel"placeholder="+254..." name='tel'/>
        <input  type="submit"value='Book now'/>
      </form>
    </div>
  )
}

export default BookAppointment