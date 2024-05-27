// import React from "react";
import React, { useRef, useState } from "react";

import './vendorlogin.css';
import login from './lip-logo.png';
import useFormPost from "../useFormPost";
import Loader from "../../main/assets/Loader";
// import bg from './login-bgg.jpg';


const Vendorlogin = () => {
    const [formInfo, setFormInfo] = useState('');
    const formv = useRef();
    const [mailSend,loading,state] = useFormPost()
    const FormData = (e) => {
      e.preventDefault();
      const postData ={
         vname: formv.current.vname.value,
         vphone: formv.current.vphone.value,
         vemail: formv.current.vemail.value,
         vcity: formv.current.vcity.value,
        
      }
      mailSend(postData,formv)
      setFormInfo(postData);

    }
    console.log(formInfo);
    return(
        <>

<div class="banner1">
    <form action=""  ref={formv}  onSubmit={FormData}   class="login1">
        <img src={login} class="login-bg" alt="login-img" />
        <p class="customer1">Vendor Registration</p>
        <input type="text"   name="vname"   placeholder=" Name" class="input-fieldr" required/>
        <input type="text"   name="vphone"   placeholder="Phone Number"  class="input-fieldr" required/>
        <input type="email"   name="vemail"   placeholder=" Email"  class="input-fieldr" required/>
        <input type="text"   name="vcity"    placeholder="City"  class="input-fieldr" required/>
        
      

            <button type="submit" value="send" class="login-btn">
            {loading?<Loader size={25} color={'#fff'}/>:<>
         {state.message&&'Retry'||'Submit'}
         </>}
            </button>
           
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