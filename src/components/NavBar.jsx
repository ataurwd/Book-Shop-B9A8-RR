import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <NavLink to="/">Dev Book Zone</NavLink>
            </div>
            <div className="flex items-center justify-between gap-16">
                <ul className="flex items-center justify-between gap-10">
                    <NavLink className="group flex  cursor-pointer flex-col" to="/home">
                        Home
                    </NavLink>
                    <NavLink className="group flex  cursor-pointer flex-col" to="/dashboard">
                    Listed Books
                    </NavLink>
                    <NavLink className="group flex  cursor-pointer flex-col" to="/reading-page">
                    Pages to Read
                    </NavLink>
                </ul>
                <div className="flex items-center justify-between gap-5">
                    <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button>
                    <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Register</button>
                </div>
            </div>
        </nav>
    );
};
 
export default NavBar;