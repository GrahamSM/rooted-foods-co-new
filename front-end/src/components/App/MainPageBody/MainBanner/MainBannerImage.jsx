import React, { Component } from 'react';
import styles from './main_banner_image.css';
import { Link } from "react-router";
import MainBannerAxn from './MainBannerAxn.jsx';



export default class MainBannerImage extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className = "main-banner-image">
        <MainBannerAxn getAllProducts={this.props.getAllProducts}/>
      </div>
    );
  }
}
