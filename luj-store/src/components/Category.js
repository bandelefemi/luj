import React from 'react'
import { categories } from './data'
import CategoryItems from './CategoryItems'

const Category = () => {
  return (
    <div className=' flex flex-col md:flex-row md:flex-wrap p-10 gap-5 justify-center'>
        {categories.map(item=> (
            <div key={item.id}>
                <CategoryItems item={item} />
            </div>
        ))}
    </div>
  )
}

export default Category