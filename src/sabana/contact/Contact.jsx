import './contact.css';
import contact from './contact-bg.jpg';
// import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAlignCenter, FaAngleRight } from "react-icons/fa";
import { FaHtml5, FaPhoneVolume } from "react-icons/fa6";
import { FaClover } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import Card from './Card';
const Contact = () => {
return(
<>
<div className="contact-top">
</div>
<img src={contact} alt="contact-bg"  class="contact-bg"/>
<div className="semi-circle">
   <div className="element">
      <div className="home">Home</div>
      <FaAngleDoubleRight className='doubearrow' />
   </div>
   <div className="contact">Contact</div>
</div>
<div class="container-contact">
   <div class="topp">
      <a href="#" className='homec'>
         <p>Home</p>
      </a>
      <FaAngleRight className='singlearrow'   />
      <p>  Contact</p>
   </div>
</div>

<h2 className="infra-title">
<span> Reach  </span> Out To Us 
    </h2>


{/* <h2 className="reach">
   Reach <span>Out To Us</span>   
   <hr>
   </hr> 
</h2> */}
<br />
<br />
<br />
<div className="container">
   <Card 
   icon1={<FaPhoneVolume style={{ marginTop: '8px',marginLeft:'6px',fontSize:'43px',color:'white', }} />}
   content={
   <h2  className='cardh2'>For Sales Enquiry</h2>
   }
   number={
   <h3 className='cardh3'>1234567890</h3>
   }
   >
   </Card>
   <Card
   icon2={<GrUserManager style={{ marginTop: '8px',marginLeft:'6px',fontSize:'43px',color:'white', }} />}
   content={
   <h2 className='cardh2'>For Customer Care Enquiry</h2>
   }
   number={
   <h3 className='cardh3'>1234567890</h3>
   }
   >
   </Card>
   <Card
   icon3={<FaClover style={{ marginTop: '8px',marginLeft:'6px',fontSize:'43px',color:'white', }} />}
   content={
   <h2 className='cardh2'>For Vendors & Other Enquiry</h2>
   }
   number={
   <h3 className='cardh3'>1234567890</h3>
   }
   >  
   </Card>
</div>
<div className="map-container">
   <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.121783005591!2d80.15098847356789!3d12.964058215046638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e37fcf81ea3%3A0xfd16fdb72e898775!2sLands%20India%20Properties!5e0!3m2!1sen!2sin!4v1711606049860!5m2!1sen!2sin"
   width="80%"
   height="700"
   style={{ border: 0 }}
   allowFullScreen=""
   loading="lazy"
   referrerPolicy="no-referrer-when-downgrade"
   title="Google Map Embed"
   ></iframe>
</div>
<div className="redcard">
   <h3 className="redcaed-h3"> LIP Projects Estates Pvt. Ltd.</h3>
   <p className="redcard-p">2nd Floor, 59, Dharga Rd, Zamin Pallavaram, Rajaji Nagar, Pallavaram, Chennai, Tamil Nadu 600043</p>
   <p className="redcard-p">  044 4343 9999</p>
</div>
</>
)
}
export default Contact;