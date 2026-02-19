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
import Payment from '../pages/payment/Payment';
import Success from '../pages/payment/Success';
import Failure from '../pages/payment/Failure';
import Login from '../pages/auth/Login';
import Profile from '../pages/auth/Profile';
import ProtectedRoute from '../components/ProtectedRoute';
const AppRoutes = () => {
  return (
    <div>
       <Routes>
        <Route element={<Publiclayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route 
            path='/menu'
            element=
            {<ProtectedRoute>
                <Menu/>
            </ProtectedRoute>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/allergy-advice' element={<AllergyAdvice/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/success' element={<Success/>}/>
            <Route path='/failure' element={<Failure/>}/>
            <Route path='/product-details/:id' element={<ProductDetails/>}/>
            <Route path='/*' element={<NotFound/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
