import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function useFetch(url) {
    const {id} = useParams()
    // console.log(id);
    const [load,setLoad] = useState(false)
    const [projectData,setProjectData] = useState(null)
    const [error,setError] = useState(false)
    const fetchProjectData = async () =>{
        setLoad(true)
        try {
            const projectData = await axios.get(`${url}/${id||''}`)
            setProjectData(projectData.data)
        } catch (error) {
            setError(error)
        }
        setLoad(false)
    }
    useEffect(()=>{
        fetchProjectData()
    },[id])
 return [load,error,projectData]
}

export default useFetch