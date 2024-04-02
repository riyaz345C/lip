import React, { useState } from 'react'
import './projectplan.css'
import Headline from './Headline'

function ProductPlan() {
    const[nav,setnav]=useState(false)
    const handleNav = (set)=>{
        set(prv => prv=!prv)
        console.log(nav);
    }
  return (
    <section className="product-section-4">
    <Headline span={'Project'} div={'Plan'}/>
        <div className="project-nav">
            <li onClick={()=>{handleNav(setnav)}}>Site Plan</li>
            <li onClick={()=>{handleNav(setnav)}}>Floor Plans</li>
            <br />
            <div className={`line ${nav?'right':'left'}`}></div>
        </div>
        <div className="project-content">
            {nav?<>
            <img src={require('../assets/hero.avif')} alt="" />
            </>:<>site</>}
        </div>
    </section>
  )
}

export default ProductPlan