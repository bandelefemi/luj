import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Category from '../components/Category'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import ProductDetails from '../components/ProductDetails'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Cart from './cart'

const Home = () => {


  return (
    <div className=''>
        <Navbar />
        <Cart />
        <Slider />
        <Category />
        <Products />
        <Newsletter />
        <Footer />
        <div className=''>
            {/* { <ProductDetails product={product} />} */}
        </div>
    </div>
  )
}

export default Home