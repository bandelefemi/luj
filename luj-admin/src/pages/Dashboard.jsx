import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Sidebar from '../components/sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import UserList from './userList/UserList'
import User from './user/User'
import NewUser from './newUser/NewUser'
import ProductList from './productList/ProductList'
import Product from './product/Product'
import NewProduct from './newProduct/NewProduct'
import Home from './home/Home'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div style={{position: 'sticky'}}>
        <Topbar/>
        <div className='container'>
            <Sidebar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            
            <Route path="/user/:userId" element={<User />}/>
              
            <Route path="/newUser" element={<NewUser />}/>
              
            <Route path="/products" element={<ProductList />}/>
                   
            <Route path="/product/:productId" element={<Product />}/>
              
            <Route path="/newproduct" element={<NewProduct />}/>
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard