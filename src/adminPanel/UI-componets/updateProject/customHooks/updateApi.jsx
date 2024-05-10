import axios from 'axios'
import React, { useState } from 'react'

const updateApi = async (data,url) => {
const handleUpadate = async() => {
    try {
        const status = await axios.put(url,data,
            {headers:{Authorization :  `bearer ${localStorage.getItem('lipToken')}`}})
    } catch (error) {
        console.log(error);
    }
}
return [handleUpadate,]
}

export default updateApi