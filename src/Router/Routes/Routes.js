import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Login from "../../Pages/Auth/Login/Login";
import Signup from "../../Pages/Auth/Signup/Signup";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

export const Routess = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/myorders",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);
