import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

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
    <div>
      <h3>You have total {orders.length} items</h3>
    </div>
  );
};

export default MyOrders;
