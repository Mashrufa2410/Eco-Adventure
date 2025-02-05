import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className="flex mx-auto flex-col min-h-screen">
      
      <Navbar />
      <main className='sm:px-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
