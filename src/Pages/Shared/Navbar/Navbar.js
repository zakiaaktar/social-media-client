import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
//import { FaBeer } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
    const { user } = useContext(AuthContext);


    const handleLogOut = () => {


    }



    const menuItems = <>
        <li className='text-white font-semibold'><Link to='/'>Home</Link></li>
        
        <li className='text-white font-semibold'><Link to='/message'>Message</Link></li>
        <li className='text-white font-semibold'><Link to='/media'>Media</Link></li>
        <li className='text-white font-semibold'><Link to='/about'>About</Link></li>


        {/* {
            user?.email ?
                <>
                    
                    <li className='text-white font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <li className='text-white font-semibold'><Link to='/login'>Login</Link></li>
        } */}

        <div className='mt-4'>
        <FaUser size={20} color="white"/>
        </div>

        <li className='text-white font-semibold'><Link to='/'>{user?.displayName}</Link></li>
        <li className='text-white font-semibold'><Link to='/login'>Login</Link></li>

        {/* <li className='text-white font-semibold'><Link to='/'>{
            user.photoURL ?
                <img style={{ height: '40px' }} src={user.photoURL} alt='' />
                : <FaBeer />
        } </Link></li> */}




    </>







    return (
        <div className="navbar h-20 mb-12 bg-gradient-to-br from-blue-900 to-purple-500 flex justify-between px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">

                    <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400 text-2xl font-bold '>Network</h2>


                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>


        </div>
    );
};

export default Navbar;