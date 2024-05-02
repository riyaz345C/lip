import React, { useReducer, useRef, useState } from 'react'
import { dataFields } from './datafields'
import sty from './addform.module.css'
import axios from 'axios'
import Statehook from './stateHook/Statehook'
import FechHook from './stateHook/FechHook'
import Ammenities from './component/Ammenities'
import Box from './component/Box'
import Faq from './component/Faq'
import Points from './component/Points'
import ImgUpload from './component/ImgUpload'

function AddForm() {
    // single field
    const projectRef = useRef()
    const subTitleRef = useRef()
    const projectOverviewRef = useRef()
    const locationRef = useRef()
    const projectPlanRef = useRef()
    const titleRef  =useRef()
    // multifield
    const questionRefs = useRef([])
    const answerRefs = useRef([])
    const pointsRefs = useRef([])
    const boxHeadsRefs = useRef([])
    const boxContentRefs = useRef([])
    const amenitiesContentRef = useRef([])
    const amenitiesImgUrlRef = useRef([])
    // form ref
    const formRef = useRef()

    // function for short cut  
    let value = (x) => {return x.current.value}

    // custom hook for state inside form
    const [faq,setFaq,amenities,setAmenities,
        points,setPoints,box,addQuestion,
        removeQuestion,addAmenities,removeAmenities,
        addPoint,removePoint] = Statehook(amenitiesImgUrlRef)
    // custom hook for get data from form and fetch it
    const [onSubmit,fetchData] = FechHook(
        box,projectRef,subTitleRef,projectOverviewRef
        ,locationRef,projectPlanRef,points,amenities
        ,faq,questionRefs,answerRefs,pointsRefs,boxHeadsRefs
        ,boxContentRefs,amenitiesContentRef,amenitiesImgUrlRef,
    formRef,titleRef)
    // custom hook for bounce back to login if not 


        return (
    <>
    <form onSubmit={onSubmit} ref={formRef} className={sty.form}>
        <div className="input">
            <label htmlFor="">{dataFields.projectName}</label>
            <input type="text" ref={projectRef} />
        </div>
        <div className="input">
            <label htmlFor="">{dataFields.subTitle}</label>
            <input type="text" ref={subTitleRef}/>
        </div>
        {/* box */}
            <h3 >Box</h3> {/*css working */}
        <div className={`input ${sty.boxs}`}>
            <Box boxArray={box} headRefs={boxHeadsRefs} contentRefs={boxContentRefs} style={sty}/>
        </div>
        <div className="input">
            <label htmlFor="">{dataFields.projectOverview}</label>
            <input type="text" ref={projectOverviewRef}/>
        </div>
        <div className="input">
            <label htmlFor="">{dataFields.location}</label>
            <input type="text" ref={locationRef} />
        </div>
        {/* nerby attraction */}
        <div className="input">
            <h3>Near By Attraction</h3>
            <label htmlFor=""> {dataFields.nearbyAttraction.title}</label>
            <input type="text" ref={titleRef} />
                Total Points : {points.length} <br />
                <button onClick={addPoint}>Add Points</button>
                <button onClick={removePoint}>Remove Points</button>
            <div className={sty.points}>
                <Points pointsArray={points} pointsRefs={pointsRefs}/>
            </div>

        </div>
        {/* amenities */}
        <div className="input">
            <label htmlFor="">Amenities</label>
            <button onClick={addAmenities}>Add amenities</button>
            <button onClick={removeAmenities}>Remove amenities</button> 
            total : {amenities.length}
            
            <Ammenities stateArray={amenities} imgRef={amenitiesImgUrlRef} 
            contentRef={amenitiesContentRef} />
            </div>
        <div className="input">
            {/* <label htmlFor="">{dataFields.projectsPlan}</label>
            <input type="file" ref={projectPlanRef} required /> */}
            <ImgUpload label={dataFields.projectsPlan} inpRef={projectPlanRef} />
        </div>
        {/* faq */}
        <div className="input" >
            <label htmlFor="">FAQ</label>
            <button onClick={addQuestion}>Add question</button>
            <button onClick={removeQuestion}>Remove question</button> 
            total : {faq.length}
            <Faq faqArray={faq} questionRefs={questionRefs} answerRefs={answerRefs} />
        </div>
       <input type="submit" value="submit" onClick={(e)=>{}}/> 

    </form>
    </>
  )
}

export default AddForm
      