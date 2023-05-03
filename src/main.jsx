import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Homepage/Home.jsx';
import Blog from './Blog/Blog.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Authprobider from './Authprobider/Authprobider.jsx';
import Recipess from './Recipes/Recipess.jsx';
import Privateroute from './Privaterout/Privateroute.jsx';
import Error from './Errorpage/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/:id',
        element:<Privateroute><Recipess></Recipess></Privateroute>,
        loader:({params})=> fetch(`http://localhost:4000/${params.id}`)

      },
      // {
      //   path:'*',
      //   element:<Error></Error>
      //   },
      
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
  {
    path:'*',
    element:<Error></Error>
    }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Authprobider><RouterProvider router={router} /></Authprobider> 
  </React.StrictMode>,
)
