import React from 'react';
import useMeals from '../../../hooks/useMeals';
import "./Breakfast.css";

const Breakfast = () => {
    const {breakfast} = useMeals();
    return (
        <div className="container" id="breakfast">
            <div className="row mt-3">
                {
                    breakfast?.map(meal => 
                        <div className="col-md-4">
                            <div className="meal__container">
                                <div className="meal__items">
                                    <img src={meal.img} alt="" />
                                </div>
                                <h4>{meal.title}</h4>
                                <p>{meal.ingredients}</p>
                                <h2>${meal.price}</h2>
                                <button className="btn btn__regular">Order Now</button>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Breakfast;