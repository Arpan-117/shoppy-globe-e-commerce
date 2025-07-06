import React from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import CartItem from './CartItem'

function Cart() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => (store.cart.items));

  const totalPrice = cartItems.reduce((acc, item) => acc+item.price*item.quantity, 0)
  // console.log(tp);

  return (
    <div>
      <h3>Cart</h3>

      <div>
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </ul>
      </div>

      <p>Cart Total: {totalPrice}</p>
      {/* {console.log(totalPrice)} */}
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  )
}

export default Cart