/* eslint-disable no-unused-vars */
import React from 'react';
import image from './chefs.png'
import image2 from './fresh.png'
import image3 from './del.png'
import image4 from './fre.png'
const Delevery = () => {
    return (
        <div className=' mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className="bg-white rounded-lg overflow-hidden shadow-md flex justify-center items-center flex-col">
        <img src={image2} alt="name" className="w-25" />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 text-center">Expariance chef</h2>
          <p className="text-gray-700 text-base text-center">Chefs are culinary professionals who specialize in creating and preparing food, with a focus on taste, presentation, and overall dining experience.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-md flex justify-center items-center flex-col">
        <img src={image4} alt="name" className="w-25" />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 text-center">Fresh food</h2>
          <p className="text-gray-700 text-base text-center">Fresh food refers to food that has not been processed or preserved, and is typically consumed soon after it is harvested or prepared, providing maximum nutritional value and flavor.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-md flex justify-center items-center flex-col">
        <img src={image3} alt="name" className="w-25" />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 text-center">A variety of dishes</h2>
          <p className="text-gray-700 text-base text-center">A variety of dishes refers to the diverse range of food options available, often based on regional, cultural, or seasonal factors, providing a rich and dynamic culinary experience.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-md flex justify-center items-center flex-col">
        <img src={image} alt="name" className="w-25" />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 text-center">Fast delivery</h2>
          <p className="text-gray-700 text-base text-center">Fast delivery food refers to pre-cooked meals that are quickly prepared and delivered to customers, often through a network of local restaurants and food delivery services, providing convenience and accessibility.</p>
        </div>
      </div>
      </div>
    );
};

export default Delevery;