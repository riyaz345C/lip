import React, { useRef, useState } from 'react'
import { dataFields } from '../datafields'

function Statehook(amenitiesImgUrlRef) {
    // const amenitiesImgUrlRef = useRef([])
    const [faq,setFaq] = useState(dataFields.faq)
    const [amenities,setAmenities] = useState(dataFields.projectsAmmenities)
    const [points,setPoints] = useState(dataFields.nearbyAttraction.points)
    const [box,setBox] = useState(dataFields.box)
    const addQuestion = (e) => {
        e.preventDefault()
        setFaq(prv =>[...prv,{
            id:prv[prv.length - 1].id+1,
            question:'question',
            answer:`answer`
    }])
        // window.scrollTo(0,document.body.scrollHeight)
        // console.log(faq);    
    }

    const removeQuestion = (e) => {
        e.preventDefault()
        if(faq.length>1){
            setFaq(prv => prv.slice(0,-1))
        }
    }

    const addAmenities = (e) => {
        e.preventDefault()
        setAmenities(prv =>[...prv,{
            id:prv[prv.length - 1].id+1,
            img:'img',content:'content'
        }])
        // console.log(amenities,amenitiesImgUrlRef);
        // window.scrollTo(0,document.body.scrollHeight)
        // console.log(faq);    
    }

    const removeAmenities = (e) => {
        e.preventDefault()
        if(amenities.length>1){
            setAmenities(prv => prv.slice(0,-1))
        }
        amenitiesImgUrlRef.current.pop()
    }
    
    const addPoint = (e) => {
        e.preventDefault()
        setPoints(prv => [
            ...points,prv.length+1
        ])
        console.log(points);
    }
    const removePoint = (e) => {
        e.preventDefault()
        if(points.length>1){
            setPoints(prv => prv.slice(0,-1))
        }
    }
    return[faq,setFaq,amenities,setAmenities,points,setPoints,box,
        addQuestion,removeQuestion,addAmenities,removeAmenities,
        addPoint,removePoint,amenitiesImgUrlRef,dataFields]
}

export default Statehook

// box
// projectRef
// subTitleRef
// projectOverviewRef
// locationRef
// projectPlanRef
// box.
// points.
// amenities.
// faq.
// amenities