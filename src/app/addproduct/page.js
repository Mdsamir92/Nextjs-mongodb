"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import "./style.css";
import { useRouter } from 'next/navigation';

function page() {

  const router = useRouter();


  const [customerName, setCustomerName] = useState("");
  const [age, setAge] = useState("");
  const [placeFrom, setplaceFrom] = useState("");
  const [placeTo, setPlaceTo] = useState("");
  const [seat, setSeat] = useState("");
  const [condition, setCondition] = useState("");
  const [passenger, setPassenger] = useState("");



  async function addProduct() {


   // for validate 

    if (customerName.length == "") {
      alert("enter name");
      return;
    } if (age.length == "") {
      alert("enter age");
      return;
    }
    if (placeFrom.length == "") {
      alert("enter placeFrom ");
      return;
    } if (placeTo.length == "") {
      alert("enter placeTo");
      return;
    }
      if (seat.length == "") {
      alert("enter seater or sleeper");
      return;
    }
    if (condition.length == "") {
        alert("enter ac or nonAC");
        return;
      }
      if (passenger.length == "") {
          alert("enter no of passenger");
          return;
        }
    else {
      alert("submit successfully");

     router.push("https://rzp.io/l/vynRzJnzrn");

    }
  
//send data mongodb
    
    let result = await fetch("http://localhost:3000/api/product", {
      method: "POST",
      body: JSON.stringify({ customerName, age, placeFrom, placeTo, condition, seat, passenger })
    });

    result = await result.json();

  }


  return (

    <div className='home'>
      <h1>Ticket Booking </h1>
   

      <div className='form-container'>
        <form >
        <p style={{fontWeight:600}}>Booking Information </p>
        <hr/>

            <label>Customer Name</label> <input type="name" className="input form-control" value={customerName} placeholder='Enter Customer Name...' onChange={(e) => setCustomerName(e.target.value)} required />
         
            <label>Age</label> <input type="number" className="input form-control" value={age} placeholder='Enter Age...' onChange={(e) => setAge(e.target.value)} required />
            <br/>

            <label>Place from</label> <input type="text" className=" input form-control" value={placeFrom} placeholder='Enter city name...' onChange={(e) => setplaceFrom(e.target.value)} required />
            <label className="form-label">Place to</label><input type="text" className=" input form-control" value={placeTo} placeholder='Enter city name...' onChange={(e) => setPlaceTo(e.target.value)} required />
        
            <br/>

            <label className="form-label">Select Seat type</label>
            <input type="text" className=" input form-control" value={seat} placeholder='Seater or Sleeper..' onChange={(e) => setSeat(e.target.value)} required />
         
            <label className="form-label">Select Class type</label>
            <input type="text" className=" input form-control" value={condition} placeholder='Ac or Non-AC..' onChange={(e) => setCondition(e.target.value)} required />
           <br/>
    
            <label className="form-label">No of Passenger</label>
            <input type="number" className=" input form-control" value={passenger} placeholder='enter passenger number..' onChange={(e) => setPassenger(e.target.value)} required />
           
           <br/>
      
          <button className='btn' onClick={addProduct}>Book Now</button>
 
        <br/>
         <hr/>

        </form>

      </div>
      <br />
    </div>



  )
}

export default page
