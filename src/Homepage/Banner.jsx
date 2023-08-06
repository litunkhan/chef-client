/* eslint-disable no-unused-vars */
import React from 'react';
import img from './authentication1.png'

const Banner = () => {
    return (
        <div>
            <div className=" py-16 md:ml-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Mexican Chefs</h2>
          <p className="text-gray-600 mb-8">Our team of Mexican chefs are passionate about sharing the flavors and traditions of their country with the world. With years of experience and a deep love for their craft, they bring a unique perspective to every dish they create.</p>
          <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>
        <div className="lg:mt-0 mt-8 lg:w-1/2">
          <img className="h-96 rounded-lg " src={img} alt="Mexican chefs cooking" />
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;