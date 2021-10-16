import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AllMealsRoute from '../AllMealsRoute/AllMealsRoute';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <AllMealsRoute/>
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default Home;