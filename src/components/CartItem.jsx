import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItem } from '../utils/cartSlice'

function CartItem(props) {

  const dispatch = useDispatch();

  return (
    <div className='my-4 rounded-md shadow-xl bg-white'>
      <div className='flex flex-row w-full gap-6'>

        <div className='basis-1/3'>
          
          <img src={props.product.thumbnail} alt='product-image' />
        </div>

        {/* { console.log(props) }
      { console.log(props.product.quantity) } */}
        <div className='basis-2/3'>
          {/* props.product.quantity > 1 ? */}
            <div className='md:pt-4'>
              <h3 className='py-2 font-semibold text-xl text-[#129990] underline'>{props.product.title}</h3>
              <p className='md:py-4 font-semibold text-lg'>$ {props.product.price}</p>
              <div className='py-2'>
              <button onClick={() => dispatch(decreaseQuantity(props.product.id))} className='inline py-2 px-4 rounded-l-md  border-[#129990] bg-[#129990] font-semibold text-[#FFFBDE]'>-</button>
              <p className='inline py-2 px-4 border border-[#129990] font-semibold text-[#129990]'>{props.product.quantity}</p>
              <button onClick={() => dispatch(increaseQuantity(props.product.id))} className='inline py-2 px-4 rounded-r-md border-[#129990] bg-[#129990] font-semibold text-[#FFFBDE]'>+</button>
              </div>
              <button onClick={() => dispatch(removeItem(props.product.id))} className='px-4 py-2 rounded-md border-2 border-[#129990] font-semibold text-[#129990] hover:scale-105'>Remove</button>
            </div> 
            {/* : */}
            {/* <div>
              <button onClick={() => dispatch(removeItem(props.product.id))}>Remove from Cart</button>
            </div> */}
            {/* } */}
        </div>

      </div>
    </div>
  )
}

export default CartItem