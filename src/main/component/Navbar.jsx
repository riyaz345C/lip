import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import './navbar.css'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { routes } from '../data/routes'
import { MdOutlineArrowDropDown  } from "react-icons/md";
import Dropdown from './navbar_components/Dropdown'
import Loader from '../assets/Loader'

function Navbar({projectData}) {
  const[visibility,setVisibility]=useState(false) //2
  const [isOpen, setOpen] = useState(false) //1
  const [dropDown,setDropDown] = useState(false) //1+2
  const [rotate,setRotate] = useState(false) //1
  // sidebar
  function handleClick(x){
    window.scrollTo({top:0,behavior:'smooth'})
    setVisibility(!visibility)
    setDropDown(false)
    setOpen(false)
  }
  // =====================
  function handleClickX(x){
    window.scrollTo({top:0,behavior:'smooth'})
  }
  function handleToggle() {
    setVisibility(!visibility)
    setDropDown(false)
  }
  const handleEnter = (e) => {
    console.log(e.name);
    setRotate(e.name)
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
          <Link to={e.path} 
          onMouseEnter={()=>e.dropdown&&handleEnter(e)} onMouseLeave={()=>e.dropdown&&handleLeave(e)}>
             {e.name} 
            <div className="dropdown" style={{position:'fixed',height:'fit-content',backgroundColor:'#fff',}}>
              {
              rotate===e.name && e.dropdown && (
                Boolean(e?.paths)?
                e.paths.map((e,i)=>{
                  return(
                    // <Link to={`project/${e.paths}`} onClick={handleLeave}
                    // style={{display:'block',fontSize:'15px',padding:'10px 20px',textDecoration:'none',color:'#222'}}>{e.name}</Link>
                    <Dropdown name={e.name} paths={e.path} click={handleLeave}/>
                  )
                }):
                projectData?
                  projectData[0].projects.map((e,i)=>{
                  return(
                    // <Link to={`project/${e.projectName}`} onClick={handleLeave}
                    // style={{display:'block',fontSize:'15px',padding:'10px 20px',textDecoration:'none',color:'#222'}}>{e.projectName}</Link>
                    <Dropdown name={e.projectName} paths={`project/${e.projectName}`} click={handleLeave}/>
                  )
                  })
                :
                  // <div style={{display:'flex',alignItems:'center',fontSize:"15px",}}>
                  // loading...<Example size={25}/></div>    
                  <Dropdown name={'loading...'} component={<Loader size={20}/>}/>
                )
              }
            </div>
          </Link>
          {e.dropdown && <MdOutlineArrowDropDown style={{transform: `rotate(${rotate==e.name?'180deg':'0deg'})`}}/> }
          </li>
        )
    })}</div>
     <div className="icon"><Hamburger className='icon' toggled={isOpen} toggle={setOpen}
      onToggle={handleToggle} duration={0.5} rounded  easing="ease" /></div>
    </nav>
{/* =================================================================================================================== */}
{/* =================================================================================================================== */}
{/* =================================================================================================================== */}
   <div className={`sidebar-container  ${ visibility?'open':'close'}`} key={'sidebarContainer'}>
   <div className={`sidebar ${visibility?'sidebar-open':''}`}>
    {routes.map((e,i)=>{
      return(
        <>
        <li key={i*2}>
          <Link to={e.path} onClick={()=>{
           !e.dropdown?handleClick():setDropDown(prv=>prv!==e.name?prv=e.name:prv=false)
          }} style={{textDecoration:'none',color:'#000'}}>
          {e.name}
          </Link>
            {e.dropdown && 
              <> 
                {e.dropdown && <MdOutlineArrowDropDown onClick={()=>setDropDown(prv=>prv!==e.name?prv=e.name:prv=false)}
                 style={{transform: `rotate(${dropDown === e.name?'180deg':'0deg'})`}} 
                /> }
                {
                  dropDown===e.name && 
                  ((e?.paths) ?
                  e.paths.map((e,i)=>{
                    return(
                      // <Link to={`${e.name}`} onClick={handleClick}
                      //  style={{display:'block',padding:'10px',textDecoration:'none',color:'#222'}}>{e.name}</Link>
                      <Dropdown paths={e.path} click={handleClick} name={e.name}/>
                    )
                  })
                  :
                  <div style={{display:'flex',flexFlow:'column',alignItems:'center'}}>
                   {
                    projectData?
                    projectData[0].projects.map((e,i)=>{
                      return(
                        // <Link to={`project/${e.projectName}`} onClick={handleClick}
                        //  style={{display:'block',padding:'10px',textDecoration:'none',color:'#222'}}>{e.projectName}</Link>
                        <Dropdown paths={`project/${e.projectName}`} click={handleClick} name={e.projectName}/>
                      )
                    })
                    :
                  // <div style={{display:'flex',fontSize:"15px",alignItems:'center',}}>loading...<Example size={25}/></div>
                    <Dropdown name={'loading...'} component={<Loader size={20}/>}/>
                  }
                  </div>)
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