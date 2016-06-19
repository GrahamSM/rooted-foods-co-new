import React, {Component} from 'react';
import styles from './individual_product.scss';
import ProductQuantitySelector from './ProductQuantitySelector/ProductQuantitySelector.jsx';
import Reqwest from 'reqwest';
import AlertContainer from 'react-alert';


export default class IndividualProduct extends React.Component {
    constructor() {
      super();
      this.state = {count: 1}
      this.alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'light',
        time: 500,
        transition: 'scale'
      };
    }

    showAlert = (string) => {
      msg.show(string, {
        time: 500,
        type: 'success'
      });
    }
    
    render() {
      return (
        <article className="list--item">
          <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
          <figure>
            <img src={this.props.image} alt=""></img>
            <header>
              <ProductQuantitySelector count={this.state.count} increment={this._increment} decrement={this._decrement}/>
              <h2>{this.props.title}</h2>
            </header>
            <button onClick={ () => { this._addToCart(this.props.product_id, this.state.count)}}>Add to Cart</button>
            <figcaption>
              {this.props.description}
            </figcaption>
          </figure>
        </article>
      );
    }

    _increment = () =>{
      this.setState({count: this.state.count+1})
    }

    _decrement = () =>{
      if (this.state.count > 1){
        this.setState({count: this.state.count-1})
      }
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
          data: JSON.stringify({token: token, id: id, quantity: quantity, is_bundle: false})
        }).then(response => {
          this.showAlert("Item added to cart")
        }).catch((error) => {
          this.showAlert(error.message)
        })
      }else{
        this.showAlert("You must be logged in!")
      }
    }
}
