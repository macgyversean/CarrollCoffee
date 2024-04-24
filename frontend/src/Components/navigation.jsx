import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Order", url: "/order" },
];

const Navigation = ({ primaryNav }) => {
  return (
    <nav>
      <ul>
        {primaryNav.map((link, index) => {
          return (
            <li key={`${link.title}-${index}`} className="NavLink">
              <Link to={link.url}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
