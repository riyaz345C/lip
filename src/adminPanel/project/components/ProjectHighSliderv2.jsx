import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './slidercard.css'
import SliderCardv2 from './SliderCardv2';
function ProjectHighSliderv2({ammArray}) {
  console.log(ammArray.length==3||ammArray.length);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        // slidesToShow: ammArray.length%3<0?1:3,
        slidesToShow: 1,
        // slidesToScroll: ammArray.length%3<0?1:3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 937,
            settings: {
              slidesToShow: ammArray.length%2<2?1:2,
              // slidesToShow: 1,
              slidesToScroll: ammArray.length%2<2?1:2,
              // slidesToScroll: 1,
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
            {ammArray.map((e,i)=>{
                return(
                    <div key={i}>
                        <SliderCardv2 data={e.content} img={e.img}/>
                    </div>
                )
            })}
          </Slider>
        </div>
      );
}

export default ProjectHighSliderv2