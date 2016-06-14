import React from 'react';
import styles from './header_menu.css';
import MainTitle from './MainTitle.jsx';
import HeaderBtn from './HeaderBtn.jsx'

const HeaderMenu = ({buttonClickHandler, isAuthenticated}) => {

    const buttons = isAuthenticated
        ? [
            {
                label: "Log Out",
                route: "/"
            }
        ]
        : [
            {
                label: "Log In",
                route: "login"
            }, {
                label: "Sign Up",
                route: "signup"
            }
        ];

    const headerComp = buttons.map(({label, route}) => <HeaderBtn {...{label, route}} key={label} clickHandler={buttonClickHandler}/>)

    return (
        <div className='header-menu'>
            {headerComp}
        </div>
    );
}

export default HeaderMenu;
