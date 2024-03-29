import React from 'react'
import './slider.css'
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = []
const num = ['zeo','one','two','three','four']
for(let i=0;i<5;i++){
data.push({id:i,data:num[i]})
}

function SliderComp() {
    var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:1000,
            pauseOnHover:true
          };
  return (
    // <div>Slider</div>
    <>
   {/* <div className="slider"> */}
   < div style={{background:'#000',width:'100%'}}> 
   <Slider {...settings} >
   {data.map(e=>{
        return(
            <div className="box" style={{width:'200px',height:'200px'}} key={e.id}>
                {e.data}
            </div>
        )
    })}
   </Slider>
   </div>
   {/* </div> */}
    </>
  )
}

export default SliderComp;


// export default function SimpleComp() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }