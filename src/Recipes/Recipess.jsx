/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {useLoaderData} from 'react-router-dom'
import Recipescard from './Recipescard';
const Recipess = () => {
   
    const items = useLoaderData()
   
    return (
        <div>
             <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-12 md:py-24">
      <div className="flex-1 md:w-1/2 px-4">
        <img src={items.picture} alt="Chef" className="rounded-lg w-full h-[300px]" />
      </div>
      <div className="flex-1 md:w-1/2 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{items.name}</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">{items.bio}</p>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-4">Likes:{items.likes}</span>
          <span className="text-gray-600">Number of Recipes: {items.num_of_recipes}</span>
        </div>
<p className="text-sm md:text-base text-gray-500">Years of Experience: {items.years_of_experience}</p>
      </div>
    </div>
      <div className='text-4xl font-bold mt-3 text-center'>Top 3 recipes </div>
     <Recipescard recipe={items}></Recipescard>
        </div>
    );
};

export default Recipess;