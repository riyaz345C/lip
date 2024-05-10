import React from 'react'
import sty from '../addform.module.css'

function Box({boxArray,headRefs,contentRefs,style,set,update}) {
  console.log({box:boxArray})
  const handleChange = (event,index,field) =>{
  if(update){
      set(prv => prv.map((e,i)=>{
        if(i===index){
          return {...e,[field]:event.target.value}
        }
        return e
      }))
    }
  }
  return (
    <>
    {boxArray.map((e,i)=>{
                return(<>
                <div className={`i ${style.box}`} key={i}> {/*css not working */}
                    <h4>box-{e.id}</h4>
                    <label htmlFor="">head</label>
                    <input className={`${sty.input}`} type="text" ref={el => headRefs.current[i] = el} 
                    value={(update?e.head:'')||null} 
                    onChange={(e)=>handleChange(e,i,"head")}/>
                    <label htmlFor="">content</label>
                    <input className={`${sty.input}`} type="text" ref={el => contentRefs.current[i] = el} value={(update?e.content:'')||null}
                    onChange={(e)=>{handleChange(e,i,'content')}}/>
                </div>
                </>)
            })}
    </>
  )
}

export default Box