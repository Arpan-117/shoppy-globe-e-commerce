import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import CartItem from './CartItem'
import CartCalculation from './CartCalculation'

function Cart() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => (store.cart.items));

  // const totalPrice = parseFloat((cartItems.reduce((acc, item) => acc+item.price*item.quantity, 0)).toFixed(2));
  // const totalTax = parseFloat((totalPrice * (12 / 100)).toFixed(2));
  // const totalCost = totalPrice + totalTax;
  // let totalItems;
  // if (cartItems.length > 0) {
  // totalItems = cartItems.map(item => item.quantity).reduce((acc, quantity) => acc+quantity);
  // }
  // console.log(tp);

  // const handleCheckout = () => {
  //   alert('Cannot proceed ahead! Website still in development!');
  // }

  return (
    <div className='px-8 lg:px-16 py-16 lg:py-8'>
    { cartItems.length > 0 ? 
    <div className='md:px-4 lg:py-4'>
      <h3 className='text-center text-2xl md:text-3xl text-[#096B68] font-semibold py-4'>Your Cart</h3>

      <div className='md:flex md:pt-16 md:pb-8 gap-4'>
        <div className='md:basis-2/3'>
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </ul>
        </div>

        <div className='py-4 md:py-0 md:basis-1/3'>

          <CartCalculation />
          {/* <h4 className='text-center font-semibold text-xl text-[#129990]'>PRICE DETAILS</h4>
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

          </div> */}

          <div className='text-center py-2'>
            <Link to='/checkout'>
              <button className='px-4 py-2 rounded-md bg-[#129990] font-semibold text-[#FFFBDE] shadow-xl/30 hover:scale-105'>Proceed to Checkout</button>
            </Link>
          </div>

        </div>

      </div>

      {/* {console.log(totalPrice)} */}
      <button onClick={() => dispatch(clearCart())} className='px-4 py-2 rounded-md border-2 border-[#129990] font-semibold text-[#129990] shadow-xl hover:scale-105'>Clear Cart</button>
      </div>
      :
      <div className='px-4 py-4'>
        <h3 className='text-center text-2xl md:text-3xl text-[#096B68] font-semibold md:py-4'>Your Cart</h3>

        <div className='py-4'>
          <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2NtNWRnZHBxemQ0YW9lNW9uOXlyYXExbTV4aWd6b3JhODFlaGFzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ez1QgBv3LAzwcYiGDK/giphy.gif' alt='error-image' className='mx-auto w-70' />
        </div>
        <div className='text-center'>
          <p className='py-4 text-lg text-center'>Looks like you've forgotten to add items to your cart.</p>
          <Link to='/'>
            <button className='px-4 py-2 rounded-md bg-[#129990] font-semibold text-[#FFFBDE] shadow-xl/30 hover:scale-105'>Back to Homepage</button>
          </Link>
        </div>
      </div>
    }
    </div>
  )
}

export default Cart