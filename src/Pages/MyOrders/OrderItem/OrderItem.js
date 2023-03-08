import React, { useState, useEffect } from "react";

const OrderItem = ({ order }) => {
  const { serviceName, price, service } = order;
  const [orderService, setOrderService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data))
      .catch((error) => console.error(error));
  }, [service]);
  return (
    <tr>
      <th>
        <button className="p-2 text-white bg-black rounded-full border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded-md w-32 h-32">
            <img src={orderService.img} alt="Service" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{serviceName}</div>
      </td>
      <td>
        <p>{price}</p>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default OrderItem;
