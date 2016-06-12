import React, { Component } from 'react';
import style from './sign_up_form.css'

export default class SignUpForm extends React.Component{
  constructor(){
    super();
  }

  handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/users",
    {
      method: "POST",
      mode: 'cors',
      header: new Headers(),
      cache: 'default'
    })
    .then(function(response){
      debugger;
    })
    .catch(function(response){
      debugger;
    })
  }

  render(){
    return(
      <div className = 'sign-up-form' onSubmit={this.handleSubmit}>
      <form id="sign-up">
        <div className="input">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" name="full-name" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
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
