import React, { useEffect, useState } from 'react'
import Card from './Card'
import './slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from '../../adminPanel/project/useFetch';
import { api } from '../../adminPanel/api';
const title=['qwer','123','asdf','zxcv','cftg'] //demo 
function SliderOwn() {
  // const [width,setWidth]=useState()
  
  const [x,y,dataFetched] = useFetch(api.projects)
  console.log(x,y,dataFetched);
  // useEffect(() => {
    // const handleResize = () => {
    //   setWidth(window.innerWidth);
    // };
    // window.addEventListener('resize', handleResize);
  // }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // slidesToShow: ((width<800)? 1 : ((width<888)? 2 : 3) ),  
        slidesToShow: 3,  
        slidesToScroll: 0,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true,
        responsive:[
        //   {
        //     breakpoint:890,
        //     settings:{
        //       slidesToShow:1
        //     }
        //   },
        //   {
        //   breakpoint:800,
        //   settings:{
        //     slidesToShow:1
        //   }
        // },
      ]
      };
      // const dataFetchedx = [{projects:[
      //   {projectName:"Ina Richard"},
      //   {projectName:"Ina Richard"},
      //   {projectName:"Ina Richard"},
      //   {projectName:"Ina Richard"},
      // ]}]
  return (
    <>
    <Slider {...settings}>
      {dataFetched?dataFetched[0].projects.map((e,i)=>{
        return(
            <Card title={e.projectName+i} key={i}/>
        )
      }):<>loading...</>}
    </Slider>
    </>
  )
}

export default SliderOwn