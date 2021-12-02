import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Success from "../pages/Success";
import { Navigate, Outlet } from "react-router-dom";

const routes = (user) => [
  {
    path: "/",
    element: user ? <Home /> : <Navigate to="/login" />,
    children: [
      {
        path: "/products/:category/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products/:category",
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "member",
        element: <Outlet />,
        children: [{ path: "/", element: <Home /> }],
      },
    ],
  },
  {
    path: "/",
    element: !user ? <Login /> : <Navigate to="/" />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default routes;
