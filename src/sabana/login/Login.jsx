import React from "react";
import './login.css';
import login from './lip-logo.png';
import bg from './login-bgg.jpg';


const Login = () => {
    return(
        <>

{/* <div className="banner1">

    
<form class="login1">
<img src={login} class="login-bg" alt="login-img" />

  <p className="customer1">Customer Login</p>
  <input type="text" placeholder="Mail id (or)Mobile Number" className="mailid" />
  <input type="password" placeholder="Password"  className="passwd" />
  


   <a href="#" class="login-link">
  <button class="login-btn">Login</button>
</a>


  <div class="links1">
    <a href="#">Forgot password</a>
  </div>
</form>

       
</div>
 */}







<div class="banner1">
    <form class="login1">
        <img src={login} class="login-bg" alt="login-img" />
        <p class="customer1">Customer Login</p>
        <input type="text" placeholder="Mail id (or)Mobile Number" class="mailidvendor" />
        <input type="password" placeholder="Password"  class="passwdvendor" />
        <a href="#" class="login-link">
            <button class="login-btn">Sign in</button>
        </a>
        <div class="links1">
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
export default Login;