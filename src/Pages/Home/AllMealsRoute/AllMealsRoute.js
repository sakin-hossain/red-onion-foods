import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import Meals from '../Meals/Meals';

const AllMealsRoute = () => {
    return (
        <div>
            <Router>
                <Meals/>
                <Switch>
                    <Route exact path="/">
                        <Breakfast/>
                    </Route>
                    <Route exact path="/home/">
                        <Breakfast/>
                    </Route>
                    <Route exact path="/breakfast">
                        <Breakfast/>
                    </Route>
                    <Route exact path="/lunch">
                        <Lunch/>
                    </Route>
                    <Route exact path="/dinner">
                        <Dinner/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default AllMealsRoute;