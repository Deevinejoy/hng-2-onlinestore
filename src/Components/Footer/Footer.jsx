import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer' className='footer-sect'>
      <div className='contact-logo'>
        <img src='logo.png'/>
        <h2>Craft</h2>
      </div>
      <div className='contact'>
       
        <ul >
          <li>Shop</li>
          <li>Delivery & Return</li>
          <li>Wholesale</li>
          <li>About</li>
          <li>Why choose us</li>
        </ul>
        <ul className='contact-three'>
          <li>Contact</li>
          <li>(808) 555-0111</li>
          <li>VCraft@service.net</li>
          <li>2715 Ash Dr San Jose, Soutrh Dakota 83475</li>

        </ul>


     
        
      <ul>
        <li>Socials</li>
        <li>Facebook</li>
        <li>X (Twitter)</li>
        <li>Instagram</li>
        <li>Whatsapp</li>
        <li>Tiktok</li>
      </ul>

      </div>
     
     <div className='copyright'>
      <p>©2024 - South Dakota. US All rights reserved.</p>
      <p>Privacy Policy</p>
     </div>

      
    </div>
  )
}

export default Footer
