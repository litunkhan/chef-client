/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import Chefcard from './Chefcards/Chefcard';
import Delevery from './Delevery';
import Time from './Time';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefcard></Chefcard>
            <Delevery></Delevery>
            <Time></Time>
        </div>
    );
};

export default Home;