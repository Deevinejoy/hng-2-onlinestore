import React from 'react'
import {Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = ({ cartItems }) => {
  const cartCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <header className='navbar'>
      <nav className='container-fluid nav'>
        <div className='nav-logo'>
          <img src='logo.png' alt='logo'/>
          <p>Craft</p>
        </div>

        <ul className='navbar-lists'>
          <li><a href='/'>Home</a></li>
          <li><a href='/#footer'>Contact Us</a></li>
          <li><a href='/#products'>Shop</a></li>
          <li><a href='/#footer'>About</a></li>
        </ul>
        
        <div className='navbar-right'>
        <div className='search-icon'>
            <img src='search.svg'/>
            </div>
          <form className='navbar-search'>
            <img src='search.svg'/>
            <input type='text' placeholder='search'/>
          </form>
          <div className='navbar-icon'>
            <Link to='/cart' className='cart-link'>
              <img src='cart.svg' alt='cart' />
              {cartCount > 0 && (
                <span className='cart-count'>{cartCount}</span>
              )}
            </Link>
            <p><img src='user.svg' alt='cart'/></p>
          </div>
        </div>
      </nav>
      </header>
  )
}

export default Navbar
