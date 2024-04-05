import React from 'react'
import Slantsq from './Slantsq'
import './spec.css'
function Spec() {
  return (
    <>
    <div className="specification-grid">
        <div className="spec-content">
            <h3>Specification</h3>
            <p>As a reputed builder with a substantial customer base, we take pride in presenting one of the largest and most. Read More...</p>
        </div>
        <div className="img imgs">
            <img src={require('../../assets/hero.avif')} alt="" style={{width:'100px' ,aspectRatio:'1/1',borderRadius:'19px 0 19px 0'}} />
            <img src={require('../../assets/hero.avif')} alt="" style={{width:'100px' ,aspectRatio:'1/1',borderRadius:'19px 0 19px 0'}} />
            <img src={require('../../assets/hero.avif')} alt="" style={{width:'100px' ,aspectRatio:'1/1',borderRadius:'19px 0 19px 0'}} />
        </div>
        <div className="img imgs2">
            <img src={require('../../assets/hero.avif')} alt="" style={{width:'100px' ,aspectRatio:'1/1',borderRadius:'19px 0 19px 0'}} />
            <img src={require('../../assets/hero.avif')} alt="" style={{width:'100px' ,aspectRatio:'1/1',borderRadius:'19px 0 19px 0'}} />
        </div>
        <div className="img imgs3">
            <img src={require('../../assets/hero.avif')} alt="" style={{width:'100px' ,aspectRatio:'1/1',borderRadius:'19px 0 19px 0'}} />
        </div>
        <Slantsq classn={'sq1'} color={`#f00`}/>
        <Slantsq classn={'sq2'} color={`#f99`}/>
        <Slantsq classn={'sq3'} color={`#f00`}/>
        <Slantsq classn={'sq4'} color={`#f99`}/>
  <div className="nulld nullq1"> 
   <Slantsq color={`#000`}/>
    <Slantsq color={`#000`}/></div>
  <div className="nulld nullq2"> 
  <Slantsq color={`#000`}/>
    <Slantsq color={`#000`}/></div>
    <div className='null nullq3'><Slantsq color={`#000`} classn={''}/></div>
    <div className='null nullq4'><Slantsq color={`#000`} classn={''}/></div>
    </div>
    </>
  )
}

export default Spec