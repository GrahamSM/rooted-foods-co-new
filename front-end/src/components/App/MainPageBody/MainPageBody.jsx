import React, { Component } from 'react';
import styles from './main_page_body.scss';
import FeaturedProductDisplay from './FeaturedProducts/FeaturedProductDisplay.jsx'
import MainBanner from './MainBanner/MainBanner.jsx';


export default class MainPageBody extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className = 'main-page-body'>
        <MainBanner />
        <div className = 'featured-product-header'>Featured Products</div>
        <div className='featured-product-container'>
          <FeaturedProductDisplay />
          <FeaturedProductDisplay />
          <FeaturedProductDisplay />
          <FeaturedProductDisplay />
        </div>
      </div>
    );
  }
}
