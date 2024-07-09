import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
        <section className='row  container-fluid about-sect'>
          <div className='about-text'>
            <p className='about-heading'>About Us</p>
            <p>We at Craft believe that your home should represent who you are. We're commited to giving you fashinalble, high-qualityfurniture so you can design rooms you love. Our carefully chosen collection are meant to uplift you livinv spaces making it cosy, useful, and visually stunny.</p>
          
          </div>
          <div className='about-img'>
            <img src='about.png' alt='furniture'/>
          </div>
     
        </section>
        <p className='about-form-text'>Discover the latest in Home Furnishings</p>
        <form className='about-form'>
          
      
        <input type='text' placeholder='Email address'/>
        <button>Subscribe</button>
       

        </form>
    
      

    </>
   
  
  )
}

export default About
