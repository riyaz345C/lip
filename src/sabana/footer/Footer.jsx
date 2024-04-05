import './footer.css';
import footer from './lip-logo.png';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
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
            Established in 1942, VGN has successfully carved a niche for itself in the ever-dynamic real estate industry over the last 83 years. An ISO 9001-2008 certified company, VGN is known as much for its beautiful, world-class homes as it is for following best practices in the industry, being an Integrated Management System (IMS)-certified company by Lloyd's Register.
         </p>
      </div>
      <div class="item"></div>
   </div>
   <div class="address-list">
      <div class="address">
         <h2 className="add">Lands India Properties</h2>
         <ul>
            <li>Y - 222, VGN Kimberly Towers,</li>
            <li>2nd Avenue, Anna Nagar,</li>
            <li>Chennai - 600040</li>
            <li>Phone: 044 4343 9999</li>
         </ul>
      </div>
      <div class="address-links">
         <h2 className='follow'>Follow Us</h2>
         <ul className='listt'>
            <li>
               <a href="#">
                  <FaSquareFacebook  className='iconn'/>
               </a>
            </li>
            <li>
               <a href="#">
                  <FaSquareInstagram  className='iconn' />
               </a>
            </li>
            <li>
               <a href="#">
                  <FaLinkedin   className='iconn' />
               </a>
            </li>
            <li>
               <a href="#">
                  <FaXTwitter  className='iconn' />
               </a>
            </li>
            <li>
               <a href="#">
                  <FaYoutube className='iconn' />
               </a>
            </li>
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
<h4 className="hitem">Projects</h4>
<a href="#" className='sub-links'> Ongoing Projects </a>
<a href="#" className='sub-links'> Ready to Move in Projects </a>
<a href="#" className='sub-links'> Completed Projects </a>
<a href="#" className='sub-links'> Upcoming Projects </a>
</div>

<div class="item3">
<h4 className="hitem">Our Groups of Company</h4>
<a href="#" className='sub-links'> Modern Tourism Network </a>
<a href="#" className='sub-links'> Signmedia Infotech </a>
<a href="#" className='sub-links'> Wise global real-estate LLC Dubai</a>
<a href="#" className='sub-links'> Addsbazar Classifieds Pvt Ltd </a>
<a href="#" className='sub-links'> Fundflow Capital Advisers</a>
<a href="#" className='sub-links'> Millionaire World (Business Club)</a>
</div>

<div class="item4">
<h4 className="hitem">Login</h4>
<a href="#" className='sub-links'> Customer Login </a>
{/* <a href="#" className='sub-links'> Employee Login </a> */}
<a href="#" className='sub-links'> Vendor Login </a>
<a href="#" className='sub-links'> Vendor Registration </a>
</div>

<div class="item5">
<h4 className="hitem">Quick Links</h4>
<a href="#" className='sub-links'> Home </a>
<a href="#" className='sub-links'> About us </a>
<a href="#" className='sub-links'> For Land Owners </a>
<a href="#" className='sub-links'> VGN Interiors </a>
<a href="#" className='sub-links'> VGN Home Building</a>
<a href="#" className='sub-links'> Investors</a>
<a href="#" className='sub-links'> Blogs </a>
<a href="#" className='sub-links'> Careers</a>
<a href="#" className='sub-links'>Referrals </a>
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