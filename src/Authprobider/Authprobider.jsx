/* eslint-disable no-unused-vars */

import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged ,signInWithPopup, GoogleAuthProvider,GithubAuthProvider   } from "firebase/auth";
import app from '../Firebase.config';


export const AuthContext = createContext()
// eslint-disable-next-line react/prop-types
const Authprobider = ({children}) => {
    const [user,setuser] = useState(null)
    const [loaders,setloaders] = useState(true)
    const auth = getAuth(app)
   
    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();
    const createuser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,curuser=>{
        setloaders(false)
         setuser(curuser)
        })
        return  ()=>{
          unsubscribe()
        }
    },[auth])

    const logOut =()=>{
        return signOut(auth)
        .then(() => {
            
          }).catch((error) => {
            
          });
    }
    const googleLogin =()=>{
        return signInWithPopup(auth, provider)
        
        
    }
    const gitLogin =()=>{
       return signInWithPopup(auth, gitprovider)
  
    }
   
    const userInfo ={
        createuser,
        singIn,
        logOut ,
        loaders,
        user,
        googleLogin,
        gitLogin
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprobider;