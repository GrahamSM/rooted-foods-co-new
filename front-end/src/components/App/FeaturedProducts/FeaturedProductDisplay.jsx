import React, { Component } from 'react';
import styles from './featured_product_display.scss';

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
        <div class="box-content">
    			<a class="buy" href="javascript:void(0)"><span className='cart-icon'><i class="fa fa-cart-plus"></i></span></a>
			    <div class="title">Chili Papers</div>
			    <div class="desc">Lorem ipsum dolor sit amet.</div>
			    <span class="price">5.67$</span>
        </div>
      </div>
    );
  }
}
