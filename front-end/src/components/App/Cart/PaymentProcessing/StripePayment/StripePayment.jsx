import React, {Component} from 'react';
import styles from './stripe_payment.scss';
import AlertContainer from 'react-alert';
var StripeCheckout = require('react-stripe-checkout');
var Reqwest = require('reqwest');

export default class StripePayment extends React.Component {
  static contextTypes = {
      router: React.PropTypes.object.isRequired
  };
  constructor(props) {
      super(props);
      this.alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'light',
        time: 1000,
        transition: 'scale'
      };
  }

  showAlert = (string) => {
    msg.show(string, {
      time: 1000,
      type: 'success'
    });
  }

  onToken = (token) => {
    const {router} = this.context
    let totalCost = this.props.totalCost
    let access_token = localStorage.access_token
    Reqwest({
      url: "http://localhost:3000/charges",
      type: 'json',
      method: 'post',
      contentType: 'application/json',
      headers: {
          'X-ACCESS-TOKEN': access_token
      },
        data: JSON.stringify({amount: totalCost, stripeToken: token.id})
    }).then(response => {
      {this.showAlert("Payment Successful!")}
      // TOASTER NOT WORKING
      router.push('/');
    }).catch((error) => {
        alert(error.message);
        // TODO: Use toaster
    })
  }

  render() {
    return (
      <div className="payment-btn-page">
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
        <StripeCheckout
          token={this.onToken}
          amount={this.props.totalCost*100}
          currency='CAD'
          componentClass="stripe-payment"
          stripeKey="pk_test_hbgI9kGpqL4FI8sfXHqQkhd6">
          <button className="stripe-payment">
            Proceed to Payment
          </button>
          </StripeCheckout>
      </div>
    )
  }
}
