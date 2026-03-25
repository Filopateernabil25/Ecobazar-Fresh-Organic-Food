import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPageLayouts from './Layouts/MainPageLayouts'
import HomeMainPage from './Layouts/HomeMainPage'

import LoginPage from './Pages/LoginPage'
import CreateAcount from './Pages/CreateAcount'
import HomePage from './Pages/HomePage'
import Cart from './Components/Cart'

import CartProvider from './Pages/product/CartContext'
import Shop from './Pages/Shop'
import NotFound from './Pages/NotFound'
import Faqs from './Pages/Faqs'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ProductDetails from './Pages/product/ProductDetails'
import ApiSingleProduct from './services/ApiSingleProduct'
import CheckOut from './Components/CheckOut'


export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<MainPageLayouts />} >
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<CreateAcount />} />
          <Route path='shopping' element={<Shop />} />
          <Route path='faqs' element={<Faqs />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='/' element={<HomeMainPage />} >
          <Route index element={<HomePage />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<CheckOut />} />
          <Route path='product/:id' element={
            <ApiSingleProduct>
              <ProductDetails />
            </ApiSingleProduct>
          } />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </CartProvider>
  )
}