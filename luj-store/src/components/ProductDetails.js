import { ClearOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { publicRequest } from '../requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../redux/cartRedux'

const ProductDetails = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()
    const quantity = 1 

    useEffect(()=> {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/product/find/${id}`)
                
                setProduct(res.data)
            } catch(err) {
    
            }
        }
        
        getProduct()
    }, [id])

    

    const cartDetails = useSelector(state => state.cart)


    const handleClick =()=> {
        const targetId = id; // Replace with the ID you want to check
        let idExists = false;
        
        for (let i = 0; i < cartDetails.products.length; i++) {
          if (cartDetails.products[i]._id === targetId) {
            idExists = true;

           
            break;
          }
        }

        if (!idExists) {
            dispatch(
                addProducts({...product, quantity})
            )
        }
    }

    const amount = useSelector( state => state.cart.quantity)

  return (
    
   <>
   {product &&
    
    <div className={` fixed w-full z-50 h-screen  bg-product-pattern bg-cover top-0 right-0`}>
        
        <div  data-value='parent' className={` bg-cover flex items-center backdrop-blur-sm h-screen justify-center px-6 md:px-20 `}>
        <div className=' absolute top-5 left-5'>
            <Link to={"/"}>
                <p className='ext-2xl md:text-3xl font-bold uppercase tracking-tighter text-gray-100 '>
                    LUJ
                </p>
            </Link>
            
        </div>

        <div className=' absolute top-5 right-5'>
            <Link to={"/"}>
                <p className='ext-2xl md:text-3xl font-bold uppercase tracking-tighter text-gray-100 '>
                    {amount}
                </p>
            </Link>
            
        </div>
            <div data-value='child' className=' transform ease-in duration-1000 bg-zinc-100 rounded-md w-full py-5 md:py-28 px-3 md:px-10 flex flex-col md:flex-row relative items-center'>
                <Link to={'/'}>
                    <div className='absolute -top-10 right-0 md:-right-10 w-10 h-10 flex items-center justify-center text-white cursor-pointer'>
                        <ClearOutlined />
                    </div>
                </Link>
                
                <div className=" min-h-32 w-32 md:flex md:w-80 bg-white p-2">
                    <img src={product.img} alt="" className="" />
                </div>
                <div className=" flex px-5 flex-col gap-5">
                    <p className=' text-2xl font-semibold md:font-thin tracking-widest text-center mt-3'>
                        {product.title}
                    </p>
                    <div className="">
                        <p className=' text-sm text-justify font-light tracking-wider'>
                            {product.description}
                        </p>
                    </div>
                    <div className=" flex items-center justify-between mb-5">
                        <p className=' text-3xl font-extralight mr-3 '>
                            &#8358;{product.price}
                        </p>
                        <button onClick={handleClick} className=' bg-transparent border text-xs border-gray-400 font-light shadow-md py-2 px-8'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}
</>
  ) 
}

export default ProductDetails