import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import checkoutImg from "../../../src/assets/images/checkout/checkout.png";
import { Link } from "react-router-dom";
import OrderItem from "./OrderItem/OrderItem";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));
  }, [user?.email]);
  return (
    <div className="my-8">
      {/* Service page banner start */}
      <div
        className="hero rounded-md overflow-hidden mt-10 mb-20 relative"
        style={{
          backgroundImage: `url("${checkoutImg}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 py-20 px-5">
          <h3 className="mb-5 text-5xl font-bold text-white">
            Service Details
          </h3>
          <p className="text-base text-orange-400">
            <Link to="/">Home</Link> - My Orders
          </p>
        </div>
      </div>
      {/* Service page banner end */}
      {/* Orders Table Start */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {orders.map((order) => (
              <OrderItem key={order._id} order={order}></OrderItem>
            ))}
          </tbody>
        </table>
      </div>
      {/* Orders Table End */}
    </div>
  );
};

export default MyOrders;
