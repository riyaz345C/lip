import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
const style ={
    position:'fixed',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#fff',
    zIndex:'1000',
    border:"1px solid #aaa",
    padding:'10px',
    width:'fit-content',
    transition:'all .5s ease .2s'
}
const overlay ={
    position:'fixed',
    left:0,
    right:0,
    top:0,
    bottom:0,
    zIndex:'1000',
    backgroundColor:'rgb(0,0,0,.7)',
    backdropFilter:'blur(2px)',
    transition:'all .5s'
}
const Modal = ({tog}) => {
    const [xe,setX] = useState(false)
    useEffect(()=>{
    function pop(){
        if(tog){
            let x = setTimeout(()=>{
               setX(!xe)
               console.log();
           },1000)
           console.log(x);
       }
    }
        return ()=>pop()
    },[tog,xe])
  return ReactDOM.createPortal(
    
        <>
        <div style={{...overlay,opacity:xe?1:0}}></div>
        <div className="modal" style={{...style,opacity:xe?1:0}}>
            Enquire <button onClick={()=>tog(false)}>X</button>
            <input type="text" placeholder="enter" /><br />
            <input type="text" placeholder="enter" /><br />
            <input type="text" placeholder="enter" /><br />
            <input type="text" placeholder="enter" /><br />
    
        </div>
        </>,
      document.getElementById('portal')
  )

}

export default Modal