import React from "react";
import { Link } from "react-router-dom";
import Page404 from "../assets/404.png";
const NotFound = () => {
  return (
    <div className="relative">
      <img src={Page404} alt="page404" className="w-full" />
      <div className="text-center m-6 absolute bottom-40 left-40 md:bottom-96 md:left-96 lg:bottom-[800px] lg:left-[800px]">
        <span>
          Back to
          <Link to="/">
            <button className="btn btn-xs btn-primary">Home</button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
