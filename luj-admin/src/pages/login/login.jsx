import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/apiCalls'
import { useNavigate } from 'react-router-dom'


const Login = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser} = useSelector((state) => state.user)


    const handleClick =(e) => {
        e.preventDefault()
        login(dispatch, {email, password})
        if(currentUser){
            navigate('/')
        }

    }


  return (
    <div style={{display: "flex", 
                backgroundColor: "whitesmoke"}} className='flex bg-stone-100 '>
    
        <div style={{width: "100%", 
                    height: "100vh", 
                    display: 'flex', 
                    flexDirection: 'column'}} className='w-full h-screen md:w-1/2 flex flex-col'>
            <div style={{display: 'flex', 
                        padding: '50px'}} className=' flex p-10'>
                <p style={{
                    fontSize: '1.875rem',
                    lineHeight: '2.25rem',
                    fontWeight: '700'
                }} className='text-3xl font-bold uppercase tracking-tighter text-gray-700'>
                    LUJ
                </p>
            </div>
            <div style={{
                display: 'flex',
                padding: '80',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }} className=' flex p-12 md:p-20 justify-center items-center h-full'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }} className=' flex flex-grow flex-col items-center'>
                    <p style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.75rem',
                        fontWeight: '200'
                    }} className=' text-lg font-extralight text-stone-500'>
                        Good to see you again!
                    </p>
                    <input 
                        
                        placeholder='Email' 
                        className='register-form'
                        onChange={(e)=> setEmail(e.target.value)}
                        style={{borderWidth: '0.5px', 
                                outline: '2px solid transparent', 
                                outlineOffset: '2px', 
                                marginTop: '12px', 
                                marginBottom: '12px', 
                                padding: '10px',
                                width: '100%'}} />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        className='register-form'
                        onChange={(e)=> setPassword(e.target.value)}
                        style={{borderWidth: '0.5px', 
                                outline: '2px', 
                                outlineOffset: '2px', 
                                marginTop: '12px', 
                                marginBottom: '12px', 
                                padding: '10px',
                                width: '100%'}} />
                    <button 
                        onClick={handleClick} 
                        className='reg-btn disabled:bg-red-600 disabled:cursor-not-allowed'
                        style={{backgroundColor: 'black',
                                color: 'white',
                                width: '100%',
                                padding: '10px',
                                marginTop: '20px',
                                marginBottom: '15px',
                                cursor: 'pointer',
                                border: 0,
                                fontWeight: '200'}}>Login</button>
                    {/* {error && <span className=' text-red-500 text-sm'>something went wrong</span>} */}
                    {/* <p className=' text-[0.7rem] text-gray-600'>
                        Don't have an account? <span className=' underline text-yellow-700/60 cursor-pointer '>Sign up now</span>
                    </p> */}
                </div>
            </div>
        </div>
        <div className={` hidden md:w-1/2 h-screen bg-login-pattern opacity-80 bg-cover md:flex`}>
        
        </div>
    </div>
  )
}

export default Login