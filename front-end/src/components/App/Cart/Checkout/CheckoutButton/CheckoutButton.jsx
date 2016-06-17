import React, {Component} from 'react';
import styles from './checkout_button.scss';

export default class CheckoutButton extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
      return(
        <div>
          <button className='checkout-btn' onClick={this.props.toCheckout}>Checkout</button>
        </div>
      )
    }

}
