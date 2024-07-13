import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'
import About from './Components/About/About'
import data from './data'
import { BrowserRouter, Routes,  Route} from 'react-router-dom'
import Pagination from './Components/Pagination/Pagination'



const Home = ({ currentPage, setCurrentPage, products, setProducts}) => {
    
   
  return (
    <div>
        <Navbar/>
        <Products products={products} setProducts={setProducts} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <About/>
      
     
        <Footer/>
        

        
        
        
        
        

      
    </div>
  )
}

export default Home
