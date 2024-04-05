import React from 'react'

function Slantsq({color,classn}) {
  return (
    <div style={{width:'70px',aspectRatio:'1/1',backgroundColor:`${color}`,
borderRadius:' 19px 0 19px 0'}} className={`${classn}`} ></div>
  )
}

export default Slantsq