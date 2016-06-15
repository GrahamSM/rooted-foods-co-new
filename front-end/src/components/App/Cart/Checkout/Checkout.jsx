import React, {Component} from 'react';
import styles from './checkout.scss';
import {Link} from "react-router";

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className = 'checkout-item-wrapper'>
              <div className = 'checkout-item-total'>
                Total
              </div>
          </div>
        );
    }
}
