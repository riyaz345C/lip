import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from './UI-componets/productlist/ProductList';
import useRedirect from './Hooks/useRedirect';
// import useAdd from './Hooks/UseAdd';

function Account() {
    const navigate = useNavigate()

    const [dumb,setDumb] = useState(null)
    const [adminData,setAdminData] = useState(false)
    const [dataList] = useRedirect(dumb,navigate,setAdminData)

    // console.log(localStorage.getItem('lipToken'));

    // console.log(adminData);
    // console.log(typeof(adminData) === 'object');
    // if(adminData.length){
        
    if(typeof(adminData) === 'object'){
        return(<>
        <div style={{margin:'auto auto',width:'fit-content'}}>
        <h1>Admin Logged In </h1>
        <h2>ProductList</h2>
    <button onClick={()=>{navigate('/admin/add')}}>Add</button>
        {(adminData.length)?<ProductList list={adminData} setState={setAdminData}/>:<h1>No Data</h1>}
        <button onClick={() =>{
       localStorage.clear()
       setDumb(0)
    }}>Logout</button>
        </div>
        </>)
    }
    return <>loading.....</>
  
}

export default Account