import React, {Component} from 'react';
import styles from './featured_product_display.scss';
import QuantitySelector from './QuantitySelector/QuantitySelector.jsx';
import Reqwest from 'reqwest';


export default class FeaturedProductDisplay extends React.Component {
  constructor(props) {
      super(props);
      this.state = {count: 1}
  }


  render() {
    return (
      <div className='featured_product'>
        <div className='product-image'>
          <img src={this.props.image} alt="Smiley face" height="100%" width="100%"></img>
        </div>
        <div className='product-content'>
          <button className="buy" onClick={ () => { this._addToCart(this.props.id, this.state.count) }}>
              <span className='cart-icon'>
                  <i className="fa fa-cart-plus"></i>
              </span>
          </button>
          <div className="title">{this.props.bundle_name}</div>
          <div className="desc">{this.props.bundle_description}</div>
          <span className="price">{this.props.price}</span>
        </div>
        <QuantitySelector count={this.state.count} incrementValue={this._incrementValue} decrementValue={this._decrementValue}/>
      </div>
    );
  }

  _addToCart = (id, quantity) => {
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
        data: JSON.stringify({token: token, id: id, quantity: quantity})
      }).then(response => {
        // TODO: USE TOASTER!
      }).catch((error) => {

      })
    }
  }

  _incrementValue = () => {
    this.setState({count: (this.state.count+1)})
  }

  _decrementValue = () => {
    this.setState({count: (this.state.count-1)})
  }

}
