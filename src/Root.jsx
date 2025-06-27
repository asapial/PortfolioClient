import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer';

const Root = () => {
    return (
        <div className=' bg-[#1e2125]'>
        <div className="navBarContainer">
            <Navbar></Navbar>

        </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;