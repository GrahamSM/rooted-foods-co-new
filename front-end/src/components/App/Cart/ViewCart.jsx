import React, {Component} from 'react';
import styles from './view_cart.scss';
import {Link} from "react-router";
import CartItem from './CartItem/CartItem.jsx';
import CartHead from './CartHead/CartHead.jsx';
import Reqwest from 'reqwest';
import Checkout from './Checkout/Checkout.jsx';

export default class ViewCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      // TODO: Method to return all items in users cart, and map those items to a CartItem component
        return (
          <div className="cart-page-wrapper">
            <CartHead />
            {this._setCartComp()}
            {this._setCartTotal()}>
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

    // TODO: CLEAN THIS UP
    _setCartComp(){
      if(this.state.loading){
        // wait
      }else{
        let items = []
        for (var i = 0; i < this.state.cart_items.length; i++){
          let quantity = this.state.cart_items[i].quantity
          items.push(<CartItem quantity={quantity} name={this.state.cart_items[i].product.name} price={this.state.cart_items[i].product.price} image={this.state.cart_items[i].product.images} key={this.state.cart_items[i].id} />)
        }
        return items;
      }
    }

    _setCartTotal(){
      if(this.state.loading){
      }else{
        return <Checkout total={this.state.totalCost} />
      }
    }
}
