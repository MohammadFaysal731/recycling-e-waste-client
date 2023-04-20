import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navbarData } from './navbarData';



const Navbar = () => {
  return (
    <div className="bg-base-200">
      <div className="navbar  px-2 max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarData.map(({ name, link }, index) => (
                <li  className="mx-2" key={index}>
                  <NavLink to={link}>{name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="text-lg md:text-2xl font-bold ">
            Recycling E Waste
          </Link>
        </div>
        {/* desktop menu */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {navbarData.map(({ name, link }, index) => (
              <li className="mx-2" key={index}>
                <NavLink to={link}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;