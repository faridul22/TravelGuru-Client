import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li className='mx-3'>
            <Link to='/'>Home</Link>
        </li>
        <li className='mx-3'>
            <Link to='/allTouristSpot'>All Tourists Spot</Link>
        </li>
        <li className='mx-3'>
            <Link to='/addTouristSpot'>Add Tourists Spot</Link>
        </li>
        <li className='mx-3'>
            <Link to='/myList'>My List</Link>
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-neutral text-neutral-content">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">TravelGuru</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="ring-offset-base-100 w-[50px] rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;