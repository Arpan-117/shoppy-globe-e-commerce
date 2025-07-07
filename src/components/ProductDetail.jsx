import React, { useEffect, useState } from 'react'
import useProducts from '../utils/useProducts'
import { useParams, useNavigate, Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

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
    <div className='lg:px-16 lg:py-8'>

      <div className='md:px-4 md:py-4'>
        <Link to='/'>
          <button className='border border-[#129990] text-[#129990] rounded-full hover:scale-105'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='px-2 size-8 inline'>
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path fill="#129990" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
          </button>
        </Link>

        <div className='md:flex md:py-16'>

          <div className='md:basis-1/3'>
            <img src={product.thumbnail} alt='image' />
            <div className='mx-auto'>
              <button onClick={() => handleAddToCart(product)} className='md:w-80 md:py-2 bg-[#129990] font-semibold text-[#FAF9F6] shadow-xl/20 hover:scale-105'>Add to Cart</button>
            </div>
          </div>

          <div className='md:basis-2/3'>
            <h3 className='font-bold text-3xl text-[#096B68] underline'>{product.title}</h3>
            <p className='text-sm'>Rating - {product.rating}⭐</p>
            <br />
            <div className='md:pt-2'>
              <p className='font-bold text-2xl md:py-4'>$ {product.price}</p>
              <h4 className='font-semibold text-2xl text-[#129990]'>Product Description</h4>
              <p className='md:py-2'>{product.description}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail