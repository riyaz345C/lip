import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import './navbar.css'

function Navbar() {
  const[visibility,setVisibility]=useState(false)
  return (
    <>
    <nav className='lip-navbar'>
    <img src={logo} alt="Logo" />
    <li>Login</li>
    <img src="https://cdn-icons-png.flaticon.com/512/5259/5259008.png" alt="" className='icon' onClick={()=>{setVisibility(prv=> prv= !prv)}} />
    </nav>
    <div className={`sidebar ${visibility?'open':'close'}`}>
      <li>Login</li>
      <li>Login</li>
      <li>Login</li>
      <li>Login</li>
      <li>Login</li>
    </div>
    </>
  )
}

export default Navbar