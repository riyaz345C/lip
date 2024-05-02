import React from 'react'
import '../../../main/component/Projecthighlight/slidercard.css'
import { api } from '../../api'
const SliderCardv2 = ({data,img}) => {
  return (
   <div className="project-highlights-card">
    <img src={`${api.get}${img}`} alt="" />
    <h3>{data}</h3>
   </div>
  )
}

export default SliderCardv2