import React from "react";
import './popupform.css';
import login from './lip-logo.png';


const Popupform = () => {
    return(
        <>
<div class="popup-container">

  <div class="popup-form">
<img src={login} class="popup-logo" alt="login-img" />

    <span class="close-btn">&times;</span>
    <form class="login11">
      <p class=""><b> ENQUIRY NOW</b></p>
      <input type="text" placeholder="Enter Your Name" class="mailid1" />
      <input type="text" placeholder="Enter Your Email" class="passwd1" />
      <input type="text" placeholder="Enter Your Phone Number" class="mailid1" />
      <button type="submit" class="login-btn1">Submit</button>
    </form>
  </div>
</div>

        </>
    )
}
export default Popupform ;