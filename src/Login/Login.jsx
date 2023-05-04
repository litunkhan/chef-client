/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import { AuthContext } from '../Authprobider/Authprobider';

const Login = () => {
  const [error,seterror]= useState('')
  const {singIn,googleLogin } = useContext(AuthContext)
  const location = useLocation()
   const navigate = useNavigate()  
   const from = location.state?.from?.pathname || '/';
   const hangleLogin =(e)=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
     
    singIn(email,password)
    .then(res=>{
       console.log(res.user)
       form.reset()
       navigate(from ,{replace:true})

    })
    .catch(err=>{
      seterror(err.message)
      setTimeout(() => {
        seterror('')
      }, 3000);
    })
   }

   const googlelogins =()=>{
      googleLogin()
      .then((result) => {
        
        navigate(from ,{replace:true})
      }).catch((error) => {
       console.log(error.message)
      })
   }
    return (
        <div>
          
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Please Login</h1>
        <form onSubmit={hangleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='password' id="password" type="password" placeholder="Enter your password" required/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Login
            </button>
          </div>
          {
            error&&(
              <div><p className='text-red-500'>{error}</p></div>
            )
          }
        </form>
        <div className="text-center">
          <span className="text-gray-600">Or login with</span>
          <div className="flex justify-center mt-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
              GitHub
            </button>
 <button onClick={googlelogins} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
              Google
            </button>
          </div>
          <p>Dont have an account? <Link className='text-blue-600' to={`/register`}>Register Now</Link></p>
        </div>
      </div>
    </div>
  




            </div>
    );
};

export default Login;