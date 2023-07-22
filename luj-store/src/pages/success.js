import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { userRequest } from '../requestMethods'

const Success = () => {

  const location = useLocation()
  const data = location.state.flwData
  const cart = location.state.products
  const [orderId, setOrderId] = useState(null)


  const navigate = useNavigate()

  useEffect(()=> {

    const addOrder = async ()=>{
        try {
            const res = await userRequest.post("/order/", {
                userId: "0000",
                products: cart.products.map((item)=> ({
                  productId: item._id,
                  quantity: item.quantity
                })),
                amount: data.amount,
                address: ["Lugbe, Abuja"]
            })
            setOrderId(res.data._id)
        } catch{}
    }
    data && addOrder()

}, [cart, data])
    
  return (
   

        <div className="flex h-screen flex-col justify-center items-center bg-gray-50">
          <p className=' text-4xl capitalize font-bold text-green-700 mb-6'>
            order confirmed
          </p>
          <p>

          {
            orderId? <div className=' text-center'>
              <p className=' text-xl'>Your order is successfully created. your order id is <br /> 
              <span className=' font-bold text-green-900'>
              {orderId}
                </span></p>
            </div> :
            `Payment seccessful! your order is being prepared...`
          }
          </p>
          <button 
            className= 'bg-black text-white px-10 py-2 rounded-md mt-5'
            onClick={()=>navigate('/')}>
            Go to homepage
          </button>
        </div>
  
  )
}

export default Success