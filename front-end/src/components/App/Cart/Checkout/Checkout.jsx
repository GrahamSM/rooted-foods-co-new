import React, {Component} from 'react';
import styles from './checkout.scss';
import {Link} from 'react-router';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className = 'checkout-item-wrapper'>
            <div className='checkout-box'>
              <div className='item subtotal'>
                <label>Subtotal</label>
                <div className='value'>{this.props.subtotal}</div>
              </div>
              <div className='item discount'>
                <label>Tax</label>
                <div className='value'>15%</div>
              </div>
              <div className='item total'>
                <label>Total</label>
                <div className='value'>{this.props.total}</div>
              </div>
            </div>
          </div>
        );
    }
}
