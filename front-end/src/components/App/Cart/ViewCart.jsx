import React, {Component} from 'react';
import styles from './view_cart.scss';
import {Link} from "react-router";
import CartItem from './CartItem/CartItem.jsx';
import CartHead from './CartHead/CartHead.jsx';
import Reqwest from 'reqwest';

export default class ViewCart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
      this.setState({loading: true})
      this._getUserProducts()
      .then((response) => {
          debugger;
      })
      .catch((error) => {
        debugger;
      })
    }

    _getUserProducts = () => {
        //TODO: Make reqwest, return JSON with products
        if (localStorage.access_token){
          let token = localStorage.access_token
        return Reqwest({
            url: "http://localhost:3000/users/get_products",
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            headers: {
                'X-ACCESS-TOKEN': token
            },
        }).then(response => {
          return response
          // TODO: Use toaster
        }).catch((error) => {
            alert(error.message);
            // TODO: Use toaster
        })
      }
    }

    render() {
      // TODO: Method to return all items in users cart, and map those items to a CartItem component
        return (
          <div className="cart-page-wrapper">
            <CartHead />
            <CartItem name={"Tomatoes"} quantity={'3'} price={'2'} total={'6'} />
            <CartItem name={"Cherries"} quantity={'5'} price={'3'} total={'15'} />
            <CartItem name={"Name"} quantity={'Quantity'} price={'Price'} total={'Total'} />
            <CartItem name={"Name"} quantity={'Quantity'} price={'Price'} total={'Total'} />
          </div>
        );
    }
}
