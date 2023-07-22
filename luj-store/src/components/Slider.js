import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { sliderItems } from './data'

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick =(directions)=> {
        if (directions === "left") {
            setSlideIndex(slideIndex>0? slideIndex-1 : 2)
        } else if (directions==="right") {
            setSlideIndex(slideIndex<2? slideIndex+1: 0)
        }
    }
    
  return (
    <div className='hidden md:flex w-full h-[100vh] relative overflow-hidden'>
        <div onClick={()=> handleClick("left")} className=' z-10 opacity-50 absolute shadow-md left-5 top-[50%] w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center'>
            <ArrowLeftOutlined />
        </div>
        <div style={{transform:  `translateX(${slideIndex * -100}vw )` }} className=' h-full flex transition duration-[2000ms]'>
            {sliderItems.map(item => (
                <div key={item.id} style={{backgroundColor: `#${item.bg}`}} className={` w-[100vw] h-[100vh] flex items-center`}>
                    <div className=' h-full flex-1'>
                        <img src={item.img} alt='' className=' h-[80%] object-cover' />
                    </div>
                    <div className=' flex-1 uppercase p-5'>
                        <p className=' text-5xl font-bold'>
                            {item.title}
                        </p>
                        <p className=' my-5 text-lg tracking-widest'>
                            {item.desc}
                        </p>
                        <button className=' uppercase bg-transparent py-3 px-5 hover:bg-black transition ease-in-out duration-500 hover:text-white border border-black text-gray-800'>
                            Shop now
                        </button>
                    </div>
                </div>
            ))}
            

            

            
            
        </div>
        <div onClick={()=> handleClick("right")} className=' opacity-50 absolute shadow-md right-5 top-[50%] w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center'>
            <ArrowRightOutlined />
        </div>
    </div>
  )
}

export default Slider