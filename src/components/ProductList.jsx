import React, { useEffect, useState } from 'react'
import useProducts from '../utils/useProducts'
import { useNavigate } from 'react-router'

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

  const navigate = useNavigate();

  const handleSearch = () => {
    const items = products.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase()) || product.brand?.toLowerCase().includes(searchValue.toLowerCase())
    });
    setFilteredProducts(items);
  }

  const handleViewDetails = (productId) => {
    navigate(`product-details/${productId}`);
  }

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>

      <div>
        <input type="text"
          name="search"
          value={searchValue}
          placeholder="Search using product name or brand..."
          onChange={(e) => setSearchValue(e.target.value)} />
        <button onClick={handleSearch}>Find</button>
      </div>

      <div className='pt-4'>
        <ul className='grid grid-cols-4 gap-4'>
          {filteredProducts.map(product => (
            <li key={product.id} className='border rounded'>
              <strong>{product.title}</strong>: ${product.price}
              <br />
              <button onClick={() => handleViewDetails(product.id)}>View Details</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductList