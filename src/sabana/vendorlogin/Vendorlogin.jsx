import React from "react";
import './vendorlogin.css';
import login from './lip-logo.png';
// import bg from './login-bgg.jpg';


const Vendorlogin = () => {
    return(
        <>



<div class="banner12">
    <form class="vendor1">
        <img src={login} class="vendor-bg" alt="login-img" />
        <p class="customer12">Vendor Login</p>
        <input type="text" placeholder="Mail id (or)Mobile Number" class="mailidvendor" />
        <input type="password" placeholder="Password"  class="passwdvendor" />
        <a href="#" class="vendor-link">
            <button class="vendor-btn">Sign in</button>
        </a>
        <div class="vendorlinks1">
            <a href="#">Forgot password</a>
        </div>
    </form>
</div>
<div className="minifooter">
  <p className="copy">
  Copyright © 2023 VGN Projects Estates Pvt Ltd, All Rights Reserved
  </p>
</div>
        </>
    )
}
export default Vendorlogin;