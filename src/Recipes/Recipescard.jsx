/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { FaStar,FaHeart } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Recipescard = (props) => {
//     const [active,setactive] = useState(null)
//     const {recipes} = props. recipe
//     console.log(recipes)
//     const added =(index)=>{
//         setactive(index)
//      toast('Added to Favorite')
//     }
//     return (
       
//         <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 mb-10">
//             {
//                 recipes.map((res,index)=>{
//                     return <>
//                           <div  className='text-center mb-10'>
//                               <p className='2xl'>Recipe-Name: {res.recipeName}</p>
                             
//                               <ul>
//                                 <p className='text-3xl'>Ingredients</p>
//                                 {
//                                     res.ingredients.slice(0,5).map(list=>{
//                                         return <><li className=' pl-2'>{list}</li></>
//                                     })
                                    
//                                 }
//                               </ul>
//                               <p className='mt-3'><span className='text-3xl'>Cooking-Methot:</span> {res.cookingMethod}</p>
//                              <div className='flex items-center'><p className='text-3xl'>Ratings: {res.rating}</p><FaStar />
//                              </div>
//                              <div className='flex items-center mt-4'><button disabled={active=== index} className='btn btn-secondary' onClick={added}>Favorite</button> <FaHeart className='mt-1'/></div>
                            
//                           </div>
                          
//                     </>
//                 })
//             }
//              <ToastContainer/>
//         </div>
//     );
// };

// export default Recipescard;

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
       
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 mb-10">
            {
                recipes.map((res, index) => {
                    return (
                        <div key={index} className='text-center mb-10'>
                            <p className='2xl'>Recipe-Name: {res.recipeName}</p>
                            <ul>
                                <p className='text-3xl'>Ingredients</p>
                                {
                                    res.ingredients.slice(0, 5).map((list, i) => {
                                        return <li key={i} className='pl-2'>{list}</li>;
                                    })
                                }
                            </ul>
                            <p className='mt-3'><span className='text-3xl'>Cooking-Methot:</span> {res.cookingMethod}</p>
                            <div className='flex items-center'>
                                <p className='text-3xl'>Ratings: {res.rating}</p>
                                <FaStar />
                            </div>
                            <div className='flex items-center mt-4'>
                                <button disabled={activeIndex === index} className='btn btn-secondary' onClick={() => added(index)}>Favorite</button>
                                <FaHeart className='mt-1'/>
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
