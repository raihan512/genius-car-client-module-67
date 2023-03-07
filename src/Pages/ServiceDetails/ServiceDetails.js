import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import checkoutImg from "../../../src/assets/images/checkout/checkout.png";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const { title, img, description, price, _id } = useLoaderData();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {/* Service page banner start */}
      <div
        className="hero rounded-md overflow-hidden mt-10 mb-20 relative"
        style={{
          backgroundImage: `url("${checkoutImg}")`,
        }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white py-1 px-5">
          <p>
            <Link to="/">Home</Link> / {title}
          </p>
        </div>
        <div className="hero-overlay bg-opacity-60 py-20 px-5">
          <h3 className="mb-5 text-5xl font-bold text-white">
            Service Details
          </h3>
        </div>
      </div>
      {/* Service page banner end */}
      {/* service page content start */}
      <div className="flex justify-between">
        {/* service page content left start */}
        <div className="w-3/4 rounded-md pr-10">
          <div
            className="w-full h-80 rounded-md"
            style={{
              backgroundImage: `url("${img}")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <h4 className="text-4xl text-black font-bold my-4">{title}</h4>
          <p className="text-gray-500 text-base">{description}</p>
        </div>
        {/* service page content left end */}
        {/* service page content right start */}
        <div className="w-1/4">
          <div className="">
            <h5 className="text-3xl font-bold text-black mb-5">Services</h5>
            <div className="p-4 bg-gray-200 rounded-md">
              {services.map((service) => (
                <div key={service._id}>
                  <Link
                    to={`/service/${service._id}`}
                    className="flex justify-between items-center p-4 bg-gray-50 mb-5 rounded-md"
                  >
                    {service.title}
                    <BsArrowRight className="text-lg text-orange-400" />
                  </Link>
                </div>
              ))}
            </div>
            <p className="my-5 text-4xl font-bold">Price: ${price}</p>
            <button className="p-3 bg-orange-400 w-full rounded-md text-white font-bold text-xl">
              <Link to={`/checkout/${_id}`}>Proceed To Checkout</Link>
            </button>
          </div>
        </div>
        {/* service page content right end */}
      </div>
      {/* service page content end */}
    </div>
  );
};

export default ServiceDetails;
