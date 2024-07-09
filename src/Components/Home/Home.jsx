import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div id='home' className='home-sect'>
     <p className='home-title'>CRAFTED FOR COMFORT, DESIGNED FOR LIFE</p>
     <p className='home-des'>Experience the perfect harmony of craftmanship and modern design.</p>
     <div className="home-select">
      <select id="furniture-select" name="furniture" >
                      <option value="" disabled selected>All Furniture</option>
                      <option value="livng room Furniture">Living room furniture</option>
                      <option value="Dining room Furniture">Dining room Furniture</option>
                      <option value="Bedroom Furniture">Bedroom Furniture</option>
                      <option value="Office Furniture">Office Furniture</option>
                      <option value="Outdoor Furniture">Outdoor Furniture</option>
                      
        </select>
     </div>
     <div className='home-button btn'>
      <button><p>All Furniture</p></button>
      <button><p>Living room Furniture</p></button>
      <button><p>Dining room Furniture</p></button>
      <button><p>Bedroom Furniture</p></button>
      <button><p>Office Furniture</p></button>
      <button><p>Outdoor Furniture</p></button>
      </div>
    </div>
   
  )
}

export default Home
