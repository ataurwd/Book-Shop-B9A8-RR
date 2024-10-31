import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar/>
            <Outlet className="max-w-6xl mx-auto"/>
            <Footer/>
        </div>
    );
};

export default Root;