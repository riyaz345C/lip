import React from "react";
import './about.css';
import about from './contact-bg.jpg';
import vision from './vision-img.png';
import environmental from './environment-img.png';
import doll1 from './doll.jpg';
import doll2 from './doll2.jpg';


import abt from './abt1.png';


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
<h3 className="baseh3">about-top-main</h3>
<p className="basep">We strive to uphold these principles in all aspects of our business, fostering lasting relationships.</p>
</div>
<div className="base2">
<h3 className="baseh3">about-top-main</h3>
<p className="basep">We strive to uphold these principles in all aspects of our business, fostering lasting relationships.</p>
</div>
<div className="base3">
<h3 className="baseh3">about-top-main</h3>
<p className="basep">We strive to uphold these principles in all aspects of our business, fostering lasting relationships.</p>
</div>
<div className="base4">
<h3 className="baseh3">about-top-main</h3>
<p className="basep">We strive to uphold these principles in all aspects of our business, fostering lasting relationships.</p>
</div>
<div className="base5">
<h3 className="baseh3">about-top-main</h3>
<p className="basep">We strive to uphold these principles in all aspects of our business, fostering lasting relationships.</p>
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
{/* Lands India Properties very much delighted to welcome All. we started our organization  in 2012.
The Company was formed to develop well designed and customer satisfaction of real estate in chennai. We have successfull
sold more than 20 Projects. We have successfully  completed 9 years and we stepped into our 10th year */}
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
{/* The VGN Group is one of Chennai's leading property developers, with over eight decades of expertise
 in residential buildings and plotted developments in Chennai. Instituted in 1947, the company 
has developed many landmark buildings and transformed the skyline of Chennai. VGN has successfully carved a niche for itself in 
the ever-dynamic real estate industry over the last 83 years. Since its inception, VGN has completed 250+ buildings, amounting to 
over 20 million sq. ft. of developed space across a diverse real estate portfolio. VGN assures best-in-class design and top-of-the-line 
facilities that exude elegance and sophistication. The residential developments include affordable, premium residences, luxury apartmen
ts, value homes, plotted developments, and mixed-use lifestyle enclaves and townships. Over the years, the projects have been one-of-a-
kind in the sector; for example, VGN developed VGN Notting Hill, a luxury lifestyle enclave next to Hotel Taj Coromandel in Nungambakkam
, and VGN Coasta, a luxury sea-facing apartment complex bang on ECR, Chennai. VGN also enjoys a reputation for developing over 600 acre
s of plotted developments, amongst a few developers in Chennai. The commercial segment has seen consistent growth over the last few year
s; hence, VGN is also venturing into office spaces, retail, and industrial warehouses under development. */}
</p>

<div className="Brochure">
<h3 className="broh1">
Our Corporate Brochure
</h3>
<button class="download-btn">Download PDF</button>
<h3 className="broh1"> Our Newsletter </h3>
<button class="download-btn" onclick="downloadPDF()">Download PDF</button>
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
    <h2 className="leadership-name">Mr. Pratish Vedhappud</h2> 
    <h3 className="leadership-position">Managing Director & Owner - VGN Group</h3> 

        <p className="leadership-p">
        Vedhappudi is the owner of VGN Group and holds a Master's degree in Construction Engineering from Cambridge University, UK. He entered into the real estate business in the year 2008. Mr.Pratish wanted to implement his dream by venturing into property development and construct large residential projects in and around Chennai. Since 2008, he has been developing large residential townships in various parts of Chennai. Under his leadership, VGN group has completed over 250 residential projects and over 600 acres of plotted development consisting of 20,000 residential plots. VGN has also delivered around 10,500 homes under his dynamic leadership and another 1500 homes are under construction. Mr Pratish has also set up the group's Infrastructure division which is into the construction of bridges, roads and buildings. He has also spearheaded in setting up the groups home interiors division with a focus on making living spaces more exuberant. Mr. Pratish has been instrumental in setting up the groups Homebuilding division with an aim to build houses for plot owners who intend to build their dream homes.
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
            VGN is already a household name in Chennai. We envision a future where VGN is a household name across the world. Apart from creating a dream home for our customers and helping many people to own a home to lead a better life, VGN ventures into creating landmark buildings in offices, retail, malls, industrial warehouses, and hospitals. A vision to create a future wherein VGN symbolizes unique landmarks and superior community living of the highest standards of quality and customer satisfaction.
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
icon1={<LiaHandHoldingHeartSolid  className="icontil"    

/>}
title={<h2  className=''>Core Values</h2>}
content={<p className="ptag">To realize our vision and mission, we always turn to the corporate values that we hold dear. </p>}
></Smallcard>


