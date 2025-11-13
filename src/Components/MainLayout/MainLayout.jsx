import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen justify-between'>
            <Navbar/>
            <Outlet/>
            <ToastContainer/>
            <Footer/>
        </div>
    );
};

export default MainLayout;