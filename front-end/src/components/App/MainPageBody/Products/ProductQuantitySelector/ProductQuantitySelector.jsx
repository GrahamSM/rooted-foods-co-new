import React, {Component} from 'react';

export default class ProductQuantitySelector extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="floater">
          <button className='amount-adjuster' onClick={this.props.increment}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <label className="product-amount">{this.props.count}</label>
          <button className='amount-adjuster' onClick={this.props.decrement}>
            <i className="fa fa-minus" aria-hidden="true"></i>
          </button>
        </div>
      )
    }
  }
