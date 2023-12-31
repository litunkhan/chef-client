/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authprobider/Authprobider';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Header = () => {
   const {logOut } = useContext(AuthContext)
    const { user} = useContext(AuthContext)
    
    return (
        <div className="navbar bg-base-100 max-w-[1100px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to={`/`}>Home</Link></li>
              <li tabIndex={0}>
                <Link to={`blog`} className="justify-between">
                  Blog
                  
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl md:text-3xl">Chef-Recipe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-500" : ""
  } to={`/`}>Home</NavLink></li>
              <li >
              <li>
                <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-500" : ""
  } to={`/blog`}>Blog</NavLink></li>
              
              </li>
          </ul>
         
        </div>
        <div className="navbar-end">
        {
          user&& (
          <div className='mr-2 md:mr-4'> <Tippy content={user.displayName}><img className='w-9 rounded-full cursor-pointer' src={user.photoURL} alt='userImage'></img></Tippy></div>
          )
        }
        {user?<Link className="btn" onClick={()=>logOut()}>LogOut</Link>:<Link to={'/login'} className="btn">Login</Link>}
      
        </div>
      </div>
    );
};

export default Header;