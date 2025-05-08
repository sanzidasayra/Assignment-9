import React from 'react';
import Navbar from '../components/pages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/Footer';
import './global.css';  

const Layouts = () => {
    return (
        <div className='bg-blue-100 min-h-screen flex flex-col justify-between'>
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layouts;
