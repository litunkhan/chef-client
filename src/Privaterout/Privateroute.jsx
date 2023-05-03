/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Authprobider/Authprobider';
import { Navigate,useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Privateroute = ({children}) => {
    const {user, loaders} = useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children
    }
    else if(loaders){
        return  <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    }
   return <Navigate to={`/login`} state={{ from: location }} replace ></Navigate>
};

export default Privateroute;