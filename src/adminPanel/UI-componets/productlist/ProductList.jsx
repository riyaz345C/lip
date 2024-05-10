import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useDeleteProducts from '../../Hooks/useDeleteProducts';
import { api } from '../../api';
const url = `${api.get}delete`
function ProductList({list,setState}) {
  const [loading,error,response,deleteFunction] = useDeleteProducts(url)
  console.log(response);
  console.log(error);
  console.log(list);
  return (
    <>
    
    <table>
      <thead>
        <tr>
        <th>Image</th>
        <th>ProjectName</th>
        <th>Url</th>
        {/* {list[0].projectsAmmenities.map((e,i)=>{
          
          return(<th key={i}>
            amenities-{e.id}
          </th>)
        })} */}
        <th>amenities total</th>
        <th>delete</th>
        <th>update</th>
        </tr>
      </thead>
      <tbody>
        {!loading?list.map((e,i) => {
          return(
            <tr key={i}>

          <td><img src={`${api.get}/${e.projectPlan}`} width={`50px`} height={`50px`} alt="" /></td>
          <td>{e.projectName || 'dummy'}</td>
       
          <td><Link to={`/admin/project/${e.projectName}`} >visit</Link></td>
         <td style={{textAlign:'center'}}>{e.projectsAmmenities.length}</td>
         <td><button onClick={()=>deleteFunction(e.projectName,setState)}>delete</button></td>
         <td><Link to={`/admin/update/${e.projectName}`}>update</Link></td>
        </tr>
          )
        }):'loading.....'}
      </tbody>
    </table>
   
    </>
  )
}

export default ProductList