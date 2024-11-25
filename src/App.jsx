import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Services from './Pages/Services';
import Prices from './Pages/Prices';
import Admin from './Pages/Admin';
import Order from './Pages/Order';
import Catalogue from './Pages/Catalogue';
import Contact from './Pages/Contact'; 

export default function App() {
  return ( 
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<LogIn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/about us' element={<About />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/catalogue' element={<Catalogue />} />
    <Route path='/prices' element={<Prices />} />
    <Route path='/services' element={<Services />} />
    <Route path='/admin' element={<Admin />} />
    <Route path='/order' element={<Order />} />
    </Routes>
    </BrowserRouter>
  
  )
}
