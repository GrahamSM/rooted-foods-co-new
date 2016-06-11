import React, { Component } from 'react';
import styles from './header.css';
import MainTitle from './MainTitle.jsx';
import HeaderMenu from './HeaderMenu.jsx';

export default class Header extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className = 'header'>
        <MainTitle />
        <HeaderMenu />
      </div>
    );
  }
}
