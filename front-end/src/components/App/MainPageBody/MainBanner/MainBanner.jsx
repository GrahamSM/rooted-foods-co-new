import React, { Component } from 'react';
import styles from './main_banner.css';
import MainBannerImage from './MainBannerImage.jsx';

export default class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className = 'main_banner'>
        <MainBannerImage getAllProducts={this.props.getAllProducts} />
      </div>
    );
  }
}
