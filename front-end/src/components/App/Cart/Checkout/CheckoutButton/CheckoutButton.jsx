import React, {Component} from 'react';
import styles from './checkout_button.scss';

export default class CheckoutButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      return(
        <button className='checkout-btn'>Checkout</button>
      )
    }
}
