import React from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const Products = ({ products, addToCart, setIsAdded }) => {

  
   
  return (
    <div id='products' className='products-sect'>
       <h3>Our Product</h3>
       <div className=' row products'>
        {products.map((product)=>
            
            <div  className='product col-xl-3 col-lg-3 col-md-2 col-sm-1' key={product.id}>
              <Link to = {`product/${product.id}`}>
              <img src={product.images[0]} alt={product.title}/>
                
                
                <p className='product-des'>{product.title}</p>
                <div className='product-price-n-cart'>
                   
                    <p className='price'>${product.price}</p>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => {
                        addToCart(product);
                        setIsAdded(true);
                      }}
                    >
                      Add to Cart
                    </button>
                </div>
              </Link>
               
            
            </div>
        )}
       </div>
       
      
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  setIsAdded: PropTypes.func.isRequired
};

export default Products
