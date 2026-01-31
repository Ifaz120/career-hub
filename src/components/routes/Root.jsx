import React from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;