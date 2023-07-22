import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import {SocialIcon} from 'react-social-icons'

const Footer = () => {
  return (
    <div className=' flex flex-col md:flex-row md:p-20 p-5 bg-black/90 text-gray-300'>
        <div className=' flex-1 flex flex-col items-center md:items-start p-5'>
            <div className=' text-2xl text-gray-400 font-semibold'>
                LUJ
            </div>
            <p className=' hidden md:block my-5 font-light text-xs tracking-wider'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl sem. Morbi a porta augue. Sed eu libero dolor. Nulla vel ligula quis nisl facilisis convallis nec eu arcu.
            </p>
            <div className=' flex '>
                
                    <SocialIcon url='https://facebook.com/bandelefemi' bgColor='transparent' fgColor='gray' />
            
                    <SocialIcon url='https://instagram.com/bandelefemi' bgColor='transparent' fgColor='gray' />
                
                    <SocialIcon url='https://twitter.com/bandelefemi' bgColor='transparent' fgColor='gray' />
                
            </div>
        </div>
        <div className=' flex-1 p-5 flex flex-col items-center'>
            <p className=' text-lg mb-5 text-gray-400 font-semibold'>
                Useful Links
            </p>
            <ul className=' grid grid-cols-3 gap-3 md:grid-cols-2 text-sm font-light tracking-wider'>
                <li className=' w-[50%]'>Home</li>
                <li className=' w-[50%]'>Cart</li>
                <li className=' w-[50%]'>Men</li>
                <li className=' w-[50%]'>Ladies</li>
                <li className=' w-[50%]'>Account</li>
                <li className=' w-[50%]'>Wishlist</li>
                <li className=' w-[50%]'>Terms</li>
            </ul>
        </div>
        <div className=' flex-1 p-5 flex flex-col items-center '>
            <p className='text-gray-400 font-semibold text-base mb-5'>
                Contact
            </p>
            <div className='text-gray-400 text-xs tracking-widest flex items-center md:items-start  flex-col gap-3'>
                <p className=""><Room className=' mr-3'/>Lagos, Nigeria</p>
                <p className=""><Phone className=' mr-3' />+234 81 3662 6559</p>
                <p className=""><MailOutline className=' mr-3'/>contact@luj.ng</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer