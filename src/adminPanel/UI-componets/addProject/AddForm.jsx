import React, { useRef } from 'react'
import { dataFields } from './datafields'
import sty from './addform.module.css'
// import axios from 'axios'
import Statehook from './stateHook/Statehook'
import FechHook from './stateHook/FechHook'
import Ammenities from './component/Ammenities'
import Box from './component/Box'
import Faq from './component/Faq'
import Points from './component/Points'
import ImgUpload from './component/ImgUpload'
import Example from '../../../main/assets/Loader'

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
    const [onSubmit,fetchData,lod] = FechHook(
        box,projectRef,subTitleRef,projectOverviewRef
        ,locationRef,projectPlanRef,points,amenities
        ,faq,questionRefs,answerRefs,pointsRefs,boxHeadsRefs
        ,boxContentRefs,amenitiesContentRef,amenitiesImgUrlRef,
    formRef,titleRef,'ADD')
    // custom hook for bounce back to login if not 
        return (
    <>
    <form onSubmit={onSubmit} ref={formRef} className={sty.form}>

        {/* input-field : projectName */}
        <div className={`input`}>
            <label htmlFor="">{dataFields.projectName}</label>
            <input type="text" className={`${sty.input}`} ref={projectRef} />
        </div>

        {/* input-field : Box */}
        <div className={`input`}>
            <label htmlFor="">{dataFields.subTitle}</label>
            <input type="text" className={`${sty.input}`} ref={subTitleRef}/>
        </div>
            <h3 >Box</h3> 
        <div className={`input ${sty.boxs}`}>
        {/* Array of {id,head,body} */}
            <Box boxArray={box} headRefs={boxHeadsRefs} contentRefs={boxContentRefs} style={sty}/>
        </div>

        {/* input-field : projectOverview */}
        <div className={`input`} style={{display:'flex',flexFlow:'column',gap:'10px'}}>
            <label htmlFor="">{dataFields.projectOverview}</label>
            <textarea rows={'10'} style={
                {maxWidth:'100%',maxHeight:'134px',
                fontFamily:'poppins',border:'1px dashed #aaa',
                outline:'none',padding:'10px 10px 0',}}
                type="text" placeholder='Type Project Overview In Paragraph' ref={projectOverviewRef}>

            </textarea>
        </div>

        {/* input-field : location */}
        <div className={`input`}>
            <label htmlFor="">{dataFields.location}</label>
            <input type="text" className={`${sty.input}`} ref={locationRef} />
        </div>

        {/* input-field : Attraction */}
        <div className={`input`}>
            <h3>Near By Attraction</h3>
            <label htmlFor=""> {dataFields.nearbyAttraction.title}</label>
            <input type="text" className={`${sty.input}`} ref={titleRef} />
            Total Points : {points.length} <br />
            <button className={sty.btn} onClick={addPoint}>Add Points</button>
            <button className={sty.btn} onClick={removePoint}>Remove Points</button>
            <div className={sty.points}>
                {/* array of {id,point} */}
                <Points pointsArray={points} pointsRefs={pointsRefs}/>
            </div>
        </div>

        {/* input-field : Amenities */}
        <div className={`input`} >
            <label htmlFor="">Amenities</label>
            <button className={sty.btn} onClick={addAmenities}>Add amenities</button>
            <button className={sty.btn} onClick={removeAmenities}>Remove amenities</button> 
            total : {amenities.length}
            {/* array of {id,img,content} */} 
            <Ammenities stateArray={amenities} imgRef={amenitiesImgUrlRef} 
            contentRef={amenitiesContentRef} classX={sty.ammenities} />
        </div>

        {/* input-field : projectsPlan */}
        <div className={`input`}>
            {/* <label htmlFor="">{dataFields.projectsPlan}</label>
            <input type="file" ref={projectPlanRef} required /> */}
            <ImgUpload label={dataFields.projectsPlan} inpRef={projectPlanRef} />
        </div>

        {/* input-field : FAQ */}
        <div className={`input`} >
            <label htmlFor="">FAQ</label>
            <button className={sty.btn} onClick={addQuestion}>Add question</button>
            <button className={sty.btn} onClick={removeQuestion}>Remove question</button> 
            total : {faq.length}
            {/* array of {question ,answer} */}
            <Faq faqArray={faq} questionRefs={questionRefs} answerRefs={answerRefs} />
        </div>

        {/* submit btn */}
       <input type="submit"  className={sty.btn}  value={lod?<Example/>:'submit'} onClick={(e)=>{}}/> 

    </form>
    </>
  )
}

export default AddForm
      