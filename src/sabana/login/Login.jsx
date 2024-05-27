import React, { useRef, useState } from "react";
import './login.css';
import login from './lip-logo.png';
import useFormPost from "../useFormPost";
import Loader from "../../main/assets/Loader";



const Login = () => {
    const [formInfo, setFormInfo] = useState('');
    const form = useRef();
  const [emailSend,loading,state] = useFormPost()
    const FormData = (e) => {
      e.preventDefault();
      const postData ={
        cname: form.current.cname.value,
        cphone: form.current.cphone.value,
        cemail: form.current.cemail.value,
        ccity: form.current.ccity.value,
      }
      emailSend(postData,form)
      setFormInfo(postData);
    }
    console.log(formInfo);
    return(
        <>

<div class="banner1">
    <form action=""  ref={form}  onSubmit={FormData}   class="login1">
        <img src={login} class="login-bg" alt="login-img" />
        <p class="customer1">Customer Registration</p>
        <input type="text"   name="cname"   placeholder=" Name" class="input-fieldr" required/>
        <input type="text"   name="cphone"   placeholder="Phone Number"  class="input-fieldr" required/>
        <input type="email"   name="cemail"   placeholder=" Email"  class="input-fieldr" required/>
        <input type="text"   name="ccity"    placeholder="City"  class="input-fieldr" required/>
        
      

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
export default Login;