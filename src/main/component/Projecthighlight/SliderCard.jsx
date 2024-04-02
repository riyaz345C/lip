import React from 'react'
import './slidercard.css'
const SliderCard = ({data}) => {
  return (
   <div className="project-highlights-card">
    <img src={require('../../assets/hero.avif')} alt="" />
    <h3>some content inside {data}</h3>
   </div>
  )
}

export default SliderCard