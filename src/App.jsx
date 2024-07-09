import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes,  Route} from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Home from './Home'
import Checkout from './Components/Checkout/Checkout'
import Successful from './Components/Successful/Successful'
import data from './data'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [text, setText] = useState('Add to Cart')

   
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
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
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
            console.log(newQuantity)
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
      <Route  path="/"
                   element={<Home addToCart={addToCart} text={text} setText={setText} />}/>
      <Route path='/cart' element={<Cart handleRemove={handleRemove} cartItems={cartItems} setCartItems={setCartItems} updateQty={updateQty}/>}/>
      <Route path='/checkout' element={<Checkout handleRemove={handleRemove} cartItems={cartItems}/>}/>
      <Route path='/successful' element={<Successful/>}/>

    

     </Routes>

 
     
    </>
  )
}

export default App
