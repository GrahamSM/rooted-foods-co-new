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
      this._updateCart()
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
            url: "http://localhost:3000/orders/" + token,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            headers: {
                'X-ACCESS-TOKEN': token
            },
        }).then((response) => {
          return response;
        }).catch((error) => {
            alert(error.message);
            // TODO: Use toaster
        })
      }
    }

    _setCartComp(){
      if (!this.state.loading){
        let items = []
        let order_items = this.state.order.order_items
        for (var i = 0; i < order_items.length; i++){
          let name = this.getName(order_items[i])
          let price = this.getCostOfItem(order_items[i])
          let image = this.getImageOfItem(order_items[i])
          items.push(<CartItem quantity={order_items[i].quantity} name={name} price={price} image={image} updateCart={this._updateCart} order_item_id={order_items[i].id} key={order_items[i].id} />)
        }
        return items;
      }
    }

    _updateCart = () =>{
      this.setState({loading: true})
      this._getUserProducts()
      .then((order) => {
        this.setState({order, loading: false})
        let totalCost = this.getTotalCost(order)
        this.setState({totalCost})
      })
      .catch((error) => {
        alert(error.messages);
        // TODO: Use toaster
      })
    }

    getTotalCost(order){
      let order_items = order.order_items
      let total_cost = 0
      for (var i = 0; i < order_items.length; i++){
        total_cost += this.getCostOfItem(order_items[i])
      }
      return total_cost
    }

    isBundle(order_item){
      return !(order_item.product_id)
    }

    getCostOfBundle(bundle){
      return parseInt(bundle.price)
    }

    getName(order_item){
      if (this.isBundle(order_item)){
        return "Bundle"
      } else{
        return order_item.product.name
      }
    }

    getCostOfItem(order_item){
      if (this.isBundle(order_item)){
        return this.getCostOfBundle(order_item.bundle)
      }
      else{
        return parseInt(order_item.product.price)
      }
    }

    getImageOfItem(order_item){
      if (this.isBundle(order_item)){
        return order_item.bundle.image
      }else{
        return order_item.product.images
      }
    }

    _setCartTotal(){
      if (!this.state.loading){
        return <Checkout total={this.state.totalCost*1.15} subtotal={this.state.totalCost} />
      }
    }
}
