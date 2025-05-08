// src/components/Navbar/Navbar.jsx
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Snowflake from './Snowflake';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logged out successfully');
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
      })
      .catch(error => {
        toast.error('Logout failed');
        console.error(error);
      });
  };

  return (
    <div className="w-full bg-gray-50 shadow-lg sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex items-center justify-between py-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-semibold text-gray-700">
            <span className='flex'>
              <span className='inline-flex items-center gap-1 gradient-shine'>
                <Snowflake size={28} className="snowflake-gradient" />
              </span>
              Ice<span className="text-blue-600">Nest</span>
            </span>
          </h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className="text-lg font-medium text-gray-700">
            Home
          </NavLink>
          <NavLink to="/profile" className="text-lg font-medium text-gray-700">
            My-Profile
          </NavLink>
          <NavLink to="/subscriptiondetails" className="text-lg font-medium text-gray-700">
            Subscriptions Details
          </NavLink>
          <NavLink to="/my-subscription" className="text-lg font-medium text-gray-700">
          My-Subscription
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <div className="w-10 rounded-full overflow-hidden">
                <img
                  alt="User avatar"
                  src={user.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                />
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-red-600 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-red-700 transition duration-300"
              > Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn bg-blue-600 text-white px-5 py-2 rounded-full shadow-md">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn bg-blue-600 text-white px-5 py-2 rounded-full shadow-md">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 px-6 pb-4 h-screen absolute top-16 left-0 w-full shadow-lg rounded-b-lg">
          <div className="flex flex-col gap-3">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-700">
              Home
            </NavLink>
            <NavLink to="/profile" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-700">
              My-Profile
            </NavLink>
            <NavLink to="/my-subscription" className="text-lg font-medium text-gray-700">
          My-Subscription
          </NavLink>
            <div className="flex items-center gap-3 mt-4">
              {user ? (
                <>
                  <div className="w-10 rounded-full overflow-hidden">
                    <img
                      alt="User avatar"
                      src={user.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                    />
                  </div>
                  <button onClick={handleLogout} className="btn-sm bg-red-600 text-white px-3 py-1 rounded">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn-sm bg-blue-600 text-white px-3 py-1 rounded">Login</button>
                  </Link>
                  <Link to="/register">
                    <button className="btn-sm bg-blue-600 text-white px-3 py-1 rounded">Register</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
