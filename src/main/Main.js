import React, {  useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import Slider from './Slider';
import Product from './product/Product';
import Navbar from './component/Navbar';
import Footer from '../sabana/footer/Footer';
import Contact from '../sabana/contact/Contact';
import Login from '../sabana/login/Login';
import Registration from '../sabana/registration/Registration';
import About from '../sabana/about/About';
import Infra from '../sabana/infra/Infra';
import Popupform from '../sabana/popupform/Popupform'; 
import Vendorlogin from '../sabana/vendorlogin/Vendorlogin'; 
// import SimpleSlider from './SliderComp';
function Main() {
  // const loc = useLocation();
  const [foot,setFoot] = useState(false)
  // useEffect(()=>{},[])
  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/slider' element={<Slider/>}/> */}
        <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/registration' element={<Registration/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/infra' element={<Infra/>}/> 
      <Route path='/vendorlogin' element={<Vendorlogin/>}/>  
    </Routes>

    <Footer/>

    </BrowserRouter>
    </>
  )
}

export default Main
{/* <Route path='/popupform' element={<Popupform/>}/> */}