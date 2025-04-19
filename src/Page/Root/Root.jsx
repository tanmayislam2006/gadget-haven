import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    const location=useLocation()
    const isHomePage=location.pathname ==="/"
    return (
        <div className='font-sora max-w-7xl mx-auto'>
            {
                isHomePage?'':<Navbar></Navbar>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;