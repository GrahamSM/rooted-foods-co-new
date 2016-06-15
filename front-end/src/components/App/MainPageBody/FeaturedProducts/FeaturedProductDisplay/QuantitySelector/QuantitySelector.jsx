import React, {Component} from 'react';
import styles from './quantity_selector.scss';
import {Link} from "react-router";

export default class QuantitySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        }
    }

    render() {
      console.log(this.props);
      return (
        <div className='inc-dec-holder'>
          <div className='content-holder'>
            <button className='decrement' onClick={this._decrementValue}><i className="fa fa-minus" aria-hidden="true"></i></button>
            <div className='value'>{this.state.count}</div>
            <button className='increment' onClick={this._incrementValue}><i className="fa fa-plus" aria-hidden="true"></i></button>
          </div>
        </div>
        );
    };

    _incrementValue = () => {
      this.setState({count: (this.state.count+1)})
    }

    _decrementValue = () => {
      this.setState({count: (this.state.count-1)})
    }
}
