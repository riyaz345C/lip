import React from 'react'
import ImgUpload from './ImgUpload';
import sty from '../addform.module.css'

function Ammenities({stateArray,imgRef,contentRef,set,update,classX}) {
    console.log(imgRef);
    const handleChange = (event,index,field) => {
      if(update){
        set(prv => prv.map((e,i)=>{
          if(i === index){
            return {...e, [field]:event.target.value}
          }
          return e
        }))
      }
    }
  
  return (
    <div className={classX}>
    {stateArray.length ? stateArray.map((e,i) => {
        return(<>
        <div className=""  key={i}>
            <h3>Card : {e.id}</h3>
          <div className="img">
              {/* <label htmlFor="">{e.img}</label>
              <input type="file" name="" id="" ref={el => imgRef.current[i] = el
              } required/> */}
            <ImgUpload label={e.img} inpRef={el => imgRef.current[i] =el } />
          </div>
          <div className="content">
            <label htmlFor="">content {/*e.content */}</label>
            <input className={`${sty.input}`} type="text" style={{margin:'3px'}}
             ref={el => contentRef.current[i] = el}  
            value={(update?e.content:'')||null} 
            onChange = { (e)=>{handleChange(e,i,"content")  } } />
          </div>
        </div>
        </>)
    }): 'loading...'}
    </div>
    // {/* </div> */}
  )
}

export default Ammenities