import axios from 'axios'
import React, { useState } from 'react'

function useDeleteProducts(url) {
    const [loading,setLoading]  =useState(false)
    const [error,setError] = useState(false)
    const [response,setResponse] = useState(null)

 const deleteFunction = async (id,setState) =>{
    setLoading(true)
    try {
        const response = await axios.delete(url+'/'+id,
        {headers:{Authorization:`bearer ${localStorage.getItem('lipToken')}`}});
        setState(prv => prv.filter(project => project.projectName!=id))
        setResponse(response);
        console.log(id);
    } catch (error) {
        setError(true)
        console.log(error);
    }
    setLoading(false)
}
return [loading,error,response,deleteFunction]
}

export default useDeleteProducts