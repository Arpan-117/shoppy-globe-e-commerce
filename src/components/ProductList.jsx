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

  // const handleViewDetails = (productId) => {
  //   navigate(`product-details/${productId}`);
  // }

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className='text-center md:text-3xl text-[#096B68] font-semibold md:py-4'>Choose from a wide variety of products...</h2>

      <div className='text-center md:py-4'>
        <input type="text"
          name="search"
          value={searchValue}
          placeholder="Search by product name or brand..."
          className='border border-[#096B68] rounded-md md:w-80 md:py-2'
          onChange={(e) => setSearchValue(e.target.value)} />
        <span className='px-4'>
          <button onClick={handleSearch} className='bg-[#096B68] text-[#FAF9F6] md:font-semibold rounded-md md:px-4 md:py-2 hover:scale-105'>Find</button>
        </span>
      </div>

      <div className='md:pt-4'>
        <ul className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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