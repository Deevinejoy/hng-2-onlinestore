import React from 'react'
import "./Products.css"



const Products = ({data, addToCart, text}) => {
   
  return (
    <div id='products' className='products-sect'>
       <h3>Our Product</h3>
       <div className=' row products'>
        {data.map((product)=>
            
            <div  className='product col-xl-3 col-lg-3 col-md-2 col-sm-1' key={product.id}>
                <img src={product.image} alt='furniture'/>
                
                
                <p className='product-des'>{product.des}</p>
                <div className='product-price-n-cart'>
                    <button onClick={()=> addToCart(product)}><p>{text}</p></button>
                    <p className='price'>₦{Number((product.price)).toLocaleString()}</p>

                </div>
            
            </div>
        )}
       </div>
      
    </div>
  )
}

export default Products
