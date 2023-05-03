/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprobider/Authprobider';
import {  updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  
  const {createuser} = useContext(AuthContext)
  const navigate = useNavigate() 
  const [err,seterr] = useState('')
  
  const handleregister =(e)=>{
    e.preventDefault()
    const form = e.target
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value
   if(!name || !email || !password || !photo) {
      seterr('Fill All the Inputsts')
      setTimeout(()=>{
        seterr('') 
      },3000)
      return
   }  
   else if(password.length < 6){
    seterr('Password must be 6 chacrter')
    setTimeout(() => {
      seterr('')
    }, 3000);
    return
  }   
  
   else{
    createuser(email,password)
    .then(res=>{
      updateProfile(res.user,{displayName:name,photoURL:photo})
      navigate('/login')
      console.log(res.user)
    })
    .catch(err=>{
      console.log(err.message)
    })
   }
  }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
          <form onSubmit={handleregister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='username' id="name" type="text" placeholder="Enter your name"  />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='password' id="password" type="password" placeholder="Enter your password"  />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="photo-url">
                Photo URL
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='photo' id="photo-url" type="url" placeholder="Enter a URL for your photo"  />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Register
              </button>
              {err&&(
                <div> <p className='text-red-500'>{err}</p></div>
              )}
             
            </div>
            <p>Already have an account <Link className='text-blue-600' to={`/login`}>Login</Link></p>
          </form>
        </div>
      </div>
    );
};

export default Register;