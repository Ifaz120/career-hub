import React from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-300px)]"> 
                <Outlet />
            </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;