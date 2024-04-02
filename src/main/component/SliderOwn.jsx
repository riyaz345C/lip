import React, { useEffect, useState } from 'react'
import Card from './Card'
import './slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const title=['qwer','123','asdf','zxcv','cftg']
function SliderOwn() {
  const [width,setWidth]=useState()
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // slidesToShow: ((width<800)? 1 : ((width<888)? 2 : 3) ),  
        slidesToShow: ((3) ),  
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed:2000,
        // pauseOnHover:true
        responsive:[
          {
            breakpoint:890,
            settings:{
              slidesToShow:2
            }
          },{
          breakpoint:800,
          settings:{
            slidesToShow:1
          }
        },
      ]
      };
  return (
    <>
    {/* <div className="slider"> */}
    <Slider {...settings}>
      {title.map((e,i)=>{
        return(
          <Card title={e} key={i}/>
        )
      })}
        {/*  */}
    </Slider>
    {/* </div> */}
    </>
  )
}

export default SliderOwn