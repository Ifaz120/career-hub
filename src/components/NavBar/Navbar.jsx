import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/login");
      })
      .catch((error) => toast.error(error.message));
  };

  
  const links = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>Home</NavLink></li>
      {user && <li><NavLink to="/profile">My Profile</NavLink></li>}
      <li><NavLink to="/contact">Contact Us</NavLink></li>
    </>
  );

  return (
    
    <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="navbar w-11/12 mx-auto px-0 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-2 pl-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {/* Mobile Menu Styling */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[50] mt-3 w-52 p-4 shadow-2xl border border-gray-100">
              {links}
            </ul>
          </div>
          
          <Link to="/" className="flex items-center">
            <img className="h-10 md:h-14 lg:h-16 w-auto object-contain" src="/src/assets/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu - Modern Spacing */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-base font-medium">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="tooltip tooltip-bottom hidden md:block" data-tip={user?.displayName}>
                <div className="avatar cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-10 md:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="User" />
                  </div>
                </div>
              </div>
              <button 
                onClick={handleLogOut} 
                className="btn btn-neutral btn-sm md:btn-md rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm md:btn-md rounded-full px-8 shadow-md hover:shadow-lg transition-all text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;