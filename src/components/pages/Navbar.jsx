import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Snowflake from "./Snowflake";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Logout failed");
        console.error(error);
      });
  };

  // Common active style for NavLinks
  const navLinkClass = ({ isActive }) => 
    `text-lg font-medium ${isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"}`;

  return (
    <div className="w-full bg-gray-50 shadow-lg sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex items-center justify-between py-4">
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-semibold text-gray-700">
            <span className="flex">
              <span className="inline-flex items-center gap-1 gradient-shine">
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

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            My-Profile
          </NavLink>
          <NavLink to="/my-subscription" className={navLinkClass}>
            My-Subscription
          </NavLink>
        </div>

        {/* User Auth Buttons or Avatar */}
        <div className="hidden md:flex items-center gap-3 min-w-[220px] justify-end">
          {loading ? (
            <div className="w-32 h-10 rounded bg-slate-200 animate-pulse" />
          ) : user ? (
            <>
              <div className="relative group">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-300 shadow-inner shadow-blue-200 hover:scale-105 transition-transform duration-300">
                  <img
                    alt="User avatar"
                    className="w-full h-full object-cover cursor-pointer"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>

                <div className="absolute top-14 right-0 w-60 p-4 backdrop-blur-lg bg-white/70 border border-blue-200 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-300">
                      <img
                        alt="User small avatar"
                        className="w-full h-full object-cover"
                        src={
                          user?.photoURL ||
                          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-800">
                        {user?.displayName || "User Name"}
                      </p>
                      <p className="text-xs text-gray-700 break-words">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 border-t border-blue-100 pt-2 text-center text-sm text-gray-600">
                    ❄️ Stay cozy with IceNest! ❄️
                  </div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="btn bg-red-600 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn bg-blue-600 text-white px-5 py-2 rounded-full shadow-md">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn bg-blue-600 text-white px-5 py-2 rounded-full shadow-md">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 px-6 pb-4 h-screen absolute top-16 left-0 w-full shadow-lg rounded-b-lg">
          <div className="flex flex-col gap-4 mt-4">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className={navLinkClass}
            >
              My-Profile
            </NavLink>
            <NavLink
              to="/my-subscription"
              onClick={() => setIsMenuOpen(false)}
              className={navLinkClass}
            >
              My-Subscription
            </NavLink>

            <div className="flex items-center gap-3 mt-4">
              {loading ? (
                <div className="w-full h-10 bg-slate-200 animate-pulse rounded" />
              ) : user ? (
                <>
                  <div className="w-10 rounded-full overflow-hidden">
                    <img
                      alt="User avatar"
                      src={
                        user.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="btn-sm bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="btn-sm bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="btn-sm bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Register
                    </button>
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