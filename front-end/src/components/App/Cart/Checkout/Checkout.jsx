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
                <div className='value'>10</div>
              </div>
              <div className='item tax'>
                <label>Subtotal</label>
                <div className='value'>10</div>
              </div>
              <div className='item discount'>
                <label>Subtotal</label>
                <div className='value'>10</div>
              </div>
              <div className='item total'>
                <label>Subtotal</label>
                <div className='value'>10</div>
              </div>
            </div>
          </div>
        );
    }
}
