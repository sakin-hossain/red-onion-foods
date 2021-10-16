import React from 'react';
import useMeals from '../../../hooks/useMeals';

const Dinner = () => {
    const {dinner} = useMeals();
    return (
        <div className="container" id="lunch">
            <div className="row mt-3">
                {
                dinner?.map(meal => 
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

export default Dinner;