<Smallcard
icon1={<LiaHandHoldingHeartSolid  className="icontil"    

/>}
title={<h2  className=''>
Passion</h2>}
content={<p className="ptag">We are differentiated by our 'Can Do' attitude and the fire in our belly.</p>}
></Smallcard>


</div>

<div className="sm2">
<Smallcard
icon1={<LiaHandHoldingHeartSolid  className="icontil"    />}
title={<h2  className=''>Performance
</h2>}
content={<p className="ptag">We are here to make a valuable difference to our stakeholders and clients, and we will make it happen against all odds.</p>}
></Smallcard>


<Smallcard
icon1={<LiaHandHoldingHeartSolid  className="icontil"    

/>}
title={<h2  className=''>Team Work</h2>}
content={<p className="ptag">We can gain from the diversity within our group by sharing knowledge and resources to achieve </p>}
></Smallcard>
</div>
</div>

{/* Key Managerial People  start */}



<h2 className="es-title">
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
     <img src={doll1} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title3</h2>
    <p>Description</p>
</li>

<li  className="li1">
    <div class="circle-img">
     <img src={doll2} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title4</h2>
    <p>Description</p>
</li>
<li  className="li1">
    <div class="circle-img">
     <img src={doll1} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title5</h2>
    <p>Description</p>
</li>

<li  className="li1">
    <div class="circle-img">
     <img src={doll2} alt="contact-bg"  className="circle-img-content"/>

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
     <img src={doll1} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title3</h2>
    <p>Description</p>
</li>

<li  className="li1">
    <div class="circle-img">
     <img src={doll2} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title4</h2>
    <p>Description</p>
</li>
<li  className="li1">
    <div class="circle-img">
     <img src={doll1} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title5</h2>
    <p>Description</p>
</li>

<li  className="li1">
    <div class="circle-img">
     <img src={doll2} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title6</h2>
    <p>Description</p>
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
        Our environment, health, and safety system ensures consistent and effective management of environmental protection, occupational health, and safety of our employees and workers throughout the business establishment and interfaces with partners, clients, and contractors.
        </p>
    </div>
</div>

<div className="quality">
<div className="item12">  
<img src={policy} alt="contact-bg"  className="quality-bgg"/>

</div>

    <div className="item2-e">  
    <ul className="qualityp">
    <li>At VGN, we give the utmost importance to the quality of the projects we do.All these years, we have been delivering homes to our customers that meet high standards of quality by adopting quality materials, design, and construction techniques.</li>
    <li>We believe that organisational development depends on the quality of the products and services.As a part of this, we have developed a strong team to monitor quality at regular intervals of time and conduct quality audits through internal / external agencies.</li>
</ul>
    </div>
</div>


<h2 className="es-title">
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
     <img src={doll1} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title3</h2>
    <p>Description</p>
</li>

<li  className="li1">
    <div class="circle-img">
     <img src={doll2} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title4</h2>
    <p>Description</p>
</li>
<li  className="li1">
    <div class="circle-img">
     <img src={doll1} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title5</h2>
    <p>Description</p>
</li>

<li  className="li1">
    <div class="circle-img">
     <img src={doll2} alt="contact-bg"  className="circle-img-content"/>

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
     <img src={doll1} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title3</h2>
    <p>Description</p>
</li>

<li  className="li1">
    <div class="circle-img">
     <img src={doll2} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title4</h2>
    <p>Description</p>
</li>
<li  className="li1">
    <div class="circle-img">
     <img src={doll1} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title5</h2>
    <p>Description</p>
</li>

<li  className="li1">
    <div class="circle-img">
     <img src={doll2} alt="contact-bg"  className="circle-img-content"/>

    </div>
    <h2>Title6</h2>
    <p>Description</p>
</li>




    </ul>
</div>
      </div>


        </>
    )

}
export default About;