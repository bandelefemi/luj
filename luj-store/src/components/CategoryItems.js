import React from 'react'
import { categories } from './data'
import { Link } from 'react-router-dom'

const CategoryItems = ({item}) => {
  return (
    <div className=' flex-1 h-[50vh] md:h-[70vh] relative'>
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt='' className=' w-full h-full object-cover' />
          <div className=' absolute top-0 left-0 w-full h-full transition duration-500 hover:bg-black/40 flex flex-col items-center justify-center'>
              <p className=' text-white mb-4 text-3xl font-bold'>{item.title}</p>
              <button className=' uppercase p-2 text-gray-500 cursor-pointer text-sm bg-white'>Shop now</button>
          </div>
      </Link>
        
    </div>
  )
}

export default CategoryItems