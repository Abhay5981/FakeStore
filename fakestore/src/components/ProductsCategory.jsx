import React, { useEffect, useState } from 'react'

const ProductsCategory = ({onChange}) => {
    const [productCategory, setProductCategory] = useState([]); 
    const [category, setCategoty] = useState([])
    // const [clickedValue, setClickedValue] = useState([]);

    useEffect(() => {
        const fetchCat = async() => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setProductCategory(data)
            } catch (error) {
                console.log('Error occured while fetching all categories ${error}')
            }
        }
        fetchCat();
    },[])

    const handleClick = (category) => {
        onChange(category);
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 m-10 p-6 border-b-4'>
        {productCategory.map(category => (
            <div key={category} className='border shadow-md p-4 text-center cursor-pointer' onClick={() => handleClick(category)}>
                <h1 >{category}</h1>
            </div>
            
        ))}
    </div>
  )
}

export default ProductsCategory
