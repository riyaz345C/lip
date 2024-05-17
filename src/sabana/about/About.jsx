import React from "react";
import './about.css';
import about from './aboutimg.jpg';
import vision from './vision-img.png';
import environmental from './environment-img.png';

import person1 from './person1.jpg';
import person2 from './person2.jpg';
import person3 from './person3.jpg';
import person4 from './person4.jpg';
import { PiHandHeartDuotone } from "react-icons/pi";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import abt from './niyas-new.png';
import policy from './about-policy-img.png';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAlignCenter, FaAngleRight } from "react-icons/fa";
import { LiaHandPeace } from "react-icons/lia";
import Smallcard from './Smallcard';
import { LiaHandHoldingHeartSolid } from "react-icons/lia";

const About = () => {

 


return(
<>
<div className="about">
   <div className="ban">
      <img src={about} alt="contact-bg"  class="contact-bg"/>
      <div className="base">
         <h3 className="baseh3">Beliefs & Values</h3>
         <p className="basep">We endeavor to maintain these principles in every facet of our operations, nurturing enduring connections.</p>
      </div>
      <div className="base2">
         <h3 className="baseh3">LIP Leadership</h3>
         <p className="basep">We strive to uphold these principles in all aspects of our business, fostering lasting relationships.</p>
      </div>
      <div className="base3">
         <h3 className="baseh3">Our Vision</h3>
         <p className="basep">To build a new trade mark in real estate industry and make LIP the First choice of every property finder.</p>
      </div>
      <div className="base4">
         <h3 className="baseh3">Key People</h3>
         <p className="basep">
            Crucial managers in LIP are pivotal for the company's operations and prosperity.
         </p>
      </div>
      <div className="base5">
         <h3 className="baseh3">Awards</h3>
         <p className="basep">
            LIP's awards reflect its dedication to excellence, innovation, customer satisfaction & industry leadership.
         </p>
      </div>
      <div className="semi-circle">
         <div className="element">
            <div className="home">Home</div>
            <FaAngleDoubleRight className='doubearrow' />
         </div>
         <div className="contact">About Us</div>
      </div>
   </div>
   <div className="pinkbox">
      <div class="container-contact">
         <div class="topp">
            <a href="#" className='homec'>
               <p>Home</p>
            </a>
            <FaAngleRight className='singlearrow'   />
            <p>  About us</p>
         </div>
      </div>
      <h2 className="infra-title">
         <span>Who  </span> Out To Us 
      </h2>
      <p className="about-whovr">
         
         Lands India Properties is thrilled to extend our heartfelt greetings to all. Since our inception in 2012, our 
         primary goal has been to revolutionize the real estate landscape in Chennai by offering meticulously crafted properties that prioritize
         customer satisfaction above all else. With a track record of successfully selling over 20 projects, we have consistently delivered on 
         our promise of quality and excellence.
         As we celebrate the completion of nine successful years, we are proud to announce the commencement of our milestone tenth year. This 
         significant milestone not only underscores our dedication to our craft but also serves as a testament to the trust and confidence 
         bestowed upon us by our esteemed clientele.
         Looking ahead, we are excited about the opportunities that lie before us as we continue to innovate, evolve, and exceed expectations 
         in the dynamic real estate market. At Lands India Properties, our commitment to excellence remains unwavering, and we are committed to 
         `   shaping the future of real estate in Chennai and beyond.
         
      </p>
      <div className="Brochure">
         <h3 className="broh1">
            Our Corporate Brochure
         </h3>
         <button class="download-btn">Download PDF</button>
        
        
      </div>
   </div>
   <h2 className="infra-title">
      <span> VGN  </span> Leadership 
   </h2>
   <div className="leadership">
      <div className="item12">  
         <img src={abt} alt="contact-bg"  className="leadership-bg"/>
      </div>
      <div className="item2-l">
         <h2 className="leadership-name">MR.NIYAS AHAMED</h2>
         <h3 className="leadership-position">Managing Director of Lands India Property </h3>
         <p className="leadership-p">
            We, at Land India Properties, are delighted to welcome you to our website. Our organization has been actively engaged in promoting and selling house sites suitable for construction in and around Chennai since 2012. Prior to 2012, we were involved in promoting and selling approved house sites in the southern districts of Tamil Nadu, particularly in Tirunelveli and Tuticorin. Since 2012, we have successfully expanded our presence in and around Chennai.
         </p>
      </div>
   </div>
   <br />
   {/* 8888888888888888888888  vision  88888888888888888888 */}
   <div className="vision">
      <div className="item12">  
         <img src={vision} alt="contact-bg"  className="vision-bg"/>
      </div>
      <div className="item2">
         <p className="visionp">
            Our vision at LIP is to establish a new benchmark in the real estate industry, setting a standard of excellence that surpasses all others. We aim to become the foremost choice for every property seeker, offering unparalleled quality, innovation, and service. By consistently exceeding expectations and delivering exceptional value, we aspire to redefine the real estate landscape and become synonymous with trust and reliability.
         </p>
      </div>
   </div>
   {/* ************* */}
   <h2 className="infra-title">
      <span> Beliefs  </span> Values 
   </h2>
   <div className="belief">
      <div className="sm1">
         <Smallcard
         icon1={
         <LiaHandHoldingHeartSolid  className="icontil"    
            />
         }
         title={
         <h2  className=''>Core Values</h2>
         }
         content={
         <p className="ptag">To realize our vision and mission, we always turn to the corporate values that we hold dear. </p>
         }
         ></Smallcard>
         <Smallcard
         icon1={
         <PiHandHeartDuotone  className="icontil"    
            />
         }
         title={
         <h2  className=''>
            Passion
         </h2>
         }
         content={
         <p className="ptag">We are differentiated by our 'Can Do' attitude and the fire in our belly.</p>
         }
         ></Smallcard>
      </div>
      <div className="sm2">
         <Smallcard
         icon1={
         <GrDocumentPerformance   className="icontil"    />
         }
         title={
         <h2  className=''>Performance</h2>
         }
         content={
         <p className="ptag">
            We're here to make a valuable difference to stakeholders and clients, against all odds.
         </p>
         }
         ></Smallcard>
         <Smallcard
         icon1={
         <FaPeopleGroup   className="icontil"    
            />
         }
         title={
         <h2  className=''>Team Work</h2>
         }
         content={
         <p className="ptag">
            We can benefit from our group's diversity by sharing to achieve.
         </p>
         }
         ></Smallcard>
      </div>
   </div>
   {/* Key Managerial People  start */}
   <h2 className="es-title">
      <span>Key </span>  Managerial People  
   </h2>
   <div class="auto_slider_container">
   <ul class="auto_slider">
         <li  className="li1">
            <div class="circle-img">
            <img src={person4} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Thoufeek</h2>
            <p>Thoufeek</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person3} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Aathif</h2>
            <p>Business Development Officer</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
            <img src={person2} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Jalaludheen</h2>
            <p>Business Development Officer</p>

         </li>
         <li  className="li1">
            <div class="circle-img">
               
            <img src={person1} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Samsudheen  </h2>
            <p>Marketing Head</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person3} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Aathif</h2>
            <p>Business Development Officer</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person4} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Thoufeek</h2>
            <p>Marketing Head</p>
         </li>
      </ul>
      <ul class="auto_slider">
         <li  className="li1">
            <div class="circle-img">
               <img src={person1} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Samsudheen</h2>
            <p>Marketing Head</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person2} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Jalaludheen</h2>
            <p>Business Development Officer</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person3} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Aathif</h2>
            <p>Business Development Officer</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person4} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Thoufeek</h2>
            <p>Marketing Head</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person1} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Samsudheen</h2>
            <p>Business Development Officer</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person2} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Jalaludheen</h2>
            <p>Business Development Officer</p>
         </li>
      </ul>
   </div>
   {/* Key Managerial People  end */}


   {/* *****environmental******* */}
   <h2 className="es-title">
      <span>Health </span> Environment & Safety   
   </h2>
   <div className="environmental">
      <div className="item12">  
         <img src={environmental} alt="contact-bg"  className="environmental-bg"/>
      </div>
      <div className="item2-e">
         <p className="environmentalp">
            Our Environment, Health  and Safety system ensures consistent and effective management of environmental protection, occupational health, and safety throughout the business, including interfaces with partners, clients, and contractors.
         </p>
      </div>
   </div>
   <div className="quality">
      <div className="item12">  
         <img src={policy} alt="contact-bg"  className="quality-bgg"/>
      </div>
      <div className="item2-e">
         <ul className="qualityp">
            <li>At LIP, we prioritize the quality of our projects above all else. Over the years, we've consistently delivered homes to our customers that adhere to rigorous quality standards, thanks to our use of top-notch materials, innovative design, and advanced construction techniques. We firmly believe that organizational growth hinges on the quality of our offerings. </li>
            <li>To ensure this, we've assembled a dedicated team to regularly monitor and conduct quality audits through both internal and external channels.</li>
         </ul>
      </div>
   </div>
   {/* <h2 className="es-title">
      <span>Our </span> Awards  
   </h2>
   <div class="auto_slider_container">
      <ul class="auto_slider">
         <li  className="li1">
            <div class="circle-img">
               <img src={doll1} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={doll2} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title2</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person1} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title3</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person2} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title4</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person3} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title5</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person4} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title6</h2>
            <p>Description</p>
         </li>
      </ul>
      <ul class="auto_slider">
         <li  className="li1">
            <div class="circle-img">
               <img src={doll1} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={doll2} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title2</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person1} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title3</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person2} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title4</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person3} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title5</h2>
            <p>Description</p>
         </li>
         <li  className="li1">
            <div class="circle-img">
               <img src={person4} alt="contact-bg"  className="circle-img-content"/>
            </div>
            <h2>Title6</h2>
            <p>Description</p>
         </li>
      </ul>
   </div> */}
</div>
<br></br>
</>
)
}
export default About;