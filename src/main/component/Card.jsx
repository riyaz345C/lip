import React from 'react'
import img1 from '../assets/hero.avif'
import './card.css'
import { BsFacebook,BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

function Card({title,img}) {
  return (
    <>
    <div className="primary-card">
        {/* <div className="img"></div> */}
        <img src={img?img:img1} alt="" />
        <div className="price pr-color"><span>xxx$</span> onwards*</div>
        <h2 className='pr-color'>{title}</h2>
        <div className="content se-color">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio animi reiciendis totam sunt exercitationem corrupti repellat fugiat itaque, quaerat cupiditate necessitatibus omnis quae repudiandae voluptatum consequuntur in deserunt magni quam.</div>
        <div className="spec1 se-color">
            <div className="icon icon1">logo <br /> span <br />X</div>
            <div className="icon icon2">logo <br /> span <br />X</div>
            <div className="icon icon3">logo <br /> span <br />X</div>
        </div>
        <div className="spec2 se-color">
            <div className="read-more">read-more</div>
            <div className="social-media">
            <div className="facebook"><BsFacebook color={''}/></div>
            <div className="twitter"><FaXTwitter/></div>
            <div className="linkedin"><BsLinkedin/></div>
            </div>
        </div>
        <button>READY TO MOVE IN</button>
    </div>
    </>
  )
}

export default Card