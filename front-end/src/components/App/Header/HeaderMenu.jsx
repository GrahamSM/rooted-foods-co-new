import React, { Component } from 'react';
import styles from './header_menu.css';
import MainTitle from './MainTitle.jsx';
import HeaderBtn from './HeaderBtn.jsx'


export default class Header extends React.Component{
  constructor(){
    super();
    if (localStorage.access_token){
      this.state = {label: "Log Out", route: "logout"};
    }
    else {
      this.state = {label: "Log In", route: "login", label_two: "Sign Up", route_two: "Sign Up"};
    }
    console.log(this.state);
  }

  render(){

    return(
      <div className = 'header-menu'>
        <HeaderBtn label='Sign Up' route="signup"/>
        <HeaderBtn label='Log In' route="login"/>
      </div>
    );
  }
}
