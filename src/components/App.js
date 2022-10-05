
import './App.css';
import Navbar from './Navbar';
import {Switch, Route} from "react-router-dom"
import ContactUs from "./ContactUs"
import AboutUs from "./AboutUs"
import Home from "./Home"
import BookAppointment from "./BookAppointment"
import { useEffect, useState } from 'react';

function App() {
  const[data ,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/workout')
    .then(response=>response.json())
    .then(data=>
      {
        setData(data)
        console.log(data)
      
      })
    },[])

  return (
    <div>
     <Navbar/>
     <hr></hr>
     <Switch>
      <Route exact path='/about'>
        <AboutUs/>
      </Route>
      <Route exact path="/contactus">
        <ContactUs/>
      </Route>
      <Route  exact path="bookappointment">
        <BookAppointment/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>

     </Switch>
    </div>
  );
}

export default App;
