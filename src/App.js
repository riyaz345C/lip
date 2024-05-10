// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import AdminLogin from './adminPanel/AdminLogin';
import Account from './adminPanel/Account';
import Project from './adminPanel/project/Project';
import AdminRoutes from './adminPanel/admin-routes/AdminRoutes';
import Home from './main/Home';
import Product from './main/product/Product';
import Contact from './sabana/contact/Contact';
import Login from './sabana/login/Login';
import Registration from './sabana/registration/Registration';
import About from './sabana/about/About';
import Infra from './sabana/infra/Infra';
import Vendorlogin from './sabana/vendorlogin/Vendorlogin';
import AddForm from './adminPanel/UI-componets/addProject/AddForm';
import { UpdateForm } from './adminPanel/UI-componets/updateProject/UpdateForm';

// import Main from './slick/Main';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='' element={<Main/>} >
          <Route  path='' element={<Home/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='project/:id' element={<Project/>}/>
          <Route path='contact' element={<Contact/>}/> 
          <Route path='login' element={<Login/>}/> 
          <Route path='registration' element={<Registration/>}/> 
          <Route path='about' element={<About/>}/> 
          <Route path='infra' element={<Infra/>}/> 
          <Route path='vendorlogin' element={<Vendorlogin/>}/>  
      </Route>
      <Route path='admin' element={<AdminRoutes/>}>
          <Route path='' element={<AdminLogin/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='add' element={<AddForm/>} />
          <Route path='project/:id' element={<Project/>}/>
          <Route path='Update/:id' element={<UpdateForm/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
