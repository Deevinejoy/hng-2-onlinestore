import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Routes,  Route} from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Home from './Home'
import Checkout from './Components/Checkout/Checkout'
import Successful from './Components/Successful/Successful'
import ProductPage from './Components/productPage/ProductPage'


function App() {
  
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([])
  const {isAdded, setIsAdded} = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage, setProductPerPage] = useState(10)
  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage

  const getProducts = async()=>{
    try{
      const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/?organization_id=de1e0624bf3640569f920ec0a05951df&reverse_sort=false&page=1&size=30&Appid=XSVDKIYVP1W877B&Apikey=e15a0b0a3fc84d2fb77917e9479f654c20240712192604335637')
      setProducts(response.data.items.slice(firstProductIndex,lastProductIndex))
     
    }catch(err){
      console.log(err)
    }
   
  }
  


  useEffect(()=>{
    getProducts()

  },[products])


   
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
  };
    
  
  const handleRemove = (product)=>{
    setCartItems((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === product) {
         item.id !== product
        } else {
          acc.push(item);
        
        }
        return acc;
        
      }, [])
    );

   

  }
  const updateQty = (id, count) => {
    setCartItems((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === id) {
          const newQuantity = count ? item.quantity + 1 : item.quantity - 1;
          if (newQuantity > 0) {
            acc.push({ ...item, quantity: newQuantity });
          }
        } else {
          acc.push(item);
         
        }
        return acc;
      }, [])
    );
  };
  

  return (
    <>
      <Routes>
      <Route exact path="*"
                   element={<Home addToCart={addToCart} products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} setIsAdded={setIsAdded}/>}/>
      <Route path='/cart' element={<Cart handleRemove={handleRemove} cartItems={cartItems} setCartItems={setCartItems} updateQty={updateQty}/>}/>
      <Route path='/checkout' element={<Checkout handleRemove={handleRemove} cartItems={cartItems}/>}/>
      <Route path='/successful' element={<Successful/>}/>
      
  
     
  <Route exact path="/product/:id"
    element={<ProductPage products={products} addToCart={addToCart} setIsAdded={setIsAdded} isAdded={isAdded}/>}>

  </Route>


    

     </Routes>

 
     
    </>
  )
}

export default App
