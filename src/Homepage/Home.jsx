/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import Banner from './Banner';
const Chefcard = React.lazy(() => import('./Chefcards/Chefcard'));
import Delevery from './Delevery';
import Time from './Time';
import Category from './Category';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div><h1 className='text-4xl text-center'>Loading...</h1></div>}> <Chefcard></Chefcard> </Suspense>
            <Category></Category>
            <Subscribe></Subscribe>
            <Delevery></Delevery>
            <Time></Time>
        </div>
    );
};

export default Home;