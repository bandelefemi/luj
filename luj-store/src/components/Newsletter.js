import React from 'react'

const Newsletter = () => {
  return (
    <div className=' flex bg-gray-100 py-10 flex-col items-center justify-center'>
        <div>
            <p className=' uppercase text-[0.6rem] tracking-widest font-light'>newsletter</p>
        </div>
        <div className="flex my-4">
            <p className=' text-xl md:text-3xl font-thin'>
            Subscribe to get the latest updates 
            </p>
        </div>
        <div className="flex my-3 gap-5 md:gap-2 flex-col md:flex-row ">
            <input type="email" placeholder='Email' className=' border-b-2 border-gray-400 bg-transparent mx-3 px-3 outline-none' />
            <button className=' bg-cyan-600 text-white px-6 py-2 text-xs mx-8 md:mx-0 '>
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default Newsletter