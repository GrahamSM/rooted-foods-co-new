import React, {Component} from 'react';
import styles from './header_btn.css';
import {Link} from "react-router";
import Reqwest from 'reqwest';

export default class HeaderBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className='header-btn' onClick={this._clickHandler}>{this.props.label}</button>
        );
    };

    _clickHandler = (e) => {
        e.preventDefault();
        this.props.clickHandler(this.props.route);
    }
}
