import React, {Component} from 'react';
import styles from './featured_product_display.scss';
import QuantitySelector from './QuantitySelector.jsx';

export default class FeaturedProductDisplay extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className='featured_product'>
        <div className='product-image'>
          <img src={this.props.image} alt="Smiley face" height="100%" width="100%"></img>
        </div>
        <div className='product-content'>
          <button className="buy" onClick={ () => { this.props.addToCart(this.props.id) }}>
              <span className='cart-icon'>
                  <i className="fa fa-cart-plus"></i>
              </span>
          </button>
          <div className="title">{this.props.bundle_name}</div>
          <div className="desc">{this.props.bundle_description}</div>
          <span className="price">{this.props.price}</span>
        </div>
        <QuantitySelector />
      </div>
    );
  }
}
