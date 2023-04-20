import React, { useEffect, useState } from "react";

const Pricing = () => {
  const [pricing, setPricing] = useState([]);
  useEffect(() => {
    fetch("pricingData.json")
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto p-10">
      <h2 className="text-xl md:text-2xl font-bold text-primary text-center m-5">
        Choose Our Pricing Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pricing?.map(
          (
            { name, image, holds, serves, maxWeight, service, price },
            index
          ) => (
            <div className="card bg-base-100 shadow-xl" key={index}>
              <figure>
                <img src={image} alt="pricing-images" className="h-[200px]" />
              </figure>
              <div className="card-body items-center text-center">
                <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold text-primary">
                    {name}
                  </h2>
                  <h3 className="text-sm md:text-lg">
                    <span className="font-bold"> Holds: </span>
                    {holds}
                  </h3>
                  <h3 className="text-sm md:text-lg">
                    <span className="font-bold">Serves: </span>
                    {serves}
                  </h3>
                  <h3 className="text-sm md:text-lg">
                    <span className="font-bold">Max Weight: </span>
                    {maxWeight}
                  </h3>
                  <h3 className="text-sm md:text-lg">
                    <span className="font-bold">Service: </span>
                    {service}
                  </h3>
                  <h3 className="text-sm md:text-lg font-bold text-primary">
                    $ {price}
                  </h3>
                </div>
                <div className="card-actions">
                  <button className="btn btn-primary">Select Plan</button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Pricing;
