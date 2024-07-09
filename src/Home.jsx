import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'
import About from './Components/About/About'
import data from './data'
import { BrowserRouter, Routes,  Route} from 'react-router-dom'

const Home = ({cartItems, setCartItems, addToCart, text, setText}) => {
    
   
  return (
    <div>
        <Navbar/>
        <Products  data={data} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} text={text} setText={setText} />
        <About/>
        <Footer/>
        

        
        
        
        
        

      
    </div>
  )
}

export default Home
