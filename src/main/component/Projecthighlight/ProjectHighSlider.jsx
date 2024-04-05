import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slidercard.css'
import SliderCard from './SliderCard';
const x = [1,2,3,4,5,6,7,8,9] //demo
function ProjectHighSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 937,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 630,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
        ]
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            {x.map((e,i)=>{
                return(
                    <div key={i}>
                        <SliderCard data={e}/>
                    </div>
                )
            })}
          </Slider>
        </div>
      );
}

export default ProjectHighSlider