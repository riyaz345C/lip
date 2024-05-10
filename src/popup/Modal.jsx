import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import popup from './lip-logo1.png'
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
    const popupFormRef = useRef()
    console.log({tog:tog,xe:xe},'line1');
   
    useEffect(() => {
        let timeoutId;
        console.log('u1');
        function pop() {
            console.log('u2');
            if (tog) {
                console.log('u3');
                timeoutId = setTimeout(() => {
                    setX(true); // No need to negate xe
                }, 1000);
            } else {
                setX(false);
            }
        }
        
        pop();
        return () => {
            clearTimeout(timeoutId); // Clear the timeout on unmount or dependency change
        };
    }, [tog]);
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let postData = {
                Name:  popupFormRef.current.popupName.value,
                Email:  popupFormRef.current.popupEmail.value,
                Phone:  popupFormRef.current.popupPhone.value,
            }
            console.log(postData);
        } catch (error) {
            console.log(error);
        }
    }
  return ReactDOM.createPortal(
    
        <>
        <div style={{...overlay,opacity:xe?1:0}}></div>
        <form ref={popupFormRef} className="modal" onSubmit={handleSubmit} style={{...style,opacity:xe?1:0}}>
            {/* Enquire <button onClick={()=>tog(false)}>X</button> */}
            {/* <input type="text" placeholder="enter" /><br />
            <input type="text" placeholder="enter" /><br />
            <input type="text" placeholder="enter" /><br />
            <input type="text" placeholder="enter" /><br /> */}
            <div className='enquire' style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
             Enquire<button onClick={()=>tog(false)}>X</button> </div>
            <img
                    src={popup}
                    class="popup-logo"
                    alt="popup-img"
                    style={{
                        display: 'block',
                        margin: '0 auto',
                        width: '45%',
                        height: 'auto'
                    }}
                />

            <input class="input-fieldr" type="text"  name='popupName'  placeholder="Enter your Name" /><br />
            <input  class="input-fieldr" type="text"  name='popupPhone' placeholder="Enter your Phone Number" /><br />
            <input class="input-fieldr" type="text"  name='popupEmail' placeholder="Enter your Email" /><br />
            <button  type="submit" value="send" class="popupSubmit"   style={{
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        marginTop: '20px',
                        cursor: 'pointer',
                        display: 'block',
                        margin: '0 auto'
                             }}  >Submit</button>
    
        </form>
        </>,
      document.getElementById('portal')
  )
}

export default Modal