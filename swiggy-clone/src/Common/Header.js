// import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import UserContext from "../Utils/userContext";
// import CartContext from "../Utils/cartContext";

const Header = () => {
  // const { userName } = useContext(UserContext);
  // const { items } = useContext(CartContext);
  const items = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="logo__Container">
        <NavLink to={"/"}>
          <img className="logo" src="/images/image.png" />
        </NavLink>
      </div>
      <div className="navItems">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cart {items.length}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
