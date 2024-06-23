
const Products = ({products})=> {

        if (products.length === 0) {return <div className="flex justify-center items-center">Loading...</div>}
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 m-10'>
            {products.map(product => (
            <div key={product.id} className='border shadow-md p-4'>
                <img src={product.image} alt={product.title} className='w-full h-64 object-contain'/>
                <h2 className=''>{product.title}</h2>
                <p>Price: <span className='font-bold '>${product.price}</span></p>
            </div>
            ))}
        
    </div>
    
  )
}

export default Products;
