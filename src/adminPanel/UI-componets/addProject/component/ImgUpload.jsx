import React, { useState } from 'react'
import card from './imgcard.module.css'

function ImgUpload({label,inpRef}) {
    const [file,setFile] = useState()
    function getFile(event){
    setFile(URL.createObjectURL(event.target.files[0]))
    console.log(event.target.files);
    }
    
  return (
    <>
    <div class={card.card}>
  <div style={{ marginTop: '10px' }}>
  <label htmlFor="fileInput">{label}</label>
  {/* <h4>Upload here</h4> */}
    <img src={file} style={{ width: '100%', height: '100px' }} />
  </div>
  <input type="file" onChange={getFile} id="fileInput"
   style={{ marginBottom: '10px' }}  ref={inpRef} required />
</div>
    </>
  )
}

export default ImgUpload