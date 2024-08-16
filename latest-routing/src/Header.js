import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="navItems">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          Home
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          About Us
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/Contact"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
