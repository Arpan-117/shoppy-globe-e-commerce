import React from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import CartItem from './CartItem'

function Cart() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => (store.cart.items));

  const totalPrice = parseFloat((cartItems.reduce((acc, item) => acc+item.price*item.quantity, 0)).toFixed(2));
  const totalTax = parseFloat((totalPrice * (12 / 100)).toFixed(2));
  const totalCost = totalPrice + totalTax;
  let totalItems;
  if (cartItems.length > 0) {
  totalItems = cartItems.map(item => item.quantity).reduce((acc, quantity) => acc+quantity);
  }
  // console.log(tp);

  const handleCheckout = () => {
    alert('Cannot proceed ahead! Website still in development!');
  }

  return (
    <div className='lg:px-16 lg:py-8'>
    <div className='md:px-4 md:py-4'>
      <h3 className='text-center md:text-3xl text-[#096B68] font-semibold md:py-4'>Your Cart</h3>

      <div className='md:flex md:pt-16 md:pb-8 gap-4'>
        <div className='md:basis-2/3'>
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </ul>
        </div>

        <div className='md:basis-1/3'>
          <h4 className='text-center font-semibold text-xl text-[#129990]'>PRICE DETAILS</h4>
          <br />

          <div className='flex flex-row px-4'>

            <div className='basis-1/2'>
              <p className='py-2'>Price({totalItems} items):</p>
              <p className='py-2'>Tax(12%):</p>
              <hr/>
              <p className='py-2 font-semibold text-lg'>Total Amount</p>
            </div>

            <div className='basis-1/2 text-right'>
              <p className='py-2'>${totalPrice}</p>
              <p className='py-2'>${totalTax}</p>
              <hr/>
              <p className='py-2 font-semibold text-lg'>${totalCost}</p>
            </div>

          </div>

          <div className='text-center py-2'>
          <button onClick={handleCheckout} className='px-4 py-2 rounded-md bg-[#129990] font-semibold text-[#FFFBDE] shadow-xl/30 hover:scale-105'>Proceed to Checkout</button>
          </div>

        </div>

      </div>

      {/* {console.log(totalPrice)} */}
      <button onClick={() => dispatch(clearCart())} className='px-4 py-2 rounded-md border-2 border-[#129990] font-semibold text-[#129990] shadow-xl hover:scale-105'>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart