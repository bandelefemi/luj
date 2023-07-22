import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProducts } from '../redux/cartRedux'

const ProductItems = ({item}) => {

    const dispatch = useDispatch()
    const quantity = 1

    const cartDetails = useSelector(state => state.cart)

    const handleClick =()=> {


        const targetId = item._id; // Replace with the ID you want to check
        let idExists = false;
        
        for (let i = 0; i < cartDetails.products.length; i++) {
          if (cartDetails.products[i]._id === targetId) {
            idExists = true;

           
            break;
          }
        }

        if (!idExists) {
            dispatch(
                addProducts({...item, quantity})
            )
        }
        

       
    }




    // console.log(cartDetails)

    



  return (
    <>
    { item?.inStock && <div className=' flex-1 flex m-5 min-w-[100px] h-[150px] md:min-w-[200px]  md:h-[300px] rounded-md bg-white md:bg-white relative items-center justify-center'>
        {/* <div className=' w-20 h-20 md:w-52 md:h-52 rounded-full shadow-xl shadow-orange-400/40 bg-white/30 absolute' /> */}
            
        {/* </div> */}
        <div className=' max-h-24 md:max-h-72 overflow-hidden object-cover z-10'>
                    <img src={item.img} alt='' className='' />
        </div>
        <div className=' w-full h-full rounded-md absolute bg-gray-700/20 z-20 opacity-0 hover:opacity-100 transition ease-in duration-300  top-0 left-0 flex items-center justify-center '>
            <div onClick={handleClick} className=' h-6 w-6 md:w-10 md:h-10 bg-white rounded-full flex items-center  justify-center m-1 hover:bg-[#e9f5f5] hover:transform hover:scale-125  transition ease-in-out duration-500'>
                <ShoppingCartOutlined fontSize='small' />
            </div>
            <Link to={`/product/${item._id}`}>
                <div className=' h-6 w-6 md:w-10 md:h-10 bg-white rounded-full flex items-center  justify-center m-1 hover:bg-[#e9f5f5] hover:transform hover:scale-125  transition ease-in-out duration-500'>
                    <SearchOutlined fontSize='small' />
                </div>
            </Link>
            
            <div className=' h-6 w-6 md:w-10 md:h-10 bg-white rounded-full flex items-center  justify-center m-1 hover:bg-[#e9f5f5] hover:transform hover:scale-125  transition ease-in-out duration-500'>
                <FavoriteBorderOutlined fontSize='small' />
            </div>
        </div>
    </div>}
    </>
  )
}

export default ProductItems