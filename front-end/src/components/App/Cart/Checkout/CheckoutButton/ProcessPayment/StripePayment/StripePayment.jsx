import React, {Component} from 'react';
import styles from './stripe_payment.scss';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    _submitStripe = (e) =>{
      e.preventDefault();
      let form = this.refs.paymentForm
      Stripe.card.createToken(form, function(status, response){
        debugger;
        Reqwest({
          url: "http://localhost:3000/charges",
          type: 'json',
          method: 'post',
          contentType: 'application/json',
          headers: {
              'X-ACCESS-TOKEN': token
          },
          // data: TODO:
        }).then(response => {
          return response;
          // TODO: Use toaster
        }).catch((error) => {
            alert(error.message);
            // TODO: Use toaster
        })
      })
    }


    render() {
        return (
          <div className="credit-card-info">
            <form ref="paymentForm" action="" method="POST" id="payment-form" onSubmit={this._submitStripe}>
              <span className="payment-errors"></span>
              <div className="form-row">
                <label>
                  <span>Card Number</span>
                  <input type="text" size="30" data-stripe="number"></input>
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Expiration (MM/YY)</span>
                  <input type="text" size="2" data-stripe="exp_month"></input>
                </label>
                <span> / </span>
                <input type="text" size="2" data-stripe="exp_year"></input>
              </div>
              <div className="form-row">
                <label>
                  <span>CVC</span>
                  <input type="text" size="4" data-stripe="cvc"></input>
                </label>
              </div>
              <input type="submit" className="submit" value="Submit Payment"></input>
            </form>
          </div>
        );
    }
}
