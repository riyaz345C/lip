import React, { useEffect, useState } from 'react'
import './own.css'
const imgStyle ={
    width:'300px',
    height:'200px',
    transition:'transform .5s ease',
    // transition: 'margin-left .5s ease',
    // border:'1px solid #000',
    padding:'35px'
    // margin:'0 7.25px'
    
}
const img = [
            require('../../main/assets/hero.avif'),require('../../main/assets/logo.jpeg'),
            require('../../main/assets/hero.avif'),require('../../main/assets/logo.jpeg'),
            require('../../main/assets/hero.avif'),require('../../main/assets/logo.jpeg'),
            require('../../main/assets/hero.avif'),require('../../main/assets/logo.jpeg'),
        ]
function Own() {
    const [currentImg,setCurrentImg] = useState(0)
    // useEffect(()=>{
    //     const autoPlay = async()=>{
    //         if(currentImg=>0&&currentImg<img.length - 1){
    //             const interval = setInterval(() => {
    //                 next()
    //                 console.log('lo');
    //             }, 2000);
    //         }
    //         // else if(currentImg===img.length -1)
    //     }
    //     autoPlay()

    // },[])
    const next = async(e)=>{
        if(currentImg===img.length -1) return setCurrentImg(0)
        setCurrentImg(prv=> prv = prv + 1)
        console.log(currentImg);
    }
    const prv = async(e)=>{
        if(currentImg<=0) return
        setCurrentImg(prv=> prv = prv - 1)
        console.log(currentImg);    
    }
  return (
    <>
    <div style={{border:'1px solid #000',width:'370px',display:'flex',padding:'25px',overflow:'scroll'}}>
        {img.map((e,i)=>{
            return(
                <img src={e} key={i} alt="pics" style={{...imgStyle,transform:`translateX(calc(-${currentImg * 100}% ) )`}}/>
            )
        })}
    </div>
    <button onClick={prv}>lft</button>
    <button onClick={next} >rgt</button>
    </>
  )
}

export default Own