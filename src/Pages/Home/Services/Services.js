import React, { useState, useEffect } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-8">
      <div className="md:w-8/12 mx-auto text-center mb-20">
        <h4 className="text-xl font-semibold text-orange-400">Services</h4>
        <h2 className="text-6xl text-black font-bold mt-1 mb-8">
          Our Service Area
        </h2>
        <p className="text-base text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-orange-400 text-orange-400 hover:border-orange-400 hover:bg-orange-400 rounded-sm mt-5">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
