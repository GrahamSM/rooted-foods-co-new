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
      .then((cart_items) => {
        this.setState({cart_items, loading: false})
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
            url: "http://localhost:3000/users/get_products",
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
      if(this.state.loading){
      }else{
        return this.state.cart_items[0].products.map(
          ({id, name, price}) => <CartItem {...{name, price}} key={id}/>
        )
      }
    }

    render() {
      // TODO: Method to return all items in users cart, and map those items to a CartItem component
        return (
          <div className="cart-page-wrapper">
            <CartHead />
            {this._setCartComp()}
          </div>
        );
    }
}


// TODO: ORDER ITEM IN DB FOR QUANTITIES!
