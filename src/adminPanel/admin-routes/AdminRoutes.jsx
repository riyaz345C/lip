import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Account from '../Account'
import Project from '../project/Project'
import AdminLogin from '../AdminLogin'

function AdminRoutes() {
  return (
    <>
    {/* <div>AdminRoutes</div> */}
    {/* <Route>
    <Route path='/' element={<AdminLogin/>}/>
    <Route path='/account/' element={<Account/>}/>
    <Route path='/account/:id' element={<Project/>}/>
    </Route> */}
    <Outlet/>
    </>
  )
}

export default AdminRoutes