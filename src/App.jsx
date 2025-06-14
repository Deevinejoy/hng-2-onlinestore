import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Home from './Home'
import Checkout from './Components/Checkout/Checkout'
import Successful from './Components/Successful/Successful'
import ProductPage from './Components/productPage/ProductPage'

function App() { 
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([])
  const [isAdded, setIsAdded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage] = useState(10)
  const [totalProducts, setTotalProducts] = useState(0)
  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;

  const getProducts = async()=>{
    try{
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${firstProductIndex}&limit=${productPerPage}`)
      setProducts(response.data)
      // Get total count for pagination
      const totalResponse = await axios.get('https://api.escuelajs.co/api/v1/products')
      setTotalProducts(totalResponse.data.length)
     
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getProducts()
  },[currentPage])
   
  const addToCart = (product) => {
  setCartItems((prevCart) => {
    const itemInCart = prevCart.find((item) => item.id === product.id);
    if (itemInCart) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prevCart, { ...product, quantity: 1 }];
  });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
    
  const handleRemove = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  
  const updateQty = (id, increment) => {
    setCartItems((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Routes>
      <Route exact path="*"
          element={
            <Home 
              addToCart={addToCart} 
              products={products} 
              setProducts={setProducts} 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              setIsAdded={setIsAdded}
              totalProducts={totalProducts}
              productPerPage={productPerPage}
              cartItems={cartItems}
            />
          }
        />
      <Route path='/cart' element={<Cart handleRemove={handleRemove} cartItems={cartItems} setCartItems={setCartItems} updateQty={updateQty}/>}/>
      <Route path='/checkout' element={<Checkout handleRemove={handleRemove} cartItems={cartItems}/>}/>
      <Route path='/successful' element={<Successful/>}/>
  <Route exact path="/product/:id"
          element={
            <ProductPage 
              products={products} 
              addToCart={addToCart} 
              setIsAdded={setIsAdded} 
              isAdded={isAdded}
            />
          }
        />
     </Routes>
    </>
  )
}

export default App
