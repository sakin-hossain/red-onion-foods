import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutUs.css";
const AboutUs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="my-5 col-md-5 col-sm-12">
                    <h2>Why you choose us</h2>
                    <p className="text-secondary">We believe independent restaurants occupy a distinctive position in the world of business. They are visible, important and integral parts of the communities they serve.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 about__us__card">
                <div>
                    <img className="w-100" src="https://i.ibb.co/RDH8Z5z/adult-blur-blurred-background-687824.png" alt="" />
                </div>
                    <h5>Fast Delivery</h5>
                    <p>Fast Deliver is a Bangladesh based courier service. We provide door to door delivery service for any kind of business or person. Our target is to established a ...</p>
                    <Link to="/home">See More <span><FontAwesomeIcon icon={faArrowAltCircleRight}/></span></Link>
                </div>
                <div className="col-md-4 about__us__card">
                <div>
                    <img className="w-100" src="https://i.ibb.co/BcMbvCj/chef-cook-food-33614.png" alt="" />
                </div>
                    <h5>A Good Responder</h5>
                    <p>Fast Deliver is a Bangladesh based courier service. We provide door to door delivery service for any kind of business or person. Our target is to established a ...</p>
                    <Link to="/home">See More <span><FontAwesomeIcon icon={faArrowAltCircleRight}/></span></Link>
                </div>
                <div className="col-md-4 about__us__card">
                <div>
                    <img className="w-100" src="https://i.ibb.co/W0hhrN2/architecture-building-city-2047397.png" alt="" />
                </div>
                    <h5>Home Delivery</h5>
                    <p>Fast Deliver is a Bangladesh based courier service. We provide door to door delivery service for any kind of business or person. Our target is to established a ...</p>
                    <Link to="/home">See More <span><FontAwesomeIcon icon={faArrowAltCircleRight}/></span></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;