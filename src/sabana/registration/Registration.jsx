import React from "react";
import './registration.css';
import login from './lip-logo.png';


const Registration = () => {
    return(
        <>
    

<div class="bg-img">
  <div className="containers">
  <form  class="form-vendor">
<img src={login} class="login-bgs" alt="login-img" />


    <h2 className="vendor-h2"> Vendor Registration </h2>
  <div class="input-container1">
  <div className="p-div">
  <p className="pName">Type of the Organization*</p>
  </div>
<div className="select">

    {/* <input class="input-field" type="text" placeholder="Username" name="usrnm" /> */}
    <select id="mySelect">
  <option value="option1">Select</option>
  <option value="option2">Sole Proprietor</option>
  <option value="option3">Partnership Firm</option>
  <option value="option3">Company</option>

</select>

  </div>
  </div>


  
  <div class="input-container1">
  <div className="p-div">
 <p className="pName">Registration Proof*</p>
</div>
<div className="select">
<label class="radio-inline">
      <input type="radio" name="optradio" checked />GST Number  1
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio"/>PAN Number
    </label>
  </div>
  </div>


  <div class="input-container1">
  <div className="p-div">
  <p className="pName">Registration Proof Number*</p>
  </div>
  <div className="select">

   <input class="input-field" type="text" placeholder="Enter Registration Proof No " name="usrnm" />
  </div>
  </div>


  <div class="input-container1">
  <div className="p-div">
  <p className="pName">Material / Service Category*</p>
  </div>
  <div className="select">

  <select id="mySelect">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
  </div>
  </div>




  <div class="input-container1">
  <div className="p-div">
  <p className="pName">Type of Business*</p>
  </div>
  <div className="select">

  <select id="mySelect">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
  </div>
  </div>

  <div class="input-container1">
  <div className="p-div">
  <p className="pName">Vendor Account Group*</p>
  </div>
  <div className="select">

  <select id="mySelect">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
  </div>
  </div>

  <div class="input-container1">
  <div className="p-div">
   <p className="pName">Contact Person*</p>
    </div>
    <div className="select">

    <input class="input-field" type="text" placeholder="Enter Contact Person" name="usrnm" />
  </div>
  </div>


  <div class="input-container1">
  <div className="p-div">

    <p className="pName">Contact Number (Mobile)*</p>
    </div>
    <div className="select">

    <input class="input-field" type="text" placeholder="Enter your Mobile Number" name="usrnm" />
  </div>
  </div>



  <div class="input-container1">
  <div className="p-div">
    <p className="pName">Contact Number (Telephone)*</p>
    </div>
    <div className="select">

    <input class="input-field" type="text" placeholder="Enter your Telephone Number" name="usrnm" />
  </div>
  </div>

  <div class="input-container1">
  <div className="p-div">
    <p className="pName">Email*</p>
    </div>

    <div className="select">

    <input class="input-field" type="text" placeholder="Enter your Email" name="usrnm" />
  </div>  </div>


  <div class="input-container1">
  <div className="p-div">
    <p className="pName">Country*</p>
    </div>
    <div className="select">

    <select id="mySelect">
  <option value="option1">Select</option>
  <option value="option2">India</option>
  {/* <option value="option3">Option 3</option> */}
</select>
  </div>  </div>



  <div class="input-container1">
  <div className="p-div">

    <p  className="pName">Region*</p>
    </div><div className="select">
    <select id="mySelect">
  <option value="option1">Select </option>
  <option value="option2">Chennai</option>
  {/* <option value="option3">Option 3</option> */}
</select>
  </div>  </div>






    {/* <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required /> */}

    <button type="submit" class="btn">Login</button>
  </form>
</div>
</div>
<div className="minifooter">
  <p className="copy">
  Copyright © 2023 VGN Projects Estates Pvt Ltd, All Rights Reserved
  </p>
</div>







        </>
    )

}
export default Registration;