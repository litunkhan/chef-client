/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import Banner from './Banner';
const Chefcard = React.lazy(() => import('./Chefcards/Chefcard'));
import Delevery from './Delevery';
import Time from './Time';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div>Loading...</div>}> <Chefcard></Chefcard> </Suspense>
            <Delevery></Delevery>
            <Time></Time>
        </div>
    );
};

export default Home;