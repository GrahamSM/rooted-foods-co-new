import React, {Component} from 'react';
import styles from './main_page_body.scss';
import FeaturedProductContainer from './FeaturedProducts/FeaturedProductContainer.jsx'
import MainBanner from './MainBanner/MainBanner.jsx';
import Reqwest from 'reqwest';
var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);


export default class MainPageBody extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };
    constructor() {
      super();
    }

    render() {
      return (
        <div className='main-page-body'>
          <MainBanner getAllProducts={this._getAllProducts}/>
          <div className='featured-product-header'>Featured Bundles</div>
          <FeaturedProductContainer getTopProducts={this._getTopProducts} />
        </div>
      );
    }

    _getTopProducts = () => {
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

    _getAllProducts = () => {
      const {router} = this.context
      router.push('products')
    }
}
