import axios from "axios";
import { useState } from "react";

const useAdd = ({url,data}) => {
    const [response,setResponse] = useState(null)
    const [error,setError] = useState(null)
    console.log(url,data);
    const addData = async() => {
        try {
            if(!localStorage.getItem('lipToken')){
                setError('Token Not Exist')
                return
            }
            const addStatus = await axios.post(`${url}`,
        data,{headers:{Authorization : `bearer ${localStorage.getItem('lipToken')}`}})
        console.log(addStatus);
            if(addStatus.status === 200){
                console.log('success');
                setResponse(addStatus)
                // return [addStatus]
            }
        } catch (error) {
            console.log(error);
            setError(error)
            // return [error]
        }
    }
    // addData()
    return [addData,response,error]
}
export default useAdd