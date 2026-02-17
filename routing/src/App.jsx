import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Notfound from './pages/Notfound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import Productdetail from './pages/Productdetail'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/product/:id' element={<Productdetail/>}/>
        <Route path='/products' element={<Products/>}>
          <Route index element={<Men/>}/>
          <Route path='men' element={<Men/>}/> 
          <Route path='women' element={<Women/>}/>  
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
