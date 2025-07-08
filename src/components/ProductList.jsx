import React, { useEffect, useState } from 'react'
import useProducts from '../utils/useProducts'
// import { useNavigate } from 'react-router'
import ProductItem from './ProductItem';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const { data, loading, error } = useProducts();

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
      setFilteredProducts(data.products);
    }
  }, [data]);

  // console.log(data);
  // console.log(products);

  // const navigate = useNavigate();

  const handleSearch = () => {
    const items = products.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase()) || product.brand?.toLowerCase().includes(searchValue.toLowerCase())
    });
    setFilteredProducts(items);
  }

  const handleClear = () => {
    setSearchValue('');
    setFilteredProducts(products);
  }

  // const handleViewDetails = (productId) => {
  //   navigate(`product-details/${productId}`);
  // }

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className='text-center text-2xl md:text-3xl text-[#096B68] font-semibold py-4'>Choose from a wide variety of products...</h2>

      <div className='text-center py-4'>
        <input type="text"
          name="search"
          value={searchValue}
          placeholder="Search by product name or brand..."
          className='border border-[#096B68] rounded-md w-full md:w-80 md:py-2'
          onChange={(e) => setSearchValue(e.target.value)} />
          <div className='block py-4 md:py-0 md:inline'>
        <span className='px-4'>
          <button onClick={handleSearch} className='border-2 border-[#096B68] bg-[#096B68] text-[#FAF9F6] md:font-semibold rounded-md px-4 py-1 md:py-2 shadow-xl/30 hover:scale-105'>Find</button>
        </span>
        <span className=''>
          <button onClick={handleClear} className='border-2 border-[#096B68] text-[#096B68] md:font-semibold rounded-md px-4 py-1 md:py-2 shadow-xl/30 hover:scale-105'>Clear</button>
        </span>
        </div>
      </div>

      <div className='py-4'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProducts.map(product => (
            <li key={product.id} className='rounded-md shadow-xl/20 bg-white hover:scale-105'>

              <ProductItem item={product} />
              {/* <strong>{product.title}</strong>: ${product.price}
              <br />
              <button onClick={() => handleViewDetails(product.id)}>View Details</button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductList