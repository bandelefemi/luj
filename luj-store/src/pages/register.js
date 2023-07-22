import { Google } from '@mui/icons-material'
import React from 'react'
// import background from './../1.jpg'

const Register = () => {
  return (
    <div className=' h-screen flex bg-stone-200 '>
        <div className='h-screen w-full md:w-1/2 flex flex-col'>
            <div className=' flex p-10'>
                <p className='text-3xl font-bold uppercase tracking-tighter text-gray-700'>
                    LUJ
                </p>
            </div>
            <div className=' items-center w-full flex p-12 md:p-20 justify-center h-full'>
                <div className=' flex flex-grow flex-col items-center'>
                    <p className=' text-lg font-extralight'>
                        Sign Up
                    </p>
                    <input type="text" placeholder='Full Name' className='register-form' />
                    <input type="email" placeholder='Email' className='register-form' />
                    <input type="password" placeholder='Password' className='register-form' />
                    <input type="password" placeholder='Confirm Password' className='register-form' />
                    <button className='reg-btn'>Signup</button>
                    <button className='reg-btn'><Google />Continue with Google</button>
                    <p className=' text-[0.7rem] text-gray-600'>
                        Already have an account? <span className=' underline text-yellow-700 cursor-pointer '>Login</span>
                    </p>
                </div>
            </div>
        </div>
        <div className={` hidden md:w-1/2 h-screen bg-reg-pattern bg-cover md:flex`}>
        
        </div>
    </div>
    
  )
}

export default Register