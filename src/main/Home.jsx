import React, { useState } from 'react'
import Navbar from './component/Navbar'
import hero from './assets/hero.avif'
// import Card from './component/Card'
import './home.css'
import SliderOwn from './component/SliderOwn'
import TestimonialCard from './testimonial/TestimonialCard'
import Tslider from './testimonial/Tslider'
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
  return (
    <>
    <Navbar/>
    <div className="hero-img-container">
    <img src={hero} alt="" className='hero-img' />
    <section  className='hero-content'>
      <h1>World Class Homes</h1>
      <h1>At the heart of Chennai</h1>
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
    {/* <h1><span>Customer's </span> Testimonial</h1>
    <div className="slide">
    <TestimonialCard/>
    <TestimonialCard/>
    <TestimonialCard/>
    </div>
    <div className="slider-controller">
    <button>/=</button><button>=\</button>
    </div> */}
    <Tslider/>
    </section>
    </>
  )
}

export default Home
