import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
// import {productData} from "../../dummyData"
import { Publish } from "@mui/icons-material";
import { useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from "../../firebase";
// import { addProduct, updateProducts } from "../../redux/apiCalls";
// import {useDispatch} from 'react-redux'
import { userRequest } from "../../requestMethods";

export default function Product() {

  const location = useLocation();
//   console.log('location.pathname:', location.pathname); // Add this line for debugging
  const productId = location.pathname.split("/")[2];
//   console.log('productId:', productId); // Add this line for debugging


  // Check if productId is a valid string before proceeding
  if (typeof productId !== 'string') {
    console.error('Invalid productId:', productId);
    // You might want to handle the error or redirect the user to an error page here
    // return <div>Invalid product ID</div>;
  }


  const productInfo = useSelector((state)=> 
    state.product?.products?.find((product)=> product._id === productId ));


   const navigate = useNavigate() 


  const [inputs, setInputs] = useState({})
//   const [file, setFile] = useState(null)
  const [cat, setCat] = useState([])
//   const dispatch = useDispatch()

  const handleChange =(e)=> {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    } )
  }

  const handleCat=(e)=> {
    setCat(e.target.value?.split(","))
  }

//   console.log(cat)


  const handleClick =(e)=> {
    e.preventDefault()
    const product = {...inputs, category: cat};
    const id = productId
    const updateProducts = async ()=> {
        const res = await userRequest.put(`/product/${id}`, product)
        // console.log(res.data)
    }
    updateProducts().then(

        navigate('/products')
    )

  }

    // console.log(product)
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productInfo} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={productInfo.img} alt="" className="productInfoImg" />
                  <span className="productName">{productInfo.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{productInfo._id.slice(0, 5)}...</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{productInfo.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input onChange={handleChange} type="text" name="title" placeholder={productInfo.title} />
                  <label>Product Description</label>
                  <input onChange={handleChange} type="text" name="description" placeholder={productInfo.description} />
                  <label>Categories</label>
                  <input onChange={handleCat} type="text" name="category" placeholder={productInfo.category} />
                  <label>Brand</label>
                  <input onChange={handleChange} type="text" name="brand" placeholder={productInfo.brand} />
                  <label>Price</label>
                  <input onChange={handleChange} type="number" name="price" placeholder={productInfo.price} />
                  <label>Size</label>
                  <input onChange={handleChange} type="number" name="size" placeholder={productInfo.size} />
                  <label>In Stock</label>
                  <select onChange={handleChange} name="inStock" id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={productInfo.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button onClick={handleClick} className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
