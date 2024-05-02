import React from 'react'
import { api } from '../../api'

function ProductInfo({projectName,subtitle,boxArray}) {
  return (
    <>
    <img src={`${api.get}/lip.jpg`} alt="" />
    <h2>{projectName ||`projectName`} <br />
    {subtitle ||`subtitle`}</h2>
<h4>TNRAR/A2/08863/2023</h4>
<div className="info">
   {boxArray.map(e=>{return(
     <div className="points" key={e.id}>
     <h3>{e.head||`head`}</h3>
     <p>{e.content||`paragraph`}</p>
 </div>
   )})}
    <button>btn-name</button>
    <button>btn-name</button>
    <button>btn-name</button>
</div>
    </>
  )
}

export default ProductInfo