/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaStar,FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipescard = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const {recipes} = props.recipe;
    console.log(recipes);
    const added = (index) => {
        setActiveIndex(index);
        toast('Added to Favorite');
    };
    return (
       
        <div className="grid gap-3 grid-cols-1  md:grid-cols-3 mt-10 mb-10 max-w-[1000px] mx-auto ">
            {
                recipes.map((res, index) => {
                    return (
                        <div key={index} className=' mb-10 shadow-xl p-5 flex flex-col justify-between'>
                            <p className='2xl'>Recipe-Name: {res.recipeName}</p>
                            <ul>
                                <p className='text-3xl'>Ingredients</p>
                                {
                                    res.ingredients.slice(0, 5).map((list, i) => {
                                        return <li key={i} className='list-disc ml-4 mt-3'>{list}</li>;
                                    })
                                }
                            </ul>
                            <p className='mt-3'><span className='text-2xl'>Cooking-Methot:</span> {res.cookingMethod}</p>
                            <div className='flex items-center'>
                                <p className='text-3xl'>Ratings: {res.rating}</p>
                                <FaStar />
                            </div>
                            <div className='flex items-center mt-4'>
                                <button disabled={activeIndex === index} className='btn 
                                btn-outline btn-sm btn-secondary' onClick={() => added(index)}>Favorite<FaHeart className='mt-1 ml-3'/></button>
                                
                            </div>
                        </div>
                    );
                })
            }
            <ToastContainer/>
        </div>
    );
};

export default Recipescard;
