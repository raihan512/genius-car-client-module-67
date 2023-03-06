import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Service = ({ service }) => {
  const { title, img, price } = service;
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
          <button>
            <BsArrowRight className="text-lg text-orange-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
