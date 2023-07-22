import React, { useEffect, useState } from 'react'
// import { popularProducts } from './data'
import ProductItems from './ProductItems'
import axios from 'axios'
import { BASE_URL } from '../requestMethods'
import { featuredBanner } from './featuredCelebs'

const Products = ({cat, filters}) => {

  const [products, setProducts ] = useState([])
  // const [filteredProducts, setFilteredPreducts] = useState([])

  useEffect(()=> {
    const getProducts = async () => {
      try{
        const res = await axios.get( cat? `${BASE_URL}/product?category=${cat}` : `${BASE_URL}/product` )

        setProducts(res.data)
      } catch(err) {
          
      }
    }
    getProducts()
  }, [cat])

  const slideNumber = Math.floor(Math.random()*10)



  return (
    <div>

      <div className=' flex-wrap flex bg-gray-100 justify-between p-5 md:p-20'>
              {products.slice(0, 6).map(item=> (
                  <ProductItems key={item._id} item={item} />
              ))}
              
      </div>

      <div className=' p-4 md:p-8'>
        <div className=' relative h-40 md:h-72 w-full bg-slate-300 overflow-hidden'>
          <img src={featuredBanner[slideNumber]?.img} alt="" className=" h-72 w-full object-cover" />
        <div className=' absolute bg-black/60 z-10 transition ease-in-out duration-500 opacity-0 hover:opacity-100 top-0 w-full h-full'>
          <div className=' cursor-pointer flex justify-center items-center h-full'>
            <p className=' text-white text-3xl md:text-6xl font-extrabold capitalize'>
              Shop {featuredBanner[slideNumber]?.name}
            </p>
          </div>
        </div>
        </div>


      </div>

      <div className=' flex-wrap flex bg-gray-200 justify-between p-5 md:p-20'>
              {products.slice(6, 10).map(item=> (
                  <ProductItems key={item._id} item={item} />
              ))}
              
      </div>

    </div>
    
  )
}

export default Products