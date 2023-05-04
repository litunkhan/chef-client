/* eslint-disable no-unused-vars */
import  React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'




function App() {

 
  return (
    <>
     <Header></Header>
     <div className='min-h-[54vh]'>
       <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </>
  )

 }

export default App
