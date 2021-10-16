import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img className="w-25 my-5" src={logo} alt="" />
                    <p className="mt-5">Copyright &copy; 2021 Sakin Hossain</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <Link to="/home">About Online Food</Link>
                            <Link to="/home">Read Our Blog</Link>
                            <Link to="/home">Sign uo to deliver</Link>
                            <Link to="/home">Add your Restaurant</Link>
                        </div>
                        <div className="col-md-6 mt-5">
                        <Link to="/home">Get Help</Link>
                        <Link to="/home">Read FAQ</Link>
                        <Link to="/home">View All Cities</Link>
                        <Link to="/home">Restaurant Near Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;