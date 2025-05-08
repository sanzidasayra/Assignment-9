import React from 'react';
import Navbar from '../components/pages/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/pages/Footer';
import Home from '../components//Home/Home';
import './global.css';  


const Layouts = () => {
    return (
        <div className='bg-blue-100'>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;