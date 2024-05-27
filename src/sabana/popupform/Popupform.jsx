import React, { useRef, useState } from "react";
import './popupform.css';
import login from './lip-logo.png';
import useFormPost from "../useFormPost";
import Loader from "../../main/assets/Loader";


const Popupform = () => {
  const  formRef = useRef()
  const [emailSend,load,state] = useFormPost()
  const submit = (e) =>{
    e.preventDefault()
    const postData = {
      popupName : formRef.current.popupName,
      popupEmail : formRef.current.popupEmail,
      popupNumber : formRef.current.popupNumber,
    }
    emailSend(popupEmail,formRef)
  }
    return(
        <>
<div class="popup-container">

  <div class="popup-form">
<img src={login} class="popup-logo" alt="login-img" />

    <span class="close-btn">&times;</span>
    <form class="login11" ref={formRef}>
      <p class=""><b> ENQUIRY NOW</b></p>
      <input type="text" placeholder="Enter Your Name" name="popupName"class="mailid1" required/>
      <input type="text" placeholder="Enter Your Email" name="popupEmail"class="passwd1" required/>
      <input type="text" placeholder="Enter Your Phone Number" name="popupNumber"class="mailid1" required/>
      <button type="submit" class="login-btn1">
      {loading?<Loader size={25} color={'#fff'}/>:<>
         {state.message&&'Retry'||'Submitted'}
         </>}
      </button>
    </form>
  </div>
</div>

        </>
    )
}
export default Popupform ;