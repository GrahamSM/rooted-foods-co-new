import React, {Component} from 'react';
import styles from './main_page_body.scss';
import FeaturedProductContainer from './FeaturedProducts/FeaturedProductContainer.jsx'
import MainBanner from './MainBanner/MainBanner.jsx';
import Reqwest from 'reqwest';


export default class MainPageBody extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='main-page-body'>
                <MainBanner/>
                <div className='featured-product-header'>Featured Products</div>
                {/*<div className='featured-product-container'>*/}
                    <FeaturedProductContainer getTopProducts={this._getTopProducts}/>
                    {/*<FeaturedProductDisplay/>
                    <FeaturedProductDisplay/>
                    <FeaturedProductDisplay/>
                    <FeaturedProductDisplay/>*/}
                {/*</div>*/}
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
      }).catch((error) => {
          alert(error.message);
      })
    }
}
