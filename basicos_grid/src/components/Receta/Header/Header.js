import React from 'react';
import logo from './../img/logo.jpg';

const Header = () => {
    return (
        <header className="header contenedor">
            <img src={logo} alt="logo"/>
        </header>
    );
}

export default Header;