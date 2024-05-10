import React, {useState } from 'react'
import { Outlet} from "react-router-dom";
// import Home from './Home';
// import Slider from './Slider';
// import Product from './product/Product';
import Navbar from './component/Navbar';
import Footer from '../sabana/footer/Footer';
import useFetch from '../adminPanel/project/useFetch';
// import Contact from '../sabana/contact/Contact';
// import Login from '../sabana/login/Login';
// import Registration from '../sabana/registration/Registration';
// import About from '../sabana/about/About';
// import Infra from '../sabana/infra/Infra';
// import Popupform from '../sabana/popupform/Popupform'; 
// import Vendorlogin from '../sabana/vendorlogin/Vendorlogin'; 
// import AdminLogin from '../adminPanel/AdminLogin';
// import Account from '../adminPanel/Account';
// import SimpleSlider from './SliderComp';
function Main() {
  // const loc = useLocation();
  const [foot,setFoot] = useState(false)
  const [load,error,projectData] = useFetch('http://localhost:4000/projects')
  // useEffect(()=>{},[])
  return (
    
    <>
    <Navbar projectData={projectData}/>
    {/* <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/registration' element={<Registration/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/infra' element={<Infra/>}/> 
      <Route path='/vendorlogin' element={<Vendorlogin/>}/>   */}
      {/* <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/account' element={<Account/>}/> */}
    {/* </Routes> */}
    <Outlet/>
    <Footer/>


    </>
  )
}

export default Main
{/* <Route path='/popupform' element={<Popupform/>}/> */}