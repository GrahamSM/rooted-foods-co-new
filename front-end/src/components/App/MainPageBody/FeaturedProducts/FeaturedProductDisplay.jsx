import React, {Component} from 'react';
import styles from './featured_product_display.scss';

export default class FeaturedProductDisplay extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='featured_product'>
                <div className='product-image'>
                    <img src="http://www.funkystockphotos.com/paul-williams-picture-photo-art-gallery/Fine-Art-Photography-Food/Selective-Colour-Fine-Art-Food-Photos-750/Jubilee-2-Vine-Tomatoes-Photos-Pictures-Fotos-Images-70137.jpg" alt="Smiley face" height="100%" width="100%"></img>
                </div>
                <div className='product-content'>
                    <a className="buy" href="#">
                        <span className='cart-icon'>
                            <i className="fa fa-cart-plus"></i>
                        </span>
                    </a>
                    <div className="title">Product One</div>
                    <div className="desc">Lorem ipsum dolor sit amet.</div>
                    <span className="price">5.67$</span>
                </div>
            </div>
        );
    }
}
