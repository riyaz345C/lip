import axios from 'axios'
import React, { useEffect } from 'react'
import { api } from '../api'

function useRedirect(dumb,navigate,setAdminData) {
    useEffect(()=>{
        // if(!localStorage.getItem('lipToken')){
        //     navigate('/admin',{replace: true})
        //     return
        // }
        const fetch = async() => {
            try {
                const DataList = await axios.get(api.protected,{
                    headers : {Authorization : `bearer ${localStorage.getItem('lipToken')}`}
                })
                console.log(DataList.data.data[0]);
                setAdminData(DataList.data.data[0].projects)
                // console.log(adminData);
                return [DataList.data.data[0]]

            } catch (error) {
                if(error){
                    localStorage.clear()
                    navigate('/admin',{replace:true})
                    return
                }
                console.log(error);
            }
        }
        fetch()
        // return () => fetch()
    },[dumb])
    return ['PPP']
}

export default useRedirect