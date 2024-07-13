import React from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'





const Products = ({products}) => {

  
   
  return (
    <div id='products' className='products-sect'>
       <h3>Our Product</h3>
       <div className=' row products'>
        {products.map((product)=>
            
            <div  className='product col-xl-3 col-lg-3 col-md-2 col-sm-1' key={product.unique_id}>
              <Link to = {`product/${product.unique_id}`
              }>
              <img src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`} alt='furniture'/>
                
                
                <p className='product-des'>{product.name}</p>
                <div className='product-price-n-cart'>
                   
                    <p className='price'>₦{product.current_price[0]?.NGN[0]}</p>

                </div>
              </Link>
               
            
            </div>
        )}
       </div>
       
      
    </div>
  )
}

export default Products
