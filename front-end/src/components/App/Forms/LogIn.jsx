import React, {Component} from 'react';
import style from './log_in_form.css';
var Reqwest = require('reqwest');

export default class LogIn extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.alertOptions = {
          offset: 14,
          position: 'top right',
          theme: 'light',
          time: 1000,
          transition: 'scale'
        };
    }

    render() {
        return (
            <div className='sign-up-form'>
              <form id="sign-up" onSubmit={this.handleSubmit.bind(this)}>
                <div className="input">
                  <label htmlFor="username">Username/Email</label>
                  <input type="text" id="username_or_email" name="username" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
                </div>
                <div className="input clearfix">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" maxLength="12" autoCorrect="off" autoCapitalize="off"></input>
                  <span className="toggle-mask">Hide</span>
                </div>
                <input type="submit" id="submit" name="submit" value="#getrooted"></input>
              </form>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            username_or_email: document.getElementById('username_or_email').value,
            password: document.getElementById('password').value
        }, () => {
            Reqwest({
                url: "http://localhost:3000/session",
                type: 'json',
                method: "post",
                contentType: 'application/json',
                header: new Headers(),
                data: JSON.stringify(this.state),
                success: (response) => {
                    localStorage.setItem("access_token", response.api_key.access_token)
                    localStorage.setItem("has_payment_info", response.has_payment_info)
                    this.context.router.push('/');
                },
                error: function(response) {
                }
            })
        })
    }
}
