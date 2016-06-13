import React, { Component } from 'react';
import styles from './featured_product_display.css';

export default class FeaturedProductDisplay extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className = 'featured_product'>
        <div className='product-image'>
          <img src="http://st2.depositphotos.com/4216129/10705/v/950/depositphotos_107051218-Random-placed-leaves-surrounding-text.jpg" alt="Smiley face" height="100%" width="100%"></img>
        </div>
      </div>
    );
  }
}
