import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import checkoutImg from "../../../src/assets/images/checkout/checkout.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { title, _id, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleOrderConfirm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.firstName.value + " " + form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      name,
      price,
      email,
      phone,
      message,
    };
  };
  return (
    <div>
      {/* checkout page banner start */}
      <div
        className="hero rounded-md overflow-hidden mt-10 mb-20 relative"
        style={{
          backgroundImage: `url("${checkoutImg}")`,
        }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white py-1 px-5">
          <p>
            <Link to="/">Home</Link> / Checkout
          </p>
        </div>
        <div className="hero-overlay bg-opacity-60 py-20 px-5">
          <h3 className="mb-5 text-5xl font-bold text-white">Checkout</h3>
        </div>
      </div>
      {/* checkout page banner end */}
      {/* checkout page content start */}
      <div>
        <h4 className="text-4xl text-black font-bold mt-4">{title}</h4>
        <p className="text-xl text-black mb-8">Price: ${price}</p>
        <form
          action=""
          className=" rounded-md bg-base-200 p-5 md:p-12 lg:p-20"
          onSubmit={handleOrderConfirm}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              defaultValue={user?.email}
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full"
            />
          </div>
          <textarea
            className="textarea w-full rounded-md h-32 mt-8"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <input
            type="submit"
            value="Order Confirm"
            className="w-full p-3 bg-orange-400 rounded-md mt-3 text-xl font-bold text-white cursor-pointer"
          />
        </form>
      </div>
      {/* checkout page content end */}
    </div>
  );
};

export default Checkout;
