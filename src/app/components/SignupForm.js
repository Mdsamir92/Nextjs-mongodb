"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import './style.css';
import Link from "next/link";


export default function SignupForm() {

    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary.");
            return;
          }
      
          try {
            const resUserExists = await fetch("api/userExists", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            });
      
            const { user } = await resUserExists.json();
      
            if (user) {
              setError("User already exists.");
              return;
            }else{

                alert("register successfully")
                router.push("/login");
            }
           
      
        let result = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            body: JSON.stringify({name, email,password})
          });
        
          result = await result.json();


        }catch (error) {
          console.log("Error during registration: ", error);
        }
      };
        


    return (
        <div className='form-container' >
        <form >
            <label>Name:</label> <br />
            <input type="text" value={name} placeholder="enter name" onChange={(e) => setName(e.target.value)} /><br/>
           
            <label>Email:</label> <br />
            <input type="text" value={email} placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Password:</label> <br />
            <input type="password" value={password} placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit" onClick={handleSubmit} className='btn'>Register</button>
         <p style={{color:"red"}}>{error && error}</p>
        </form>

        <br/>
        <Link href={"/login"}>Login with existing account</Link>
        </div>
    );
}
