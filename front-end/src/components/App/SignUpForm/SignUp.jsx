import React, { Component } from 'react';
import style from './sign_up_form.css'
var Reqwest = require('reqwest');

export default class SignUpForm extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({email: document.getElementById('email').value, first_name: document.getElementById('first-name').value, last_name: document.getElementById('last-name').value, password: document.getElementById('password').value},
    function(){
      Reqwest({
        url: "http://localhost:3000/users",
        type: 'json',
        method: "post",
        contentType: 'application/json',
        header: new Headers(),
        data: JSON.stringify(this.state),
        success: function(response){
          debugger;
        },
        error: function(response){
          debugger;
        }
      })
    })
  }

  render(){
    return(
      <div className = 'sign-up-form'>
      <form id="sign-up" onSubmit={this.handleSubmit.bind(this)}>
        <div className="input">
          <label htmlFor="full-name">First Name</label>
          <input type="text" id="first-name" name="first-name" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
        </div>
        <div className="input">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
        </div>
        <div className="input">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" autoCorrect="off" autoCapitalize="off" maxLength="64"></input>
        </div>
        <div className="input clearfix">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" maxLength="12" autoCorrect="off" autoCapitalize="off"></input>
          <span className="toggle-mask">Hide</span>
        </div>
        <input type="submit" id="submit" name="submit" value="Create Account"></input>
      </form>
      </div>
    );
  }
}
