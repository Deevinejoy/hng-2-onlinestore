import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'
import About from './Components/About/About'
import Pagination from './Components/Pagination/Pagination'
import PropTypes from 'prop-types'

const Home = ({ 
    addToCart, 
    products, 
    currentPage, 
    setCurrentPage, 
    setIsAdded,
    totalProducts,
    productPerPage,
    cartItems
}) => {
  return (
    <div className="home">
      <Navbar cartItems={cartItems}/>
      <Products 
        products={products} 
        addToCart={addToCart} 
        setIsAdded={setIsAdded} 
      />
      <Pagination 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
        totalProducts={totalProducts}
        productPerPage={productPerPage}
      />
      <About/>
      <Footer/>
    </div>
  )
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setIsAdded: PropTypes.func.isRequired,
  totalProducts: PropTypes.number.isRequired,
  productPerPage: PropTypes.number.isRequired,
  cartItems: PropTypes.array.isRequired
};

export default Home;
