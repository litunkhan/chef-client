/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaStar,FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipescard = (props) => {
    const {recipes} = props. recipe
    console.log(recipes)
    const added =()=>{
     toast('Added to Favorite')
    }
    return (
       
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 mb-10">
            {
                recipes.map(res=>{
                    return <>
                          <div  className='text-center mb-10'>
                              <p className='2xl'>Recipe-Name: {res.recipeName}</p>
                             
                              <ul>
                                <p className='text-3xl'>Ingredients</p>
                                {
                                    res.ingredients.slice(0,5).map(list=>{
                                        return <><li className=' pl-2'>{list}</li></>
                                    })
                                    
                                }
                              </ul>
                              <p className='mt-3'><span className='text-3xl'>Cooking-Methot:</span> {res.cookingMethod}</p>
                             <div className='flex items-center'><p className='text-3xl'>Ratings: {res.rating}</p><FaStar />
                             </div>
                             <div className='flex items-center mt-4'><button className='btn btn-secondary' onClick={added}>Favorite</button> <FaHeart className='mt-1'/></div>
                            
                          </div>
                          
                    </>
                })
            }
             <ToastContainer/>
        </div>
    );
};

export default Recipescard;