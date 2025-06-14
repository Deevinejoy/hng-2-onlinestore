import { Link } from 'react-router-dom'
import "./Cart.css"
import PropTypes from 'prop-types'

const Cart = ({ cartItems, handleRemove, updateQty }) => {
  const total = cartItems?.reduce((total, item) => {
    return total + (item?.price || 0) * (item?.quantity || 0);
  }, 0) || 0;

  if (!cartItems || cartItems.length === 0) {
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
           
          <div><img src='cart.svg' alt='cart' /></div>
          <Link to='/' className='hamburger'><img src='hamburger.svg'/></Link>
            <div className='group'><img src='user.svg' alt='cart'/></div>
          </div>
        

        </div>
      

      </nav>
    
      
    

      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
      </>
    );
  }

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
           
          <div><img src='cart.svg' alt='cart' /></div>
          <Link to='/' className='hamburger'><img src='hamburger.svg'/></Link>
            <div className='group'><img src='user.svg' alt='cart'/></div>
          </div>
        

        </div>
      

      </nav>
    
      
      
      <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item?.id} className="cart-item">
            <div className="item-image">
              <img 
                src={item?.images?.[0] || 'placeholder-image.jpg'} 
                alt={item?.title || 'Product'} 
              />
            </div>
            <div className="item-details">
              <h3>{item?.title || 'Product'}</h3>
              <p className="price">${item?.price || 0}</p>
              <div className="quantity-controls">
                <button 
                  onClick={() => updateQty(item?.id, false)}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity">{item?.quantity || 0}</span>
                <button 
                  onClick={() => updateQty(item?.id, true)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>
            <button 
              onClick={() => handleRemove(item?.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
      <h3>Order Summary</h3>
        <div className='cart-total'>
          <ul>
          <li>Sub total:</li>
          <li>Discount:</li>
          <li>Shipping Fee:</li>
          <li>Tax:</li>
          <li className='bold'>Total:</li>
          </ul>
          <ul className='purple'><li>${total.toFixed(2)}</li>
          <li>5% off</li>
          <li>₦3,000</li>
          <li>₦0</li>
          <li className='bold'>${total.toFixed(2) *0.95 + 3000 }</li>
          </ul>
       
      
      </div>
      <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
      </div>
    </>
   
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  handleRemove: PropTypes.func.isRequired,
  updateQty: PropTypes.func.isRequired
};

export default Cart
