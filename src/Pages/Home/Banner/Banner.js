import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner__container">
            <div className="banner">
                <h1>Best Food Waiting For Your Belly</h1>
                <div className="search__style">
                    <input type="text" placeholder="Search Food Item" />
                    <button className="search__btn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;