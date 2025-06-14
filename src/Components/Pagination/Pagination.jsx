import React from 'react'
import "./Pagination.css"
   
const Pagination = ({setCurrentPage, currentPage, totalProducts, productPerPage}) => {
 
    let pages = []
    const totalPages = Math.ceil(totalProducts/productPerPage)
    
    for(let i=1; i<= totalPages; i++){
        pages.push(i)
    }

    if (totalPages <= 1) return null;

  return (
    <div className='pagination'>
        <div className='pagination-lists'>
                {pages.map((page, index) => (
                    <button 
                        className={page === currentPage ? "active box" : "box"} 
                        onClick={() => setCurrentPage(page)} 
                        key={index}
                    >
                        {page}
                    </button>
                ))}
        </div>
    </div>
  )
}

export default Pagination
