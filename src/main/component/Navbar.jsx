import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import './navbar.css'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { routes } from '../data/routes'
import useFetch from '../../adminPanel/project/useFetch'


function Navbar() {
  const[visibility,setVisibility]=useState(false)
  const [isOpen, setOpen] = useState(false)
  const [dropDown,setDropDown] = useState(false)
  const [load,error,projectData] = useFetch('http://localhost:4000/projects')
  // console.log(projectData);
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
        <li key={i} onClick={handleClickX} > <Link to={e.path}>{e.name}
        {e.dropdown?'/':''}
        </Link></li>
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
        <li key={i*2}  > <Link to={e.path} onClick={handleClick}>
          {e.name}
        </Link>
          {e.name!=='Product'?''
          : 
          <>'\/'<button onClick={()=>setDropDown(prv=>prv=!prv)}>set</button>
          {!dropDown ?<></>:<>
         {projectData[0].projects.map((e,i)=>{
          return(
            <div>{e.projectName}</div>
          )
         })}
          </>
          }</>}
        </li>
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