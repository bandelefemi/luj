import React, { useState } from 'react'
import { Clear, Menu, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../redux/cartRedux'

const Navbar = () => {

    const [showCart, setShowCart] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const user = useSelector((state)=> state.user.currentUser)

    const dispatch = useDispatch()

    const handleClick =()=> {
        setShowCart(true)
        dispatch(
            toggleCart({showCart})
        )
    }

    // const cart = useSelector(state => state.cart)
    // console.log(user)


    const quantity = useSelector(state => state.cart.quantity)

    // console.log(cart)
  return (
    <>
    <div className={` md:hidden fixed z-20 h-screen w-1/2 bg-slate-50 ${showNav? `right-0`: `-right-full`} transition-all ease-in-out duration-1000`}>
        <div className=' p-16 flex justify-center'>
            <div className=' flex text-gray-600 flex-col gap-5 font-light text-2xl'>
                <Link onClick={()=> setShowNav(false)} to={'/'}>
                    Home
                </Link>
                <Link>
                    Order
                </Link>
                {user && <Link>
                    Account
                </Link>}
                {!user && <Link to={'/login'}>
                    Login
                </Link>}
                {!user && <Link to={'/register'}>
                    Register
                </Link>}
                <Link to={'/contact'}>
                    Contact
                </Link>
                <Link to={'/cart'}>
                    Cart
                </Link>

            </div>
        </div>
        <div onClick={()=> setShowNav(false)} className=' cursor-pointer absolute top-6 right-6'>
            <Clear fontSize='large' />
        </div>
    </div>
    { <div className=' flex justify-between px-4 py-4 items-center'>
        
        {/* ..............left side.......... */}
        <div className='hidden  w-1/3 md:flex items-center'>
            <p className=' font-thin text-gray-600'>EN</p>
            <div className=' border border-gray-300 rounded-md p-1 ml-4'>
                
                {/* search bar */}
                <input type="text" className=' border-none outline-none' />
                <SearchOutlined style={{color:"gray", fontSize: 16}} />
            </div>
        </div>
        <div className=' w-1/3'>

            {/* logo section */}
            <div className=' flex md:justify-center'>
                <Link to={"/"}>
                    <p className=' text-2xl md:text-3xl font-bold uppercase tracking-tighter text-gray-700 '>
                        LUJ
                    </p>
                </Link>
                
            </div>
        </div>
        <div className=' w-1/3 flex justify-end'>
            <div className=' hidden md:flex-row md:h-full md:flex gap-3 text-sm font-extralight'>
                {/* <Link to={"/"}>
                    <p className=' cursor-pointer'>HOME</p>
                </Link> */}
                <p className=' capitalize text-blue-900'>
                    {user?.fullName}
                </p>
                <Link to={'/contact'} className=''>Contact</Link>

                {!user && <Link className=' cursor-pointer'>LOGIN</Link>}
                <div onClick={handleClick}>
                    <Badge className=' cursor-pointer' badgeContent={quantity} color='primary' >
                        <ShoppingCartOutlined fontSize='small' />
                    </Badge>
                </div>
                
            </div>
            <div  className=' flex items-center gap-5 md:hidden'>
                <Badge onClick={handleClick} className=' cursor-pointer' badgeContent={quantity} color='primary' >
                    <ShoppingCartOutlined fontSize='small' />
                </Badge>
                <Menu onClick={()=> setShowNav(true)} className=' cursor-pointer' fontSize='large' />
            </div>
        </div>
        
    </div>}
    </>
  )
}

export default Navbar