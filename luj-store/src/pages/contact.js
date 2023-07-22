import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()
    const [successMessage, setSuccessMessage] = useState('')

    const sendEmail = async(e)=> {
        e.preventDefault()
        await emailjs.sendForm('service_fr1j9lg', 'template_kexo80s', form.current, 'ly-TbnDr4-DhPHOE9').then(res => {
            console.log(res.text)
            if(res.text === 'OK'){
                setSuccessMessage('Your message has been sent successfully!')
            }
        }, (error) => {
            console.log(error.text)
        })
    }
  return (
    <div className=' h-screen w-screen'>
        <Navbar />

        <div className=' h-full w-full flex items-center bg-contact-bg bg-cover py-16 px-8 md:px-20'>
        
            <div className=' bg-contactform-bg bg-[65%] w-full md:h-full'>
                <form className=' md:h-full' ref={form} onSubmit={sendEmail}>

               <div className=' relative w-full md:w-1/2 py-10 px-6 md:h-full md:px-16 lg:px-28 xl:px-36 gap-6 bg-gray-200/95 flex flex-col items-center justify-center'>
                <p className=' font-light text-gray-600 capitalize text-lg'>
                    contact us
                </p>
                <input name='name' type="text" className=" text-[0.6rem] w-full px-3 py-2 text-gray-600 rounded-sm outline-none" placeholder='Name' />
                <input name='email' type="text" className=" text-[0.6rem] w-full px-3 py-2 text-gray-600 rounded-sm outline-none" placeholder='Email' />
                <textarea name='message' type="text" className=" resize-none w-full text-[0.6rem] px-3 py-2 text-gray-600 rounded-sm outline-none h-20" placeholder='what you wanna say?' />
                <button type='submit' className=" px-5 py-2 bg-white text-xs font-semibold text-gray-500">Send</button>
                <p className=' absolute top-5 text-green-700 font-light text-xs '>
                    {successMessage}
                </p>
               </div>
              
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Contact