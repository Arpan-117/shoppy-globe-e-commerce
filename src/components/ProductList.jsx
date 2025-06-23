import React from 'react'
import useProducts from '../utils/useProducts'

function ProductList() {

  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.title}</strong>: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList