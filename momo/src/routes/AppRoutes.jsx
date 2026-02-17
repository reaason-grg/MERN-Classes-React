import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Menu from "../pages/Menu";
import AllergyAdvice from "../pages/AllergyAdvice";
import Publiclayout from '../layout/Publiclayout';
import NotFound from '../pages/NotFound';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
const AppRoutes = () => {
  return (
    <div>
       <Routes>
        <Route element={<Publiclayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/allergy-advice' element={<AllergyAdvice/>}/>
            <Route path='/product-details/:id' element={<ProductDetails/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
