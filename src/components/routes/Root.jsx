import React from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className='bg-gray-50 min-h-screen flex flex-col'>
      <Navbar></Navbar>
      
      {/* flex-grow ensures this area fills the screen so the footer stays down */}
      <div className="flex-grow min-h-[calc(100vh-300px)]"> 
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;