import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // 1. Define links once
  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      {user && <li><Link to="/profile">My Profile</Link></li>}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/login");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="w-11/12 mx-auto bg-gray-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {/* Mobile Menu */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div>
            <img className="h-16" src="/src/assets/logo.png" alt="Logo" />
          </div>
        </div>

        {/* Desktop Menu - Centralized */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {user ? (
            <>
              <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                <div className="avatar">
                  <div className="w-10 rounded-full border border-primary">
                    <img src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="User" />
                  </div>
                </div>
              </div>
              <button onClick={handleLogOut} className="btn btn-neutral btn-sm">Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;