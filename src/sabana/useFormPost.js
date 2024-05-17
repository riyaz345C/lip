import axios from "axios"
import { useState } from "react"
import {api} from '../adminPanel/api'
const useFormPost = () => {
    const [loading,setLoading] = useState(false)
    const [state,setState] = useState({message:''})
    const sendEmail = async (postData,form) =>{
        // e?.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post(api.sendmail,{...postData})
            setState('submitted')
            form.current.reset()
        } catch (error) {
            if (error.response) {   
                // The request was made and the server responded with a status code
                setState({
                     message: error.response.data.message, 
                    status:error.response.status,
                     color: "red" });
                console.log(error.response.status, error.response.data.message);
          
              } else if (error.request) {
                // The request was made but no response was received
                setState({ message: "Check Internet Connection.",status:error, color: "red" });
                console.log("Connection refused.");
          
              } else {
                // Something happened in setting up the request that triggered an error
                setState({ message: "Error: " + error.message,status:error, color: "red" });
                console.error("Error: ", error.message);
              }
              console.log(error);
        }
        finally{
            setLoading(false)
        }
    }
    return[sendEmail,loading,state]
}
export default useFormPost;