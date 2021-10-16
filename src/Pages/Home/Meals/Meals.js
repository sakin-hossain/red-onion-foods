import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Meals.css";

const Meals = () => {
    return (
        <div>
            <div className="navbar__container">
                <NavLink to="/breakfast#breakfast">Breakfast</NavLink>
                <NavLink to="/lunch#lunch">Lunch</NavLink>
                <NavLink to="/dinner#dinner">Dinner</NavLink>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Meals;