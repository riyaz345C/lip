import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import './navbar.css'
import { Link } from 'react-router-dom'

const routes = [
  {name:'Home',path:'/'},
  {name:'product',path:'/product',},
  {name:'Home',path:'/'},
  {name:'product',path:'/product',},
  {name:'Home',path:'/'},
  {name:'product',path:'/product',},
]
function Navbar() {
  const[visibility,setVisibility]=useState(false)
  function handleClick(x){
    window.scrollTo({top:0,behavior:'smooth'})
    setVisibility(!visibility)
  }
  function handleClickX(x){
    window.scrollTo({top:0,behavior:'smooth'})
  }
  return (
    <>
    <nav className='lip-navbar'>
    <img src={logo} alt="Logo" />
    <div className='lip-nav-links'>{routes.map((e,i)=>{
      return(
        <li key={i} onClick={handleClickX} > <Link to={e.path}>{e.name}</Link></li>
      )
    })}</div>
    <img src="https://cdn-icons-png.flaticon.com/512/5259/5259008.png" alt="" className='icon'
     onClick={()=>setVisibility(!visibility)} />
    </nav>
    <div className={`sidebar ${visibility?'open':'close'}`}>
    {routes.map((e,i)=>{
      return(
        <li key={i} onClick={handleClick} > <Link to={e.path}>{e.name}</Link></li>
      )
    })}
      <li>Login</li>
      <li>Login</li>
      <li>Login</li>
    </div>
    </>
  )
}

export default Navbar