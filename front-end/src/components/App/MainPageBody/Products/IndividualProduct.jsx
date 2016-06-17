import React, {Component} from 'react';
import styles from './individual_product.scss';

export default class IndividualProduct extends React.Component {
    constructor() {
      super();
      this.state = {count: 0}
    }
    render() {
      return (
        <article className="list--item">
          <figure>
            <img src={this.props.image} alt=""></img>
            <header>
            <div className="floater">
              <button className='amount-adjuster' onClick={this._increment}>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
              <label className="product-amount">{this.props.count}</label>
              <button className='amount-adjuster' onClick={this._decrement}>
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
            </div>
              <h2>{this.props.title}</h2>
            </header>
            <figcaption>
              {this.props.description}
            </figcaption>
          </figure>
        </article>
      );
    }

    _increment = () =>{
      debugger;
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
          data: JSON.stringify({token: token, id: id, quantity: quantity})
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
