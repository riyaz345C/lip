import './gallery.css';
import React from "react";
import about from './g-images/bg-gallery.jpg';
import yr1 from './g-images/year-11.jpg';
import yr2 from './g-images/year-111.jpg';
import yr3 from './g-images/year-112.jpg';
import yr4 from './g-images/year-113.jpg';
import y01 from './g-images/10-year1.jpg';
import y02 from './g-images/10-year2.jpg';
import y03 from './g-images/10-year3.jpg';
import y04 from './g-images/10-year4.jpg';

import y201 from './g-images/yr12-1.jpg';
import y202 from './g-images/yr12-2.jpg';
import y203 from './g-images/yr12-3.jpg';
import y204 from './g-images/yr12-4.jpg';




import { FaAngleDoubleRight, FaAlignCenter, FaAngleRight } from "react-icons/fa";
import Tslider from "../../main/testimonial/Tslider";
import SliderOwn from "../../main/component/SliderOwn";
import ProjectHighSlider from "../../main/component/Projecthighlight/ProjectHighSlider";

const Gallery = () => {
  return (
    <>
      <img src={about} alt="contact-bg" className="contact-bg" />
      <div className="semi-circle">
        <div className="element">
          <div className="home">Home</div>
          <FaAngleDoubleRight className='doubearrow' />
        </div>
        <div className="contact">LIP Gallery</div>
      </div>
      <div className="infrabox">
        <div className="container-contact">
          <div className="topp">
            <a href="#" className='homec'>
              <p>Home</p>
            </a>
            <FaAngleRight className='singlearrow' />
            <p>Gallery</p>
          </div>
        </div>
      </div>

      <div className="bridge ">
      <h2 className="infra-title" id="bridges">
         <span>12th Year   </span> Celebration 
      </h2>
      <p className="gallery-whovr">
      Explore the journey of 12 years with Our Lands India Properties through our exclusive gallery, showcasing prime properties and milestones</p>
   <div className="card-full">
   <div className="card11">
      <img src={y201}   className="img112" alt="Description of my image" />   
      
    </div>

    <div className="card11">
      <img src={y202}   className="img112" alt="Description of my image" />   
      
    </div>
    <div className="card11">
      <img src={y203}   className="img112" alt="Description of my image" />   
     
    </div>
    <div className="card11">
      <img src={y204}   className="img112" alt="Description of my image" />   
    
    </div>


    </div>
   </div>
   <br /><br />


      <div className="bridge ">
      <h2 className="infra-title" id="bridges">
         <span>11 th Year   </span> Celebration 
      </h2>
      <p className="gallery-whovr">
      Celebrating 11 years of excellence in land sales, Lip brings you the finest properties to build your dreams. 
   </p>
   <div className="card-full">
   <div className="card11">
      <img src={yr1}   className="img112" alt="Description of my image" />   
      
    </div>

    <div className="card11">
      <img src={yr2}   className="img112" alt="Description of my image" />   
      
    </div>
    <div className="card11">
      <img src={yr3}   className="img112" alt="Description of my image" />   
     
    </div>
    <div className="card11">
      <img src={yr4}   className="img112" alt="Description of my image" />   
    
    </div>


    </div>
   </div>
   <br /><br />

   <div className="bridge ">
      <h2 className="infra-title" id="bridges">
         <span>10th Year   </span> Celebration 
      </h2>
      <p className="gallery-whovr">
      Discover 10 years of dedication and quality in land sales with Lip. Visit our gallery to find the perfect property that suits your vision. </p>
   <div className="card-full">
   <div className="card11">
      <img src={y01}   className="img112" alt="Description of my image" />   
      
    </div>

    <div className="card11">
      <img src={y02}   className="img112" alt="Description of my image" />   
      
    </div>
    <div className="card11">
      <img src={y03}   className="img112" alt="Description of my image" />   
     
    </div>
    <div className="card11">
      <img src={y04}   className="img112" alt="Description of my image" />   
    
    </div>


    </div>
   </div>
   <br /><br />


  
    </>
  );
}

export default Gallery;
