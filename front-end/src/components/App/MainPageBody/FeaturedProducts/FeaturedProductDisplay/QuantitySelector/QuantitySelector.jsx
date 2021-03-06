import React, {Component} from 'react';
import styles from './quantity_selector.scss';
import {Link} from "react-router";

export default class QuantitySelector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className='inc-dec-holder'>
          <div className='content-holder'>
            <button className='decrement' onClick={this.props.decrementValue}><i className="fa fa-minus" aria-hidden="true"></i></button>
            <div className='value'>{this.props.count}</div>
            <button className='increment' onClick={this.props.incrementValue}><i className="fa fa-plus" aria-hidden="true"></i></button>
          </div>
        </div>
        );
    };
}
