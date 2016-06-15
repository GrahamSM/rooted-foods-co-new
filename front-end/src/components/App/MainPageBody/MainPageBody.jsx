import React, {Component} from 'react';
import styles from './main_page_body.scss';
import FeaturedProductContainer from './FeaturedProducts/FeaturedProductContainer.jsx'
import MainBanner from './MainBanner/MainBanner.jsx';
import Reqwest from 'reqwest';
var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);


export default class MainPageBody extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div className='main-page-body'>
          <MainBanner/>
          <div className='featured-product-header'>Featured Products</div>
          <FeaturedProductContainer getTopProducts={this._getTopProducts} addToCart={this._addToCart}/>
        </div>
      );
    }

    _getTopProducts = () => {
      //TODO: Make reqwest, return JSON with products
      return Reqwest({
          url: "http://localhost:3000/bundles/top_four",
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          headers: new Headers()
      }).then(response => {
        return response
        // TODO: Use toaster
      }).catch((error) => {
          alert(error.message);
          // TODO: Use toaster
      })
    }

    _addToCart = (id) => {
      let url = 'http://localhost:3000/orders'
      if (localStorage.access_token){
        let token = localStorage.access_token;
        return Reqwest({
          url: url,
          type: 'json',
          method: 'post',
          contentType: 'application/json',
          headers: {
              'X-ACCESS-TOKEN': token
          },
          data: JSON.stringify({token: token, id: id})
        }).then(response => {
          // TODO: USE TOASTER!
        }).catch((error) => {

        })
      }
    }
}
