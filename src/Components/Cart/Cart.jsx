import React from 'react'
import './Cart.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Cart = ({cartItems, handleRemove, updateQty}) => {
  const [count, setCount] = useState(1)

 // const handleCount =(id, count)=>{
 //  let update = cartItems.map((item) => id === item.id ? item.price == item.price * count: item)
   
 //  setCartItems(update)
  // console.log(update) }
 // const [selectedQuantity, setSelectedQuantity] = useState(1);
 const totalPrice = cartItems.reduce((price, item)=>  parseInt(price + item.quantity * item.price), 0)


  
  //  const handleQuantityChange = (event) => {
     // setSelectedQuantity(parseInt(event.target.value));
  // };
 
  
  return (
    <>
    
      <nav className='container-fluid naav'>
        <div  className='naav-logo'>
          <img src='logo.png' alt='logo'/>
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
           
          <div  ><img src='cart.png' alt='cart' /></div>
          <Link to='/' className='hamburger'><img src='hamburger.png'/></Link>
            <div className='group'><img src='Group.png' alt='cart'/></div>
          </div>
        

        </div>
      

      </nav>
    
      
      <header className='cart-title'>
        <h2>Cart</h2>
      </header>
      {cartItems.length === 0 ? 
      <div className='no-item'>No item in your cart</div> :
        
      <div className='cart-body'>
      <div className='cart-items'> 
        {cartItems.map((product)=>
          <div key={product.id} className='cart-item'>
             <div className='cart-img'>
                <img src={product.image} alt="" />
              </div>

              <div className='cart-text'>
                <p className='cart-des'>{product.des}</p>
                <div className='cart-add'>
                  <div className='cart-counter'>
                  <button onClick={()=> updateQty(product.id, true)}>+
                  </button>
                  <p >{product.quantity}</p>
                  <button onClick={()=> updateQty(product.id, false)}>-
                  </button>
                  </div >
                  
                    <p className='cart-price purple'>₦{product.price * product.quantity}</p>
                </div>

              </div>
         
                <button className='remove-btn' onClick={()=> handleRemove(product.id)}><p>Remove</p></button>
             
          </div>
        )}
       
      </div>

      <div className='cart-summary'>
        <h3>Order Summary</h3>
        <div className='cart-total'>
          <ul><li>Sub total:</li>
          <li>Discount:</li>
          <li>Shipping Fee:</li>
          <li>Tax:</li>
          <li>Total:</li>
          </ul>
          <ul className='purple'><li>₦{totalPrice}</li>
          <li>5% off</li>
          <li>₦3000</li>
          <li>₦0</li>
          <li>₦{totalPrice *0.95 + 3000  }</li>
          </ul>
          
        </div>
        
       
        <Link to='/checkout'>
        <button className='cart-btn'><p>Proceed to checkout</p></button></Link>
       
      </div>
    
    </div>

      }


      
    </>
  
  )
}

export default Cart
