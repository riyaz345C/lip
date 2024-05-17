import './footer.css';
import footer from './lip-logo.png';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
return(
<>
<div class="containerfoot">
   <div class="containerbg">
      <div class="item"></div>
      <div class="bgg">
         <img src={footer} class="footerimg" alt="footer-img" />
         <p className="footpara">     
Established in 2012, LIP has become a leading name in real estate, known for its exceptional projects and industry-best practices. With over a decade of experience, LIP is renowned for its exquisite homes and commitment to excellence, setting standards as an ISO 9001-2008 certified organization.
         </p>
      </div>
      <div class="item"></div>
   </div>
   <div class="address-list">
      <div class="address">
         <h2 className="add">Lands India Properties</h2>
         <ul>

       

            <li>2nd Floor, 59, Dharga Rd, Zamin Pallavaram</li>
            <li>Rajaji Nagar, Pallavaram</li>
            <li>Chennai - 600043</li>
            <li>Phone: 99529 02551</li>
            {/* <li>Mail: landsindiachennai@gmail.com</li> */}

         </ul>
      </div>
      <div class="address-links">
         <h2 className='follow'>Follow Us</h2>
         <ul className='listt'>
            <li>
               <a href="https://www.facebook.com/profile.php?id=100063862220503">
                  <FaSquareFacebook  className='iconn'/>
               </a>
            </li>
            <li>
               <a href="https://www.instagram.com/landsindiaproperties/">
                  <FaSquareInstagram  className='iconn' />
               </a>
            </li>
             <li>
               <a href="https://wa.me/9994547709">
                  <FaWhatsappSquare  className='iconn' />
             
               </a>
            </li>
            <li>
               <a href="https://www.linkedin.com/company/lands-india-properties/">
                  <FaLinkedin   className='iconn' />
               </a>
            </li>
           
             <li>
               <a href="mailto:landsindiachennai@gmail.com">
                  <ImMail  className='iconn' />
               
               </a>
            </li>
            {/* <li>
               <a href="#">
                  <FaYoutube className='iconn' />
               </a>
            </li> */}
         </ul>

         
      </div>
      
   </div>
   <hr  className='hr'/>

   <br />

<div className="fivelinks">
<div class="item1">
<h4 className="hitem">Ongoing Projects</h4>
<a href="#" className='sub-links'> VIP in Courtallam </a>
<a href="#" className='sub-links'> Coral Country ECR </a>
<a href="#" className='sub-links'> Mega City Veppur </a>
<a href="#" className='sub-links'> Ulundurpet </a>
<a href="#" className='sub-links'>Kurunji Garden Kodaikanal </a>
</div>

<div class="item2">
<h4 className="hitem">Branches</h4>
<a href="#" className='sub-links'> Dubai office Address: </a>

<a href="#" className='sub-links'>  No. 12, 22nd floor,Al Masraf  <br /> Tower, Deira,
 Dubai, UAE </a>
<a href="#" className='sub-links'> Sharjah : </a>

<a href="#" className='sub-links'>  Flat No. 304, Kabab Building,<br /> Musallah Park, Sharjah </a>
</div>

<div class="item3">
<h4 className="hitem">Our Groups of Company</h4>
<a href="https://www.addsbazar.com/en" className='sub-links'> Addsbazar Classifieds Pvt Ltd </a>

<a href="https://propertystores.in/home" className='sub-links'>Property stores</a>
<a href="https://www.signmediainfotech.in/" className='sub-links'> Signmedia Infotech </a>

<a href="https://www.mtnbookings.com/" className='sub-links'> Modern Tourism Network </a>

<a href="https://www.facebook.com/wiseglobaldxb" className='sub-links'> Wise global real-estate LLC Dubai</a>
<a href="#" className='sub-links'> Siddha Suththi Arockya Saalai</a>
</div>

{/* <div class="item4">
<h4 className="hitem">Login</h4>
<a href="#" className='sub-links'> Customer Login </a>
<a href="#" className='sub-links'> Employee Login </a>
<a href="#" className='sub-links'> Vendor Login </a>
<a href="#" className='sub-links'> Vendor Registration </a>
</div> */}

<div class="item5">
<h4 className="hitem">Quick Links</h4>
<a href="#" className='sub-links'> Home </a>
<a href="#" className='sub-links'> About us </a>
<a href="#" className='sub-links'> Projects </a>
<a href="#" className='sub-links'> Customer Registration </a>
<a href="#" className='sub-links'> Vendor Registration </a>
<a href="#" className='sub-links'>Investor Registration </a>
{/* <a href="#" className='sub-links'> VGN Interiors </a> */}
{/* <a href="#" className='sub-links'> VGN Home Building</a> */}
{/* <a href="#" className='sub-links'> Investors</a> */}
{/* <a href="#" className='sub-links'> Blogs </a>
<a href="#" className='sub-links'> Careers</a>
<a href="#" className='sub-links'>Referrals </a> */}
</div>

</div>
<br />
</div>
<div className="copyright">
   <p className="copypara">
   Copyright © 2024 LIP Pvt Ltd. All Rights Reserved. Site Map | Privacy Policy | Disclaimer | Terms and Conditions
   </p>
</div>
</>
)
}
export default Footer;