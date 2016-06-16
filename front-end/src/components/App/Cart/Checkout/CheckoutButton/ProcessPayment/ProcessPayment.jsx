import React, {Component} from 'react';
import styles from './process_payment.scss';
import StripePayment from './StripePayment/StripePayment.jsx';
import AddressInfoForm from './AddressInfoForm/AddressInfoForm.jsx';
var Reqwest = require('reqwest');

export default class ProcessPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {paymentInfoSubmitted: false}
    }
    _renderPaymentForm(){
      return(
        <StripePayment />
      )
    }

    _handleSubmit(e) {
      e.preventDefault();
      let token = localStorage.access_token
      this.setState({
          phone: document.getElementById('phone').value,
          shipping_address: document.getElementById('shipping-address').value,
          shipping_city: document.getElementById('shipping-city').value,
          shipping_province: document.getElementById('shipping-province').value,
          shipping_postal_code: document.getElementById('shipping-postal').value
      }, () => {
          Reqwest({
              url: "http://localhost:3000/users/" + token,
              type: 'json',
              method: 'put',
              contentType: 'application/json',
              headers: {
                  'X-ACCESS-TOKEN': token
              },
              data: JSON.stringify(this.state),
          }).then((response) =>{
            this._updatePaymentInfoStatus()
          }).catch((error) =>{
            debugger;
          })
        })
    }

    _renderPaymentInfoForm(){
      return(
        <AddressInfoForm onSubmit={ (e) => this._handleSubmit(e) } />
      )
    }

    _updatePaymentInfoStatus() {
      this.setState({paymentInfoSubmitted: true})
    }

    render() {
        return (
          <div>
            { this.state.paymentInfoSubmitted ? this._renderPaymentForm() : this._renderPaymentInfoForm() }
          </div>
        )
    }
}

// t.string   "billing_address"
// t.string   "billing_city"
// t.string   "billing_province"
// t.string   "billing_country"
// t.string   "billing_postal_code"
