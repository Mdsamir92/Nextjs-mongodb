'use client'
import Image from 'next/image'
import Profile from '../../public/vercel.svg'
import Link from 'next/link'
import React from 'react'
// import styles from './page.module.css'

import SignupForm from './components/SignupForm'


function Home() {
  return (
    <div >
{/* className={styles.main} */}
  {/* <Sam name="samir"/> */}
 {/* <h1>next learn</h1> */}
{/* <br/>
<Image src={Profile} />
<Image src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600" 
  width={300} height={200}
/>
<br/>
<button onClick={()=> alert("hello nextjs")}>click me</button> */}


{/* <br/> */}
{/* <Link href={"/addproduct"}>add product </Link> */}
{/* <LoginForm /> */}
<SignupForm />

    </div>
  )
}
export default Home

