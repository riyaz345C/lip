import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import './navbar.css'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { routes } from '../data/routes'
import useFetch from '../../adminPanel/project/useFetch'
import { MdOutlineArrowDropDown  } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

function Navbar({projectData}) {
  const[visibility,setVisibility]=useState(false)
  const [isOpen, setOpen] = useState(false)
  const [dropDown,setDropDown] = useState(false)
  const [rotate,setRotate] = useState(false)
  // const [load,error,projectData] = useFetch('http://localhost:4000/projects')
  // console.log(projectData);
  function handleClick(x){
    window.scrollTo({top:0,behavior:'smooth'})
    setVisibility(!visibility)
    setDropDown(false)
    setOpen(false)
  }
  function handleClickX(x){
    window.scrollTo({top:0,behavior:'smooth'})
  }
  function handleToggle() {
    setVisibility(!visibility)
    setDropDown(false)
  }
  const handleEnter = (e) => {
    // console.log('entered');
    setRotate(true)
  }
  const handleLeave = (e) => {
    console.log('leaved');
    setRotate(false)
  }
  console.log({projectData:projectData});
  return (
    <>
    <nav className='lip-navbar'>
    <img src={logo} alt="Logo" />
    <div className='lip-nav-links'>
      {routes.map((e,i)=>{
        return(
          <li key={i} onClick={handleClickX} >
          <Link to={e.path} onMouseEnter={e.dropdown&&handleEnter} onMouseLeave={e.dropdown&&handleLeave}>
             {e.name} 
            <div className="dropdown" style={{position:'fixed',height:'fit-content',backgroundColor:'#fff',}}>
              {rotate && e.dropdown && (projectData?projectData[0].projects.map((e,i)=>{
                return(
                  <Link to={`project/${e.projectName}`} onClick={handleLeave}
                  style={{display:'block',fontSize:'15px',padding:'10px 20px',textDecoration:'none',color:'#222'}}>{e.projectName}</Link>
                )
              }):<>loading...</>)}
            </div>
          </Link>
          {e.dropdown && <MdOutlineArrowDropDown style={{transform: `rotate(${rotate?'180deg':'0deg'})`}}/> }
          </li>
        )
    })}</div>
     <div className="icon"><Hamburger className='icon' toggled={isOpen} toggle={setOpen}
      onToggle={handleToggle} duration={0.5} rounded  easing="ease" /></div>
    </nav>

   <div className={`sidebar-container  ${ visibility?'open':'close'}`} key={'sidebarContainer'}>
   <div className={`sidebar ${visibility?'sidebar-open':''}`}>
    {routes.map((e,i)=>{
      return(
        <>
        <li key={i*2}>
          <Link to={e.path} onClick={()=>e.dropdown?setDropDown(prv=>prv=!prv):handleClick} style={{textDecoration:'none',color:'#000'}}>
          {e.name}
          </Link>
            {e.name!=='Projects'?'': 
              <> 
                {/* <button onClick={()=>setDropDown(prv=>prv=!prv)}>set</button> */}
                {e.dropdown && <MdOutlineArrowDropDown onClick={()=>setDropDown(prv=>prv=!prv)}
                 style={{transform: `rotate(${dropDown?'180deg':'0deg'})`}} 
                /> }
                {
                  !dropDown ? <></> : 
                  <div>
                    {projectData?projectData[0].projects.map((e,i)=>{
                      return(
                        <Link to={`project/${e.projectName}`} onClick={handleClick}
                         style={{display:'block',padding:'10px',textDecoration:'none',color:'#222'}}>{e.projectName}</Link>
                      )
                    }):<>loading...</>}
                  </div>
                }
              </>
            }
        </li>
        </>
      )
    })}
  </div>
  </div>
    </>
  )
}

export default Navbar