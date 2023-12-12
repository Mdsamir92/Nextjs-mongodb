"use client"
import React, {useState} from "react";
import { useRouter } from 'next/navigation';
import './style.css';
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginForm() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }else{
        alert("login success ")
        router.push('/addproduct');
      }

   
    } catch (error) {
      console.log(error);
    }
  };



  // let result = await fetch("http://localhost:3000/api/register", {
  //   method: "POST",
  //   body: JSON.stringify({ email,password})
  // });

  // result = await result.json();

  



  return (
    <div className='form-container'>
    <form>
      <label>Email:</label> <br/>
      <input type="text" value={email} placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/>
      <br/>
      <label>Password:</label> <br/>
      <input type="password" value={password} placeholder="enter password" onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <button type="submit" onClick={handleSubmit} className='btn'>Login</button>
      <p style={{color:"red"}}>{error && error}</p>
    </form>
    <br/>
    <Link href={"/signup"}>New user please signup</Link>
    </div>
  );
}