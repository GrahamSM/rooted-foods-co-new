import React, {Component} from 'react';
import styles from './header.css';
import MainTitle from './MainTitle.jsx';
import HeaderMenu from './HeaderMenu.jsx';
import Reqwest from 'reqwest';

export default class Header extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor() {
        super();
    };

    render() {
        return (
            <div className='header'>
                <MainTitle/>
                <HeaderMenu isAuthenticated={!!localStorage.access_token} buttonClickHandler={this._handleClick}/>
            </div>
        );
    };

    _handleClick = (route) => {
        const {router} = this.context
        if (localStorage.access_token) {
            var token = localStorage.access_token
            Reqwest({
                url: "http://localhost:3000/session",
                type: 'json',
                method: 'delete',
                contentType: 'application/json',
                headers: {
                    'X-ACCESS-TOKEN': token
                },
                data: JSON.stringify(token)
            }).then(response => {
                localStorage.removeItem("access_token");
                router.push('/');
            }).catch((error) => {
                router.push(route)
                ///INFORMATIVE MESSAGE
            })
        } else {
            this.context.router.push(route);
        }
    }
}
