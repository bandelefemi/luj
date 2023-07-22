import { Clear } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../redux/cartRedux'
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3"
// import { publicRequest, userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom'


const Cart = () => {


    const dispatch = useDispatch()

    const [showCart, setShowCart] = useState(true)
    // const [token, setToken] = useState(null)
    const navigate = useNavigate()
    const name = "david f"
    const phone = "08136626559"
    const email = "femzyd@gmail.com"

    // const location = useLocation()


    // console.log(location)



// function to close cart

    const handleClick =()=> {
        setShowCart(false)
        dispatch(
            toggleCart({showCart})
        )
    }


    const seeCart = useSelector( state => state.cart.showCart)
    const cartDetails = useSelector(state => state.cart)

    // console.log(navigate)

// handle flutterwave payment

const config = {
    public_key: "FLWPUBK_TEST-da8831bd6bb8af3cc7d5d27e624488c5-X",
    tx_ref: Date.now(),
    amount: cartDetails.total,
    currency: "NGN",
    meta: {
        cartObject: {cartDetails}
    },
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "LUJ Checkout",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
}


const handleFlutterPayment = useFlutterwave(config)



// create order after payment
// useEffect(()=> {

//     const addOrder = async ()=>{
//         try {
//             const res = await userRequest.post("/order/", {
//                 userId: "0000",
//                 products: [
//                     {
//                         productId: cartDetails._id,
//                         quantity: 1
//                     }
//                 ],
//                 amount: cartDetails.total * 800,
//                 address: ["Lugbe, Abuja"]
//             })
//         } catch{}
//     }
//     addOrder()

// }, [token])


  return (

    <div className=''>

    { seeCart &&
    <div className={`animate-fade bg-black/50 z-30 w-full fixed top-0 right-0`}>
        <div className={`animate-fade  float-right p-5 h-screen bg-zinc-50 w-[60%] md:w-[40%]`}>
            <div onClick={handleClick} className=' fixed top-5 right-5 cursor-pointer'>
                <Clear color='' />
            </div>
            <p className=' text-sm mt-5 font-semibold mb-5'>
                    Shopping Cart
                </p>
            <div className='flex flex-col items-center overflow-x-hidden max-h-[50%]'>
                

                {cartDetails.products.map(item => (
                   

                    <div key={item._id} className=' flex p-4 mt-5 border-b border-blue-950/20 rounded-lg'>
                        <div className='w-1/4 h-full p-2 overflow-hidden flex '>
                            <img className='' src={item.img} alt="" />
                        </div>
                        <div className="w-1/2 py-1 px-2 flex flex-col justify-between">
                            <p className=" text-[0.6rem] mb-1 capitalize font-light">{item.title.slice(0, 20)}...</p>
                            <p className=" text-[0.6rem] uppercase font-semibold">{item.brand}</p>
                            <p className="text-xs font-extralight">1
                            </p>
                        </div>
                        <div className='w-1/4 py-1 flex flex-col justify-between text-right'>
                            <p className=' font-extralight'>{item.price}</p>
                            <p className=' uppercase text-xs'>remove</p>
                        </div>
                    </div>

                ))}

        
            </div>
            <div className=' w-full flex mt-8 flex-col items-center'>
                <p className=' text-sm font-semibold'>Total: <span className=' font-light'>{cartDetails.total}</span></p>
                <p className="text-xs text-center mt-5">
                    Sign up for 10% off your first order
                </p>
                <button  
                    onClick={()=> {
                        handleFlutterPayment({
                            callback: (res)=> {
                                console.log(res)
                                if(res.status === "successful"){
                                   navigate("/success", {
                                    state: {
                                        flwData: res,
                                        products: cartDetails
                                       }
                                   } ) 
                                }
                                closePaymentModal()
                            }
                        })
                    }}
                    className=' text-[0.6rem] shadow-md uppercase bg-transparent mt-5 py-1 px-5 transform hover:text-white hover:bg-yellow-800/70 ease-in duration-500 hover:scale-110'>
                    continue to checkout
                </button>
            </div>
            
        </div>
    </div>
}

    </div>
  )
}

export default Cart