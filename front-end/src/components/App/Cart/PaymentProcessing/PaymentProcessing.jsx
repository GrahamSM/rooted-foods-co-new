import React, {Component} from 'react';
import styles from './payment_processing.scss';
import StripePayment from './StripePayment/StripePayment.jsx';
import AddressInfoForm from './AddressInfoForm/AddressInfoForm.jsx';
var Reqwest = require('reqwest');

export default class ProcessPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {paymentInfoSubmitted: localStorage.has_payment_info}
    }
    _renderPaymentForm(){
      return(
        <StripePayment totalCost={this.props.totalCost}/>
      )
    }

    _handleSubmit(e) {
      e.preventDefault();
      let token = localStorage.access_token
      this.setState({
          phone: document.getElementById('phone').value,
          shipping_address: document.getElementById('shipping-address').value,
          shipping_city: document.getElementById('shipping-city').value,
          shipping_province: document.getElementById('shipping-province').value
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
      localStorage.has_payment_info = true;
      this.setState({paymentInfoSubmitted: localStorage.has_payment_info})
    }

    render() {
        return (
          <div>
            { (this.state.paymentInfoSubmitted === "true") ? this._renderPaymentForm() : this._renderPaymentInfoForm() }
          </div>
        )
    }
}

// t.string   "billing_address"
// t.string   "billing_city"
// t.string   "billing_province"
// t.string   "billing_country"
// t.string   "billing_postal_code"
