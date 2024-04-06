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
    console.log({tog:tog,xe:xe},'line1');
    // useEffect(()=>{
    //     function pop(){
    //         if(tog){
    //             let x = setTimeout(()=>{
    //                 setX(!xe)
    //                 console.log({tog:tog,xe:xe,},'line2');
    //             console.log();
    //         },1000)
    //         console.log({tog:tog,xe:xe,},'line3');
    //        console.log('tttttttttttttttttttttttttttttt');
    //    }    
    // }
    //     return ()=>pop()
    // },[tog,xe])
    useEffect(() => {
        let timeoutId;

        function pop() {
            if (tog) {
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