import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Layout from "../pages/Layout";
import Home from "./Home";
import Order, { action as orderAction } from "./Order";

// import Return from "./Return";
const Routes = () => {
  const { isAuth } = useAuth();

  const publicRoutes = [
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Order",
          element: <Order />,
          action: loginAction,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!isAuth ? protectedRoutes : []),
    ...protectedRoutes,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
