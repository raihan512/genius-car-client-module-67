import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-md p-5">
      <figure className="">
        <img src={img} alt="" className="rounded-md h-60 mb-5" />
      </figure>
      <div className="items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex w-full justify-between items-center">
          <p className="text-base font-bold text-orange-400">
            Price: $ <span>{price}</span>
          </p>
          <Link to={`/service/${_id}`}>
            <BsArrowRight className="text-lg text-orange-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
