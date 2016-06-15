import React, {Component} from 'react';
import styles from './featured_product_display.scss';

export default class FeaturedProductDisplay extends React.Component {
    constructor() {
        super();
    }
    render() {
      ///TODO: Retrieve products with parent function _getTopProducts
        return (
            <div className='featured_product' id={'product/'+this.props.id}>
                <div className='product-image'>
                    <img src={this.props.image} alt="Smiley face" height="100%" width="100%"></img>
                </div>
                <div className='product-content'>
                    <a className="buy" href="#">
                        <span className='cart-icon'>
                            <i className="fa fa-cart-plus"></i>
                        </span>
                    </a>
                    <div className="title">{this.props.bundle_name}</div>
                    <div className="desc">{this.props.bundle_description}</div>
                    <span className="price">{this.props.price}</span>
                </div>
            </div>
        );
    }
}
