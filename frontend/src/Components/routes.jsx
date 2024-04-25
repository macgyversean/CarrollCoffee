import Layout from "./Layout";
import Home from "../Pages/home";
import Order from "../Pages/Order";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ErrorPage";
import Contact from "../Pages/contact";

const Routes = () => {
  const routes = [
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
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};
export default Routes;
