import React, { useEffect, useState } from 'react'
import hero from './assets/hero.avif'
import './home.css'
import SliderOwn from './component/SliderOwn'
import Tslider from './testimonial/Tslider'
import Modal from '../popup/Modal'
const mapData =[{
  place:"chromepet",
  img:"/c",
  path:require('./assets/hero.avif')
},{
  place:"chetpet",
  img:"/m",
  path:require('./assets/logo.jpeg')
},
{
  place:"beach",
  img:"/b",
  path:require('./assets/hero.avif')
}
]
function Home() {
  const [map,setMap] = useState('/c')
  const[url,setUrl] = useState(require('./assets/hero.avif'))

  const mapChng = async(e)=>{
    try{
      // console.log(e.target.children);
      setMap(e.img)
      setUrl(e.path)
    }
    catch(err){
      console.log(err);
    }
  }
  
  const [toggle,setToggle] = useState(false)
  useEffect(() => {
    popup()
  
    return () => {
    popup()
    }
  }, [])

  function popup(){
    const x = setTimeout(() => {
      setToggle(!toggle)
      console.log(10);
    }, 1000);
    return x
    console.log(20);
  }   
  return (
    <>
    {toggle&&<Modal tog={setToggle}/>}
    <div className="hero-img-container">
    <img src={hero} alt="" className='hero-img' />
    <section  className='hero-content'>
      <h1>World Class Homes</h1>
      <h1>At the heart of Chennai</h1>
      {/* <button onClick={()=>setToggle(true)}>tog</button> */}
    </section>
    </div>
    <section className='lip-section-1'>
      <h1><span>Featured</span> Project</h1>
      <SliderOwn/>
    </section>
    <section className='lip-section-2'>
    <h1><span>Explore Our </span> Project</h1>

    <div className="map">
    <img src={url} alt={map} style={{width:"50%",height:'100%'}}/>
    <div className="map-btn">
      <b>Select Locality</b>
      {mapData.map((e,i)=>{
        return(
          <button onClick={()=>mapChng(e)} style={{color:map===e.img?'red':'#898989'}} key={i}>{e.place}</button>
        )
      })}
    </div>
    </div>

    </section>
    <section className='lip-section-3'>
    <Tslider/>
    </section>
    </>
  )
}

export default Home
