import React, {Component} from 'react';
import style from './sign_up_form.css'
import Reqwest from 'reqwest';

export default class SignUpForm extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }
s
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            user: {
                email: document.getElementById('email').value,
                first_name: document.getElementById('first-name').value,
                last_name: document.getElementById('last-name').value,
                password: document.getElementById('password').value,
                password_confirmation: document.getElementById('password-confirmation').value,
                username: document.getElementById('username').value
            }
        }, () => {
            Reqwest({
                url: "http://localhost:3000/users",
                type: 'json',
                method: "post",
                contentType: 'application/json',
                header: new Headers(),
                data: JSON.stringify(this.state),
                success: (response) => {
                    localStorage.setItem("access_token", response.api_key.access_token)
                    localStorage.setItem("has_payment_info", false)
                    this.context.router.push('/');
                },
                error: function(response) {
                    ///Informative message, stay on the same page
                }
            })
        })
    }

    render() {
        return (
            <div className='sign-up-form'>
                <form id="sign-up" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id="first-name" name="first-name" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" autoCorrect="off" autoCapitalize="words" maxLength="32"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" autoCorrect="off" autoCapitalize="off" maxLength="64"></input>
                    </div>
                    <div className="input clearfix">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" maxLength="12" autoCorrect="off" autoCapitalize="off"></input>
                        {/*<span className="toggle-mask">Hide</span>*/}
                    </div>
                    <div className="input clearfix">
                        <label htmlFor="password-confirmation">Confirm</label>
                        <input type="password" id="password-confirmation" name="password-confirmation" maxLength="12" autoCorrect="off" autoCapitalize="off"></input>
                        {/*<span className="toggle-mask">Hide</span>*/}
                    </div>
                    <input type="submit" id="submit" name="submit" value="Create Account"></input>
                </form>
            </div>
        );
    }
}
