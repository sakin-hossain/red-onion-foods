import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header__container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="authentication">
                <FontAwesomeIcon icon={faShoppingCart} />
                <button className="btn__regular">Login</button>
                <button className="btn__regular">Register</button>
            </div>
        </div>
    );
};

export default Header;