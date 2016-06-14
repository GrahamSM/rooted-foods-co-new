import React, {Component} from 'react';
import styles from './view_cart.scss';
import {Link} from "react-router";
import CartItem from './CartItem/CartItem.jsx'

export default class ViewCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <CartItem />
        );
    }
}
