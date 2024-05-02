import React from 'react'
import ImgUpload from './ImgUpload';

function Ammenities({stateArray,imgRef,contentRef}) {
    console.log(imgRef);
  return (
    // <div className="input">
    // <label htmlFor="">Amenities</label>
    // <button onClick={addAmenities}>Add amenities</button>
    // <button onClick={removeAmenities}>Remove amenities</button> 
    // total : {amenities.length}
    <>
    {stateArray.length ? stateArray.map((e,i) => {
        return(<>
        <div className="faq"  key={i}>
            <h3>Card : {e.id}</h3>
        <div className="img">
        {/* <label htmlFor="">{e.img}</label>
        <input type="file" name="" id="" ref={el => imgRef.current[i] = el
        } required/> */}
        <ImgUpload label={e.img} inpRef={el => imgRef.current[i] =el } />
        </div>
        <div className="content">
        <label htmlFor="">{e.content}</label>
        <input type="text" ref={el => contentRef.current[i] = el} />
        </div>
        </div>
        </>)
    }): 'loading...'}
    </>
    // {/* </div> */}
  )
}

export default Ammenities