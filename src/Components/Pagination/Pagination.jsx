import React from 'react'
import "./Pagination.css"
import { useState } from 'react'

const Pagination = ({setCurrentPage, currentPage}) => {
   
  
    
   
 
    let pages = []
    for(let i=1; i<= Math.ceil(30/10); i++){
        pages.push(i)
    }
  return (
    <div className='pagination'>

        <div className='pagination-lists'>
        { pages.map((page, index) =>{
            return <button className={page === currentPage? "active box": "box" } onClick={()=>setCurrentPage(page)  
              
            } key={index}>{page}</button>
        })}

        </div>
      

    </div>
  )
}

export default Pagination
