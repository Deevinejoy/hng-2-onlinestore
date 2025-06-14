import React from 'react'
import {Link} from 'react-router-dom'
import { useParams} from 'react-router';
import "./ProductPage.css"


const ProductPage = ({ addToCart, products, setIsAdded, isAdded}) => {
   
    const { id } = useParams();
    const product = products.find(product=> (product.id) === parseInt(id));
 
  return (
    <div>
           
     <nav className='container-fluid naav'>
        <div  className='naav-logo'>
          <img src='/logo.png' alt='logo'/>
          <p>Craft</p>

        </div>

        <ul className='naavbar-lists'>
        <li><a href='/'>Home</a></li>
          <li><a href='./#footer'>Contact Us</a></li>
          <li><a href='./#products'>Shop</a></li>
          <li><a href='./#footer'>About</a></li>
        </ul>
        
        <div className='naavbar-right'>
         
          <div className='naavbar-icon'>
           
          <Link to='/cart'><img src='/cart.svg' alt='cart' /></Link>
          <Link to='/' className='hamburger'><img src='/hamburger.svg'/></Link>
            <div className='group'><img src='/user.svg' alt='cart'/></div>
          </div>
        

        </div>
      

      </nav>
      <div className='products-page'>

        {product &&
        <section className='product-page'>
        <div className='product-img'>
            <img src={product.images[0]} alt={product.title} />
            <p className='product-name'>{product.title}</p>
        </div>
       
       
        <div className='product-listings'>
           <p className='product-listing-des'>{product.description}</p>
           <div className='product-listing'>
            <p className='product-price'>${product.price}</p>
            <button onClick={()=> addToCart (product)}>
                { isAdded===true ? <p>Added</p>: <p>Add to cart</p> }
            </button>
           </div>
          
           
        </div>
        </section>
        }
        {!product &&
        <section>
            no products

        </section>

        }



      </div>
    
      
    </div>
  )
}

export default ProductPage

