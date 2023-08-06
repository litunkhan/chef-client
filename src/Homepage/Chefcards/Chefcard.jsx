/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Chefcard = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://myapp-litunkhan.vercel.app/')
        .then(res=> res.json())
        .then(datas=>{
            if(datas){
                setdata(datas.chefs)
               
            }
            else{
                setdata([])
            }
        })
    },[])
   console.log(data)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h3 className='text-4xl font-bold text-center mt-10'>Get to Know Our Talented Chefs</h3>
            <p className='mt-4 text-center'>
            Discover the masterminds behind our delicious recipes. Our team of talented chefs are passionate about creating mouth-watering dishes that are sure to impress. From classic comfort foods to exotic cuisine, explore their profiles.
            </p>
        <div className='my-10 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
            {
                data.map(chef=>{
                    return  <> <div key={chef.id} className="bg-white shadow-xl rounded-lg overflow-hidden w-full   ">
                    <img
                      src={chef.picture}
                      alt="Chef"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{chef.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Years of experience: {chef.years_of_experience}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        Number of recipes: {chef.num_of_recipes}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        Likes: {chef.likes}
                      </p>
                      <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
                       <Link to={`/${chef.id}`}>View Recipes</Link> 
                      </button>
                    </div>
                    
                  </div>
                  </> 
                })
            }
        </div>
        </div>
    );
};

export default Chefcard;