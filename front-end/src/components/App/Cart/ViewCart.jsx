import React, {Component} from 'react';
import styles from './view_cart.scss';
import {Link} from "react-router";
import CartItem from './CartItem/CartItem.jsx';
import CartHead from './CartHead/CartHead.jsx';
import Reqwest from 'reqwest';
import Checkout from './Checkout/Checkout.jsx';
import CheckoutButton from './Checkout/CheckoutButton/CheckoutButton.jsx';
import PaymentProcessing from './PaymentProcessing/PaymentProcessing.jsx'

export default class ViewCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checkout: false}
    }

    render() {
        return (
          <div className="cart-page-wrapper">
            {!this.state.checkout && this._renderCartHead()}
            {!this.state.checkout && this._setCartComp()}
            {!this.state.checkout && this._setCartTotal()}
            {!this.state.checkout && this._renderCheckoutButton()}
            {this.state.checkout && <PaymentProcessing totalCost={this.state.totalCost}/>}
          </div>
        );
    }

    componentWillMount = () => {
      this.setState({loading: true})
      this._getUserProducts()
      .then((cart_items) => {
        this.setState({cart_items, loading: false})
        let totalCost = 0;
        for (var i = 0; i < cart_items.length; i++){
          totalCost += cart_items[i].quantity*cart_items[i].product.price
        }
        this.setState({totalCost})

      })
      .catch((error) => {
        alert(error.messages);
        // TODO: Use toaster
      })
    }

    _renderCartHead = () =>{
      return <CartHead />
    }

    _renderCheckoutButton = () =>{
      return <CheckoutButton toCheckout={this._toCheckout} />
    }

    _toCheckout = () =>{
      this.setState({checkout: true})
    }

    _getUserProducts = () => {
        if (localStorage.access_token){
          let token = localStorage.access_token
        return Reqwest({
            url: "http://localhost:3000/order_items",
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            headers: {
                'X-ACCESS-TOKEN': token
            },
        }).then(response => {
          return response;
          // TODO: Use toaster
        }).catch((error) => {
            alert(error.message);
            // TODO: Use toaster
        })
      }
    }

    _setCartComp(){
      if (!this.state.loading){
        let items = []
        for (var i = 0; i < this.state.cart_items.length; i++){
          let quantity = this.state.cart_items[i].quantity
          items.push(<CartItem quantity={quantity} name={this.state.cart_items[i].product.name} price={this.state.cart_items[i].product.price} image={this.state.cart_items[i].product.images} key={this.state.cart_items[i].id} />)
        }
        return items;
      }
    }

    _setCartTotal(){
      if (!this.state.loading){
        return <Checkout total={this.state.totalCost} />
      }
    }
}
