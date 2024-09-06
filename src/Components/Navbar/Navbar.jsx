import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
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

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                alert("User log Out successfully")
            })
            .catch(error => { console.error(error) })
    }
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
                {/* Profile status */}
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        {
                            user ? <>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user.photoURL ? <img title={user.displayName} src={user.photoURL} /> : <img title={user?.displayName} src="https://i.ibb.co/cLNMyCL/user-avata-removebg-preview.png" />
                                        }
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><button onClick={handleLogOut}>Log Out</button></li>
                                </ul>
                            </> : <Link to='/signIn'>Sign In</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;