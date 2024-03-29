import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import Slider from './Slider';
// import SimpleSlider from './SliderComp';
function Main() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/slider' element={<Slider/>}/>
        {/* <Route path='/slider' element={<SimpleSlider/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default Main