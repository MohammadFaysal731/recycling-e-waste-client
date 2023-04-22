import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  return (
    <div className="max-w-[1440px] mx-auto p-10">
      <button className="btn btn-xs btn-primary">
        <Link to="/pricing">Back</Link>
      </button>
      <div className="text-primary text-center font-bold text-xl">
        <h1>Service  detail :- {id}</h1>
        <p className="tex">Coming soon</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
