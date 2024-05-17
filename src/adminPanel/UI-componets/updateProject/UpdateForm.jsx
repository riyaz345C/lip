import { useRef,useState } from 'react'
import sty from '../addProject/addform.module.css'
import Ammenities from '../addProject/component/Ammenities'
import Box from '../addProject/component/Box'
import Faq from '../addProject/component/Faq'
import ImgUpload from '../addProject/component/ImgUpload'
import Points from '../addProject/component/Points'
import { dataFields } from '../addProject/datafields'
import FechHook from '../addProject/stateHook/FechHook'
import { api } from '../../api'
import { useUpdate } from './customHooks/useUpdate'
import Example from '../../../main/assets/Loader'
let x=0
export const UpdateForm = () => {
    // fetch particular project data : use '/projects/project_name -completed
    //then // mapped it on update form : use previous map technique -onprocess
//then // collect data from form   : use prvious statehook to collect form data -almost completed
//then // POST the form data    : create post api '/update/project_id'  -almost completed 
    // single field
    const projectRef = useRef()
    const subTitleRef = useRef()
    const projectOverviewRef = useRef()
    const locationRef = useRef()
    const projectPlanRef = useRef()
    const titleRef  =useRef()
   
    // const handleChange = (e,field) =>{
    //     setInputs(prv => {
    //        return {
    //         ...prv,
    //         [field]:e.target.value
    //        }
    //     })
    // }
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
        addPoint,removePoint,
        load,error,projectData,setBox] = useUpdate(amenitiesImgUrlRef,api.projects)
        console.log(projectData);
        // custom hook for get data from form and fetch it
        const [onSubmit,fetchData,lod] = FechHook(
            box,projectRef,subTitleRef,projectOverviewRef
            ,locationRef,projectPlanRef,points,amenities
            ,faq,questionRefs,answerRefs,pointsRefs,boxHeadsRefs
            ,boxContentRefs,amenitiesContentRef,amenitiesImgUrlRef,
            formRef,titleRef,"UPDATE")
            // custom hook for bounce back to login if not 
            if(!projectData) {
                return 'loading....'
            }
    return(
        <>
        <form onSubmit={onSubmit} ref={formRef} className={sty.form}>
        <div className="input">
            <label htmlFor="">{dataFields.projectName}</label>
            <input type="text" ref={projectRef} defaultValue={projectData.projectName}  />
        </div>
        <div className="input">
            <label htmlFor="">{dataFields.subTitle}</label>
            <input type="text" ref={subTitleRef} defaultValue={projectData.subTitle} />
        </div>
        {/* box */}
            <h3 >Box</h3> {/*css working */}
        <div className={`input ${sty.boxs}`}>
            <Box boxArray={box} headRefs={boxHeadsRefs} update={true} 
            set={setBox} contentRefs={boxContentRefs} style={sty} />
            {/* {console.log({box:box})};    */}
        </div>
        <div className="input">
            <label htmlFor="">{dataFields.projectOverview}</label>
            <input type="text" ref={projectOverviewRef} defaultValue={projectData.projectOverview} />
        </div>
        <div className="input">
            <label htmlFor="">{dataFields.location}</label>
            <input type="text" ref={locationRef} defaultValue={projectData.location} />
        </div>
        {/* nerby attraction */}
        <div className="input">
            <h3>Near By Attraction</h3>
            <label htmlFor=""> {dataFields.nearbyAttraction.title}</label>
            <input type="text" ref={titleRef} defaultValue={projectData.projectName} />
                Total Points : {points.length} <br />
                <button onClick={addPoint}>Add Points</button>
                <button onClick={removePoint}>Remove Points</button>
            <div className={sty.points}>
                <Points pointsArray={points} set={setPoints} pointsRefs={pointsRefs} data={projectData.nearByAttraction.points}/>
            </div>
        </div>
        {/* amenities */}
        <div className="input">
            <label htmlFor="">Amenities</label>
            <button onClick={addAmenities}>Add amenities</button>
            <button onClick={removeAmenities}>Remove amenities</button> 
            total : {amenities.length}
            
            <Ammenities set={setAmenities} update={true} stateArray={amenities} imgRef={amenitiesImgUrlRef} 
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
            <Faq faqArray={faq} set={setFaq} update={true} questionRefs={questionRefs} answerRefs={answerRefs} />
        </div>
       <input type="submit" value={lod?<Example/>:'submit'} onClick={(e)=>{}}/> 
    </form>
    </>
   )
}