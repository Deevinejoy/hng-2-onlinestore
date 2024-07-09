import React from 'react'
import { Link } from 'react-router-dom'
import './Successful.css'

const Successful = () => {
  return (
    <div >
        
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
           
          <Link to='/cart'><img src='cart.png' alt='cart' /></Link>
          <Link to='/' className='hamburger'><img src='hamburger.png'/></Link>
            <div className='group'><img src='Group.png' alt='cart'/></div>
          </div>
        

        </div>
      

      </nav>
      <div className='successful'>
      <div className='successful-title'>
            <h2>Payment Successful</h2>
            <p>Thank you for you purchase</p>
        </div>
       
        <div className='checkmark'>
            <img src='checkmark.png' alt='checkmark'/>
        </div>
        <div className='successful-lists'>
            <ul>
                <li>Order Number:</li>
                <li>Order date:</li>
                <li>Name:</li>
                <li>Address:</li>
                <li>Email:</li>
                <li>Phone:</li>
                </ul>
            <ul>
                <li>#1164937637</li>
                <li>05-07-2024</li>
                <li>Guy Hawkins</li>
                <li>3517 W. Gray St.Utica, Pennysylvania 57867</li>
                <li>guy.hawkins@example.com</li>
                <li>(307) 555-0133</li>
            </ul>
          
        </div>
        <Link to='/'>
            <button className='continue'>
                <p>Continue Shopping</p>
            </button>
        </Link>
        <div className='help'>
            <h3>Need Help?</h3>
            <p className='support'>If you have any questions about your order, please contact our customer support team at:</p>
            <p>(808) 555-0111 craft@services.net</p>
      </div>
       
       
      </div>
    
    </div>
  )
}

export default Successful
