import React from 'react'
// import { FaPhoneVolume } from "react-icons/fa6";

function Card({content,number,icon2,icon1,icon3}) {
  return (
  <>
  <div className="card">
<div className="circle">
    {icon1}
{icon2}
{icon3}
{/* <FaPhoneVolume   style={{ marginTop: '12px',marginLeft:'4px',fontSize:'43px',color:'white', }} /> */}

</div>

{content}
{number}


</div>
  </>
  )
}

export default Card