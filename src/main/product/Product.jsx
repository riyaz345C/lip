import React from 'react'
import ProductInfo from './ProductInfo'
import './product.css'
let x = ['Overview', 'Location', 'Amenities','Specifications', 'Project', 'Plans' ,'FAQ’s']
function Product() {
  return (
    <>
    <section>
    <div className="img">
      <img src={`https://www.vgn.in/asset/img/banners/project-banner.jpg`} alt="" />
    </div>
    <div className="product-info">
      <ProductInfo/>
    </div>
    <div className="nav">
      {x.map((e,i)=>{
        return(
          <li key={i}>{e}</li>
        )
      })}
    </div>
    </section>
    </>
  )
}

export default Product