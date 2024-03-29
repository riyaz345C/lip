import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import Slider from './Slider';
import Product from './product/Product';
// import SimpleSlider from './SliderComp';
function Main() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/slider' element={<Slider/>}/>
        <Route path='/product' element={<Product/>}/>
        {/* <Route path='/slider' element={<SimpleSlider/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default Main