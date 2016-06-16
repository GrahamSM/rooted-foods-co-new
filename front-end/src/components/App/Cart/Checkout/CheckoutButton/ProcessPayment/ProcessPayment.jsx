import React, {Component} from 'react';
import styles from './process_payment.scss';

export default class ProcessPayment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='update-custom-info'>
                <form id="update-form">
                    <div className="input">
                        <label htmlFor="shipping_address">Shipping Street Address</label>
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
                    <div className="input">
                        <label htmlFor="shipping-postal">Shipping Postal Code</label>
                        <input type="text" id="shipping-postal" name="shipping-postal" autoCorrect="off" autoCapitalize="off" maxLength="64"></input>
                    </div>
                    <div className="input clearfix">
                        <label htmlFor="phone">Primary Phone Number</label>
                        <input type="text" id="phone" name="phone" maxLength="12" autoCorrect="off" autoCapitalize="off"></input>
                        {/*<span className="toggle-mask">Hide</span>*/}
                    </div>
                    <input type="submit" id="submit" name="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

// t.string   "billing_address"
// t.string   "billing_city"
// t.string   "billing_province"
// t.string   "billing_country"
// t.string   "billing_postal_code"
