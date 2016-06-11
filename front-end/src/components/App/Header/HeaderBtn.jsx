import React, { Component } from 'react';
import styles from './header_btn.css';
import { Link } from "react-router";

export default class HeaderBtn extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.children);
  }
  render(){
    return(
        <Link to={this.props.route}><button className='header-btn'>{this.props.label}</button></Link>
    );
  }
}
