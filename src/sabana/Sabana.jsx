import React from 'react'
import Footer from './footer/Footer';
import Contact from './contact/Contact';
import Login from './login/Login';
import Registration from './registration/Registration';
import About from './about/About';
import Infra from './infra/Infra';
import Popupform from './popupform/Popupform'; 
import Vendorlogin from './vendorlogin/Vendorlogin'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Sabana() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Footer/>}/>
      <Route path='/contact' element={<Contact/>}/> {/*p */}
      <Route path='/login' element={<Login/>}/> {/*p */}
      <Route path='/registration' element={<Registration/>}/> {/*p */}
      <Route path='/about' element={<About/>}/> {/*p */}
      <Route path='/infra' element={<Infra/>}/> {/*p */}
      <Route path='/popupform' element={<Popupform/>}/>
      <Route path='/vendorlogin' element={<Vendorlogin/>}/>  {/*p */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Sabana