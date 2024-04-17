import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import './navbar.css'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { routes } from '../data/routes'


function Navbar() {
  const[visibility,setVisibility]=useState(false)
  const [isOpen, setOpen] = useState(false)
  function handleClick(x){
    window.scrollTo({top:0,behavior:'smooth'})
    setVisibility(!visibility)
    setOpen(false)
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
     <div className="icon"><Hamburger className='icon' toggled={isOpen} toggle={setOpen}
      onToggle={()=>setVisibility(!visibility)} duration={0.5} rounded  easing="ease" /></div>
    </nav>

   <div className={`sidebar-container  ${ visibility?'open':'close'}`} key={'sidebarContainer'}>
   <div className={`sidebar ${visibility?'sidebar-open':''}`}>
    {routes.map((e,i)=>{
      return(
        <>
        <li key={i*2} onClick={handleClick} > <Link to={e.path}>{e.name}</Link></li>
        {/* <li key={i} onClick={handleClick} > <Link to={e.path}>{e.name}</Link></li> */}
        </>
      )
    })}
    </div>
   </div>
    </>
  )
}

export default Navbar