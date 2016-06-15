import React, {Component} from 'react';
import styles from './cart_item.scss';
import {Link} from "react-router";

export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className = 'cart-item-wrapper'>
              <div className = 'cart-item-picture'>
                <img src={this.props.images} height="100%" width="100%" alt={this.props.title} Cart></img>
              </div>
              <div className='cart-item-name'>
                {this.props.name}
              </div>
              <div className = "cart-item-quantity">
                {this.props.quantity}
              </div>
              <div className = "cart-item-price">
              {this.props.price}
              </div>
              <div className = 'cart-item-total'>
                {this.props.total}
              </div>
          </div>
        );
    }
}
