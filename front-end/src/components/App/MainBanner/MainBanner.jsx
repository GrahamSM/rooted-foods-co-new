import React, { Component } from 'react';
import styles from './main_banner.css';
import MainBannerImage from './MainBannerImage.jsx';

export default class Header extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className = 'main_banner'>
        <MainBannerImage />
      </div>
    );
  }
}
