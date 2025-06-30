import React, { useEffect, useState } from 'react'
import useProducts from '../utils/useProducts'
import { useParams, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';

function ProductDetail() {
  const [product, setProduct] = useState(null);

  const productId = useParams();
  const navigate = useNavigate();
  // console.log(productId);
  // const fetchURL = `https://dummyjson.com/products/${productId.productId}`;
  const { data, loading, error } = useProducts(productId.productId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  }

  // console.log(data);

    if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Product Details</h3>

      <div>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <img src={product.thumbnail} alt='image' />
      </div>
      <div className=''>
        <div className=''>
          <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail