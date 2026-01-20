import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300'>
            <Navbar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                className="mt-16"
            />
            <Footer/>
        </div>
    );
};

export default MainLayout;