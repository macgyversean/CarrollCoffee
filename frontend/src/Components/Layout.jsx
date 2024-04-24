import { Outlet } from "react-router-dom";
import Navigation from "./navigation";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Order", url: "/order" },
];

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
