import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Products from './components/Products'
import ProductsCategory from  './components/ProductsCategory'

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
   

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data)
                setFilteredProducts(data)
            } catch (error) {
                console.log(`Error occured while fetching all products ${error}`)
            }
        }
        fetchData();
    }, [])

    const handleCategoryChange = (category) => {
      if (category === '') {
        setFilteredProducts(products)
      } else {
        setFilteredProducts(products.filter(product => product.category === category))
      }
    } 
  return (
    <> 
      <Navbar />
      <ProductsCategory onChange={handleCategoryChange}/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
