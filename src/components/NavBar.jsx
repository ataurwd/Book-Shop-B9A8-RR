import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu } from "react-icons/hi"; // Icon for the menu button

const Navbar = () =>  {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between bg-[#393E46] px-4 py-5 text-white z-10 top-0 max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex items-center justify-between">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <NavLink to="/">Dev Book Zone</NavLink>
                </div>
                {/* Menu Icon for mobile */}
                <button
                    className="lg:hidden ml-auto text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <HiMenu className="text-3xl" />
                </button>
            </div>

            {/* Nav links (desktop) */}
            <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:flex-row lg:items-center lg:justify-between gap-16`}>
                <ul className="flex flex-col lg:flex-row items-center gap-10 mt-4 lg:mt-0">
                    <NavLink className="group flex cursor-pointer flex-col" to="/">
                        Home
                    </NavLink>
                    <NavLink className="group flex cursor-pointer flex-col" to="/list-to-read">
                        Listed Books
                    </NavLink>
                    <NavLink className="group flex cursor-pointer flex-col" to="/reading-page">
                        Pages to Read
                    </NavLink>
                </ul>
                {/* Buttons (hide on mobile) */}
                <div className="hidden lg:flex items-center gap-5">
                    <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">
                        Log In
                    </button>
                    <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;