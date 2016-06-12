import React, { Component } from 'react';
import styles from './main_banner_axn.css';
import { Link } from "react-router";


export default class MainBannerAxn extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="main-banner-call">
        <h2>Farm <span id="fresh">fresh</span> groceries</h2>
        <p>Delivered right to your door</p>
        <button className="main-action-btn">Shop Now</button>
      </div>
    );
  }
}
