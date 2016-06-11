import React, { Component } from 'react';
import styles from './header_menu.css';
import MainTitle from './MainTitle.jsx';
import HeaderBtn from './HeaderBtn.jsx'


export default class Header extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className = 'header-menu'>
        <HeaderBtn label="Log In" route="login"/>
      </div>
    );
  }
}
