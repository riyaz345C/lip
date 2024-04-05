import React, { useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard'
import './tslider.css'
const map = [1,2,3,4,5,6,7,8,9] //demo
function Tslider() {
    const [x,setX]=useState(0);
    const [autoPlayStop,setStop] = useState(false)
    
    useEffect(()=>{
        if(autoPlayStop) return
        const auto = setInterval(()=>{
            next()
            console.log(x);
        },4000) ;
        return () =>clearInterval(auto)
    },[autoPlayStop,x])

    const next=()=>{
        if(x===map.length - 2){
            setX(0); 
            return
        }
        setX(prv => prv+=1)
        console.log(x);
    }

    const prv=()=>{
        if(x===0) return
        setX(prv => prv-=1)
    }

  return (
    <>
    <h1><span>Customer's </span> Testimonial</h1>
    <div className="slide">
    {map.map((e,i)=>{
        return(
            <TestimonialCard style={{transform:`translateX(calc(-${x * 100}% - ${x * 10}px))`}} key={i} name={e} />
        )
    })}
    </div>
    <div className="slider-controller">
    <button onClick={prv} onMouseEnter={()=>setStop(true)} onMouseLeave={()=>setStop(false)}> <div>←</div> </button>
    <button onClick={next} onMouseEnter={()=>setStop(true)} onMouseLeave={()=>setStop(false)}><div>→</div></button>
    </div>
    </>
  )
}

export default Tslider