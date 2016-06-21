import React, {Component} from 'react';
import styles from './address_info_form.scss';

export default class AddressInfoForm extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div className='update-custom-info'>
          <form id="update-form" onSubmit={this.props.onSubmit}>
              <div className="input clearfix">
                  <label htmlFor="phone">Primary Phone Number</label>
                  <input type="text" id="phone" name="phone" maxLength="12" autoCorrect="off" autoCapitalize="off"></input>
              </div>
              <div className="input">
                  <label htmlFor="shipping-address">Shipping Street Address</label>
                  <input type="text" id="shipping-address" name="shipping-address" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
              </div>
              <div className="input">
                  <label htmlFor="shipping-city">Shipping City</label>
                  <input type="text" id="shipping-city" name="shipping-city" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
              </div>
              <div className="input">
                  <label htmlFor="shipping-province">Shipping Province</label>
                  <input type="text" id="shipping-province" name="shipping-province" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
              </div>
              <input type="submit" id="submit" name="submit" value="Submit"></input>
          </form>
      </div>
    )
  }
}
