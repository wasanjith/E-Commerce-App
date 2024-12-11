import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Collection from '../src/pages/Collection'
import About from '../src/pages/About'
import Contactc from '../src/pages/Contact'
import Product from '../src/pages/Product'
import Cart from '../src/pages/Cart'
import Login from '../src/pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from '../src/pages/Orders'
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path = '/' element = {<Home/>} /> 
        <Route path = '/collection' element = {<Collection/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/contact' element = {<Contactc/>} />
        <Route path = '/product/:productId' element ={<Product/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '//place-order' element = {<PlaceOrder/>} />
        <Route path = '/orders' element = {<Orders/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App