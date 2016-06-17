import React, {Component} from 'react';
import styles from './cart_item.scss';
import {Link} from "react-router";
var Reqwest = require('reqwest');

export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className = 'cart-item-wrapper'>
              <div className = 'cart-item-picture'>
                <img src={this.props.image} height="100%" width="100%" alt={this.props.title} Cart></img>
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
              <div className = 'cart-item-remove'>
                <button className='delete-item' onClick={this._removeCartItem}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
          </div>
        );
    }

    _removeCartItem = () =>{
      let token = localStorage.access_token
      Reqwest({
          url: "http://localhost:3000/order_items/" + this.props.product_id,
          type: 'json',
          method: 'delete',
          contentType: 'application/json',
          headers: {
              'X-ACCESS-TOKEN': token
          },
      }).then(response => {
        // TODO: Use toaster
      }).catch((error) => {
          alert(error.message);
          // TODO: Use toaster
      })
    }
}
