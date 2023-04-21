import React from "react";
import { FaTractor } from "react-icons/fa";
import { FiTrash, FiUsers } from "react-icons/fi";
import AboutImage from "../assets/about.png";
const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-primary text-center m-5">
        About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-12">
        <div className="">
          <div className="text-primary font-bold">
            <h2 className="text-4xl">Experience in waste disposal</h2>
            <h3 className="text-3xl mt-3">Management Services</h3>
          </div>
          <div className="grid grid-cols-2">
            {/* happy clients */}
            <div className="mt-8 text-primary ">
              <div className="flex items-center text-2xl">
                <FiUsers className="text-5xl" />
                <h3 className="mx-2 text-4xl font-bold">20 k</h3>
              </div>
              <span>Happy Clients</span>
            </div>
            {/* total industries */}
            <div className="mt-8 text-primary">
              <div className="flex items-center text-2xl">
                <FiTrash  className="y text-5xl" />
                <h3 className="mx-2 text-4xl font-bold">80 k</h3>
              </div>
              <span>Total Industries Served</span>
            </div>
            {/* waste picked */}
            <div className="mt-8 text-primary">
              <div className="flex items-center text-2xl">
                <FaTractor className=" text-5xl" />
                <h3 className="mx-2 text-4xl font-bold">205 k</h3>
              </div>
              <span>Waste Picked & Dispose</span>
            </div>
          </div>
        </div>
        <div className="">
          <img src={AboutImage} alt="AboutImage" />
        </div>
      </div>
    </div>
  );
};

export default About;
