import React from 'react';
import styles from './cart_head.scss';

const CartHead = () => {

  return (
    <div className = 'cart-head-wrapper'>
        <div className = 'cart-head-title'>
          <h3>Shopping Cart</h3>
        </div>
        <div className='cart-head-name'>
          <em>Item Name</em>
        </div>
        <div className = "cart-head-quantity">
          <em>Quantity</em>
        </div>
        <div className = "cart-head-price">
          <em>Unit Price</em>
        </div>
        <div className = 'cart-head-total'>
          <em>Total</em>
        </div>
    </div>
  );
}

export default CartHead;
