import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [services, setServices]=useState([]);
  useEffect(()=>{
    fetch("serviceData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));  
  },[])
  const navigate = useNavigate();
  
  const handleNavigate =id=>{
    navigate(`/services/${id}`)
  }

  return (
    <div className="max-w-[1440px] mx-auto p-10">
      <h2 className="text-xl md:text-2xl font-bold text-primary text-center m-5">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map(({_id, name, description, image, price }, index) => (
          <div className="card bg-base-100 shadow-xl" key={index}>
            <figure className="px-10 pt-10">
              <img src={image} alt="service-images" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary">{name}</h2>
              <p title={description}>{description?.slice(0, 100)}...</p>
              <div className="card-actions">
                {/* The button to open modal */}
                {/* <label
                  htmlFor="service-booking-modal"
                  className="btn btn-primary"
                >
                  Buy Now
                </label> */}
                <button onClick={()=>handleNavigate(_id)} className="btn btn-primary">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* <ServiceBookingModal /> */}
      </div>
    </div>
  );
};

export default Services;