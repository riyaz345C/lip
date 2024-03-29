import React from 'react'
import img from '../assets/hero.avif'
import './card.css'
function Card({title}) {
  return (
    <>
    <div className="card">
        {/* <div className="img"></div> */}
        <img src={img} alt="" />
        <div className="price pr-color"><span>xxx$</span> onwards*</div>
        <h2 className='pr-color'>{title}</h2>
        <div className="content se-color">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio animi reiciendis totam sunt exercitationem corrupti repellat fugiat itaque, quaerat cupiditate necessitatibus omnis quae repudiandae voluptatum consequuntur in deserunt magni quam.</div>
        <div className="spec1 se-color">
            <div className="icon1">A</div>
            <div className="icon2">B</div>
            <div className="icon3">C</div>
        </div>
        <div className="spec2 se-color">
            <div className="read-more">read-more</div>
            <div className="facebook">F</div>
            <div className="linkedin">in</div>
        </div>
        <button>READY TO MOVE IN</button>
    </div>
    </>
  )
}

export default Card