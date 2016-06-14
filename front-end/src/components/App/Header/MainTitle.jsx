import React, { Component } from 'react';
import styles from './main_title.css';
import { Link } from "react-router";


export default class MainTitle extends React.Component{
  constructor(){
    super();
    this.state = {title: "#getrooted"}
  }
  
  render(){
    return(
      <div className = 'main_title'>
        <Link to="/">{this.state.title}</Link>
      </div>
    );
  }
}
