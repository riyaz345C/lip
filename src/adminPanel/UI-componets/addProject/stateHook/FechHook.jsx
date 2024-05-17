import axios from 'axios'
import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../api'


function FechHook(box
    ,projectRef
    ,subTitleRef
    ,projectOverviewRef
    ,locationRef
    ,projectPlanRef
    ,points
    ,amenities
    ,faq
    ,questionRefs
    ,answerRefs
    ,pointsRefs
    ,boxHeadsRefs
    ,boxContentRefs
    ,amenitiesContentRef,
    amenitiesImgUrlRef,formRef,titleRef,method
    ) {
        const nav =useNavigate()
        const params = useParams()
        const [lod,setload] = useState(false)
        const [fetchData,setFetchData] = useState([])
        let value = (x) => {return x.current.value}
        let logg = async() =>{
            try {
            // console.log({ameni:amenitiesImgUrlRef});
        let postData = {
            projectName:value(projectRef),
            subTitle:value(subTitleRef),

            box:box.map((e,i)=>({
                id:e.id,
                head:boxHeadsRefs.current[i].value,
                content:boxContentRefs.current[i].value,
            })), //dy

            projectOverview:value(projectOverviewRef),
            location:value(locationRef),

            nearByAttraction:{
                title: value(titleRef),
                points:points.map((e,i)=>({
                    id:i,
                    point:pointsRefs.current[i].value,
                })) //dy
            }, 

            projectsAmmenities:amenities.map((e,i)=>({
                id:e.id,
                img:amenitiesImgUrlRef.current[i].files[0].name,
                content:amenitiesContentRef.current[i].value
            })), //dy

            projectPlan:value(projectPlanRef),

            faq:faq.map((e,i)=>({
                id:e.id,
                question: questionRefs.current[i].value,
                answer: answerRefs.current[i].value
            }))
            }

            const fileData = new FormData()
            amenities.forEach((e,i)=>{
                fileData.append(`amenitiesImg${e.id}`,amenitiesImgUrlRef.current[i].files[0])
            })
            fileData.append(`projectplan`,projectPlanRef.current.files[0])
            fileData.append('postdata',JSON.stringify(postData))

            console.log(postData);
            let postDat
            if(method === 'ADD'){
                setload(true)
                postDat = await axios.post(`${api.protected}?projectname=${postData.projectName}`,fileData,{
                    headers:{Authorization:`bearer ${localStorage.getItem('lipToken')}`}
                })
            } else if(method === 'UPDATE'){
                setload(true)
                console.log(postData);
                postDat = await axios.put(`${api.update}?projectname=${params.id}`,fileData,{
                    headers:{Authorization:`bearer ${localStorage.getItem('lipToken')}`}
                })
            }
            
            setFetchData(postDat)
            formRef.current.reset()
            nav('/admin/account')
            console.log('p');
        } catch (error) {
            setFetchData(error)
            console.log(error);
        }    
        finally{
            setload(false)
        }
        }
        const onSubmit = (e) => {
            e.preventDefault()
            console.log(e);
            logg()
        }
        return [onSubmit,fetchData,lod]
}

export default FechHook