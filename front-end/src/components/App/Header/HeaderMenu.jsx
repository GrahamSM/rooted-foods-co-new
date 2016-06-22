import React from 'react';
import styles from './header_menu.scss';
import MainTitle from './MainTitle.jsx';
import HeaderBtn from './HeaderBtn.jsx'

const HeaderMenu = ({buttonClickHandler, isAuthenticated, viewCartHandler}) => {

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

    const cart = isAuthenticated ? <button className="view-cart" onClick={viewCartHandler}><span className='cart-icon'><i className="fa fa-shopping-cart"></i></span></button> : null;

    const headerComp = buttons.map(({label, route}) => <HeaderBtn {...{label, route}} key={label} clickHandler={buttonClickHandler}/>)



    return (
        <div className='header-menu'>
          {headerComp}
          {cart}
        </div>
    );
}

export default HeaderMenu;
