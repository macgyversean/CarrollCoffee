import { Outlet } from "react-router-dom";
import Navigation from "./navigation";
import { Link } from "react-router-dom";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Order", url: "/order" },
  { title: "Contact", url: "/contact" },
];

const Layout = () => {
  return (
    <>
      <Navigation navItems={primaryNav} />
      <Outlet />
    </>
  );
};

export default Layout;
