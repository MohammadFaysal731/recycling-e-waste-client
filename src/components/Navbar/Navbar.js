import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase.init';
import { navbarData } from './navbarData';


const Navbar = () => {
  const [user]=useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const handleSignOut =()=>{
    signOut()
  }
  return (
    <div className="bg-base-200 sticky top-0 z-10">
      <div className="navbar  px-2 max-w-[1440px] mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineBars className="text-primary text-2xl" />
            </label>
            {/* mobile menu */}
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navbarData.slice(0, 5)?.map(({ name, link }, index) => (
                <li className="mx-2" key={index}>
                  <NavLink to={link}>{name}</NavLink>
                </li>
              ))}
              {user ? (
                <>
                  <li className="mx-2">
                    <span className="uppercase border border-primary">
                      {user?.displayName?.slice(0, 1)}
                    </span>
                  </li>
                  <li className="mx-2">
                    <button
                      onClick={handleSignOut}
                      className="hover:text-primary"
                    >
                      Sign out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {navbarData.slice(5, 7)?.map(({ name, link }, index) => (
                    <li className="mx-2" key={index}>
                      <NavLink to={link}>{name}</NavLink>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="text-lg md:text-2xl font-bold text-primary">
            Recycling E Waste
          </Link>
        </div>
        {/* desktop menu */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {navbarData.slice(0, 5)?.map(({ name, link }, index) => (
              <li className="mx-2" key={index}>
                <NavLink to={link}>{name}</NavLink>
              </li>
            ))}
            {user ? (
              <>
                <li className="mx-2">
                  <span className="uppercase border border-primary">
                    {user?.displayName?.slice(0, 1)}
                  </span>
                </li>
                <li className="mx-2">
                  <button
                    onClick={handleSignOut}
                    className="hover:text-primary"
                  >
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <>
                {navbarData.slice(5, 7)?.map(({ name, link }, index) => (
                  <li className="mx-2" key={index}>
                    <NavLink to={link}>{name}</NavLink>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;