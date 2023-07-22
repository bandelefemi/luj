import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
// import { popularProducts } from '../components/data'
// import ProductList from '../components/ProductList' 
// import ProductItems from '../components/ProductItems'
import { useLocation } from 'react-router-dom'
import Cart from './cart'

const Product = () => {

    const location = useLocation()

    const cat = location.pathname.split("/")[2]

    const [filters, setFilters] = useState([])

    const [sort, setSort] = useState('')

    const handleFilter=(event)=>{
        const value = event.target.value
        setSort(value)
    }

    // console.log(filter)

  return (
    <div>
        <Navbar />
        <Cart className=""/>
        <p className=' m-5 text-2xl font-extralight text-center'>
            {cat.replace('%20', " ")}
        </p>
        <div className=" flex justify-between mb-2 mx-4 gap-2">

            
            {/* <div>
                <p className=' font-semibold'>
                choose celebrity:
                </p>
                <select defaultValue={""} className=' bg-slate-300 px-3 py-1 text-white font-extralight outline-none'>
                    <option disabled>Select</option>
                    <option >Wizkid</option>
                    <option >Kizz Daniel</option>
                    <option >Davido</option>
                    <option >Tiwa Savage</option>
                    <option >Don Jazzy</option>


                </select>
            </div> */}


            <div>
                <p className=' font-semibold'>
                choose brand:
                </p>
                <select onChange={handleFilter} defaultValue={"a"} className=' bg-slate-300 px-3 py-1 text-white font-extralight outline-none'>
                    <option  disabled>Select</option>
                    <option  >LV</option>
                    <option >Puma</option>
                    <option >Gucci</option>
                    <option >Clarks</option>
                    <option>Burburry</option>
                    <option>Ferragamo</option>
                    <option>Moose</option>
                    <option>Wayt</option>




                </select>
            </div>
            
        </div>
        <div className=''>
            {/* {popularProducts.map(item => (
                <ProductItems item={item} key={item.id} />
            ))} */}
            <Products cat={cat} filter={filters} />
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Product