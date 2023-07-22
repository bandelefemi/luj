
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/products";
import Register from "./pages/register";
import { Routes, Navigate, Route} from "react-router-dom"
import Success from "./pages/success";
import { useSelector } from "react-redux";
import Contact from "./pages/contact";
// import Home from "./pages/home";


function App() {

  const user = useSelector((state)=> state.user.currentUser)

  // console.log(user)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user? <Navigate to={"/"} replace/> : <Login />} />
      <Route path="/register" element={user? <Navigate to={'/'} replace /> : <Register />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/success" element={<Success />} />
      <Route path="/contact" element={<Contact />} />



    </Routes>
  );
}

export default App;
