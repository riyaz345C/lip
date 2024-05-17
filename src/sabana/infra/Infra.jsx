import React from "react";
import './infra.css';
import about from './scheme.jpg';
import { FaAngleDoubleRight } from "react-icons/fa";
// import Roadcard from './Roadcard'
import road1 from './road1.jpg'
import SliderOwn from "../../main/component/SliderOwn";
import { FaAlignCenter, FaAngleRight } from "react-icons/fa";
import Tslider from "../../main/testimonial/Tslider";
import ProjectHighSlider from "../../main/component/Projecthighlight/ProjectHighSlider";


const Infra = () => {
    return(
        <>
     <img src={about} alt="contact-bg"  class="contact-bg"/>
<div className="semi-circle">
   <div className="element">
      <div className="home">Home</div>
      <FaAngleDoubleRight className='doubearrow' />
   </div>
   <div className="contact">LIP Scheme</div>
</div>
<div className="infrabox">

<div class="container-contact">
   <div class="topp">
      <a href="#" className='homec'>
         <p>Home</p>
      </a>
      <FaAngleRight className='singlearrow'   />
      <p>  Scheme</p>
   </div>
</div>

{/*************************** box ************/}
<div class="rectangle-box">
      <a href="#roads"  class="v1">Kodaikanal</a>
      <a href="#bridges" class="v2">Courtrallam</a>
      <a href="#residential" class="v3">Ecr</a>
      <a href="#fourth" class="v3">Ulundurpet</a>
   </div>

{/************************** box end************/}

<h2 className="infra-title">
<span>LIP  </span> Scheme 
    </h2>

    <p className="about-whovr">
    LIP innovative scheme offers unparalleled opportunities for investors, providing access to prime real estate with flexible financing options and attractive returns. Join LIP today and unlock the potential for secure and rewarding investments in the property market.
</p>
<br />




</div>

{/************************** * road    project    start************/}

<div className="road-project"  id="roads">
<h2 className="infra-title  form"   >
<span >Kodaikanal  </span> Projects 
    </h2>

    <p className="about-whovr">
    Our expertise extends beyond homes, as they've also constructed reliable roads ensuring smoother commutes for all.
   </p>

   <br />
<div className="card-full">
   <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>


    </div>

    
<br /><br />
<div className="bridge">
<h2 className="infra-title" id="bridges">
<span>Courtrallam   </span> Projects 
    </h2>
     <p className="about-whovr">
    Our infrastructure development prowess extends to bridges, connecting communities across Tamil Nadu's diverse landscapes, keeping traffic flowing and fostering economic growth
   </p>

    <div className="card-full">
   <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
</div>

   

   


   <br /><br />
<h2 className="infra-title" id="residential">
<span>Ecr   </span>  Buildings 
    </h2>

    <p className="about-whovr">
    Focused on creating secure and amenity-rich communities that cater to modern lifestyles, offering a variety of options, from spacious & thoughtfully designed apartments.
    </p>
<br />
    <div className="card-full">
   <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
<br /><br />

  

<h2 className="infra-title" id="fourth">
<span>Ulundurpet   </span>  Buildings 
    </h2>

    <p className="about-whovr">
    Focused on creating secure and amenity-rich communities that cater to modern lifestyles, offering a variety of options, from spacious & thoughtfully designed apartments.
    </p>
<br />
    <div className="card-full">
   <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div className="card1">
      <img src={road1}   className="roadimg1" alt="Description of my image" />   
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>

   


    <br /><br />
<div className="infra">
<h2 className="infra-title">
<span>Featured    </span>  Projects 
    </h2>
    <SliderOwn/>
</div>









</div>













        </>
    )
}
export default Infra;