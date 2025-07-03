import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItem } from '../utils/cartSlice'

function CartItem(props) {

  const dispatch = useDispatch();

  return (
    <div>
      <h3>{props.product.title}</h3>
      <img src={props.product.thumbnail} alt='product-image' />
      {/* { console.log(props) }
      { console.log(props.product.quantity) } */}
      { props.product.quantity > 1 ? 
      <div>
        <button onClick={() => dispatch(decreaseQuantity(props.product.id))}>-</button>
        <p>{props.product.quantity}</p>
        <button onClick={() => dispatch(increaseQuantity(props.product.id))}>+</button>
        <button onClick={() => dispatch(removeItem(props.product.id))}>Remove from cart</button>
      </div> : 
      <div>
        <button onClick={() => dispatch(removeItem(props.product.id))}>Remove from Cart</button>
      </div> }
    </div>
  )
}

export default CartItem