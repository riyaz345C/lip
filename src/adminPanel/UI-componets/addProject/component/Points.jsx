import React from 'react'
import sty from '../addform.module.css'

function Points({pointsArray,pointsRefs,data,set}) {
  // console.log(data.nearByAttraction.points);
  console.log({points:pointsArray});
  const handlePoints = (event,index) =>{
    if(set){
    set(prv=>prv.map((e,i)=>{
      console.log('po',set);
      if(i === index){
        return{...e,point:event.target.value}
      }
      return e
    }))
  }
  console.log('po');
 }
  let d = (e,i) => data ? handlePoints(e,i):''
  return (
    <>
    {pointsArray.map((e,i) => {  
                    return(<>
                    <div className="point">
                    <label htmlFor="">point : {i+1}</label>
                    <input type="text" className={`${sty.input}`}
                     ref={el => pointsRefs.current[i] = el}
                     value={(e?e.point:'')||null} 
                    onChange = { (e)=>{handlePoints(e,i)  } }/>
                    </div>
                    </>)
                })}
    </>
  )
}

export default Points