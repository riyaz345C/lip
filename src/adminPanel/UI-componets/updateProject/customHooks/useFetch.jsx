import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function useFetch(url,s1,s2,s3) {
    const {id} = useParams()
    // console.log(id);
    const [load,setLoad] = useState(false)
    const [projectData,setProjectData] = useState(null)
    const [error,setError] = useState(false)
    const fetchProjectData = async () =>{
        setLoad(true)
        try {
            console.log('start');
            const projectData = await axios.get(`${url}/${id||''}`)
            setProjectData(projectData.data)
            console.log(projectData.data);
            console.log('stop');
            s1(projectData.data.faq)
            s2(projectData.data.projectsAmmenities)
            s3(projectData.data.nearByAmmenities.points)
        } catch (error) {
            setError(error)
        }
        setLoad(false)
        // s4(projectData.box)
    }
    useEffect(()=>{
        fetchProjectData()
    },[id])
 return [load,error,projectData]
}

export default useFetch