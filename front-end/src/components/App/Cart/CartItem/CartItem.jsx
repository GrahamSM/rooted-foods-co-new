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
              <img src="http://image.desk7.net/Cate%20Wallpapers/7230_1280x800.jpg" height="100%" width="100%"></img>
            </div>
            <div className = 'cart-item-order'>
              <div className = 'cart-item-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              </div>
              <div className = "cart-item-quantity">
                12
              </div>
              <div className = "cart-item-price">
              $23.99
              </div>
            </div>
            <div className = 'cart-item-total'>
            </div>
          </div>
        );
    }
}
