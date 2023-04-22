import React from "react";
import { Link } from "react-router-dom";
import banner1 from '../../assets/banner-1.png';
import banner2 from '../../assets/banner-2.png';
import banner3 from '../../assets/banner-3.png';
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 p-10 place-items-center">
            <div className="mb-5">
              <div className="text-primary font-bold">
                <h2 className="text-4xl">ELECTRONIC</h2>
                <h3 className="text-3xl mt-3">RECYCLING</h3>
              </div>
              <p className="py-6">
                E-waste recycling is the process of extracting valuable
                materials after shredding the e-waste into tiny pieces that
                could be reused in a new electronic appliance. But a number of
                current challenges are preventing the electronic recycling
                industry from scaling up
              </p>
              <button className="btn btn-primary">
                <Link to="/contact">Get Started</Link>
              </button>
            </div>
            <div className="">
              <img
                src={banner1}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 p-10 place-items-center">
            <div className="mb-5">
              <div className="text-primary font-bold">
                <h2 className="text-4xl">E - Waste</h2>
                <h3 className="text-3xl mt-3">Business For Its</h3>
              </div>

              <p className="py-6">
                E-Waste Recycling Process There is an e-waste recycling plant
                where the end-of-life electronic products which are collected
                from the consumers are transferred for the recycling process.
                Such end-of-life products are transported to the recycling plant
                for segregation, dismantling, treatment and disposal.
              </p>
              <button className="btn btn-primary">
                <Link to="/contact">Get Started</Link>
              </button>
            </div>
            <div className="">
              <img
                src={banner2}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 p-10 place-items-center">
            <div className="mb-5">
              <div className="text-primary font-bold ">
                <h2 className="text-4xl">Did you know About ?</h2>
                <h3 className="text-3xl mt-3">International E - Waste Day</h3>
              </div>

              <p className="py-6">
                Each year, International E-Waste Day is held on 14<sup>th</sup>,
                October, 2020 an opportunity to reflect on the impacts of
                e-waste and the necessary actions to enhance circularity for
                e-products.
              </p>

              <button className="btn btn-primary">
                <Link to="/contact">Get Started</Link>
              </button>
            </div>
            <div className="">
              <img
                src={banner3}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs btn-primary">
          1
        </a>
        <a href="#item2" className="btn btn-xs btn-primary">
          2
        </a>
        <a href="#item3" className="btn btn-xs btn-primary">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
