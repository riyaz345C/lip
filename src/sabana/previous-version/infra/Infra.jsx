import React from "react";
import './infra.css';
import about from './contact-bg.jpg';
import { FaAngleDoubleRight } from "react-icons/fa";
// import Roadcard from './Roadcard'
import road1 from './road1.jpg'
import { FaAlignCenter, FaAngleRight } from "react-icons/fa";
import Tslider from "../../main/testimonial/Tslider";
import SliderOwn from "../../main/component/SliderOwn";
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
   <div className="contact">LIP Infra</div>
</div>
<div className="infrabox">

<div class="container-contact">
   <div class="topp">
      <a href="#" className='homec'>
         <p>Home</p>
      </a>
      <FaAngleRight className='singlearrow'   />
      <p>  Infra</p>
   </div>
</div>

{/*************************** box ************/}
<div class="rectangle-box">

  <a href="#roads"  class="v1">Roads</a>
  <a href="#bridges" class="v2">Bridges</a>
  <a href="#residential" class="v3">Residential Buildings</a>

</div>

{/************************** box end************/}

<h2 className="infra-title">
<span>LIP  </span> Infra 
    </h2>

    <p className="about-whovr">
The VGN Group is one of Chennai's leading property developers, with over eight decades of expertise in residential buildings and plotted developments in Chennai. Instituted in 1947, the company has developed many landmark buildings and transformed the skyline of Chennai. 
</p>
<br />

<p className="about-whovr">
The VGN Group is one of Chennai's leading property developers, with over eight decades of expertise in residential buildings and plotted developments in Chennai. Instituted in 1947, the company has developed many landmark buildings and transformed the skyline of Chennai. VGN has successfully carved a niche for itself in the ever-dynamic real estate industry over the last 83 years. Since its inception, VGN has completed 250+ buildings, amounting to over 20 million sq. ft. 
</p>


</div>

{/************************** * road    project    start************/}

<div className="road-project"  id="roads">
<h2 className="infra-title  form"   >
<span >Road  </span> Projects 
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
<span>Bridge   </span> Projects 
    </h2>
    <ProjectHighSlider/>
</div>

    <p className="about-whovr">
    Our infrastructure development prowess extends to bridges, connecting communities across Tamil Nadu's diverse landscapes, keeping traffic flowing and fostering economic growth

   </p>


   


   <br /><br />
<h2 className="infra-title" id="residential">
<span>Residential   </span>  Buildings 
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
<br /> <br />
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