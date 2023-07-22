import { Google } from '@mui/icons-material'
import React, { useState } from 'react'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector((state) => state.user)

    const handleClick =(e) => {
        e.preventDefault()
        login(dispatch, {email, password})
    }


  return (
    <div className='flex bg-stone-100 '>
    
        <div className='w-full h-screen md:w-1/2 flex flex-col'>
            <div className=' flex p-10'>
                <p className='text-3xl font-bold uppercase tracking-tighter text-gray-700'>
                    LUJ
                </p>
            </div>
            <div className=' flex p-12 md:p-20 justify-center items-center h-full'>
                <div className=' flex flex-grow flex-col items-center'>
                    <p className=' text-lg font-extralight text-stone-500'>
                        Good to see you again!
                    </p>
                    <input 
                        
                        placeholder='Email' 
                        className='register-form'
                        onChange={(e)=> setEmail(e.target.value)} />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        className='register-form'
                        onChange={(e)=> setPassword(e.target.value)} />
                    <button disabled={isFetching} onClick={handleClick} className='reg-btn disabled:bg-red-600 disabled:cursor-not-allowed'>Login</button>
                    {error && <span className=' text-red-500 text-sm'>something went wrong</span>}
                    <button className='reg-btn'><Google fontSize='small' />Continue with Google</button>
                    <p className=' text-[0.7rem] text-gray-600'>
                        Don't have an account? <span className=' underline text-yellow-700/60 cursor-pointer '>Sign up now</span>
                    </p>
                </div>
            </div>
        </div>
        <div className={` hidden md:w-1/2 h-screen bg-login-pattern opacity-80 bg-cover md:flex`}>
        
        </div>
    </div>
  )
}

export default Login