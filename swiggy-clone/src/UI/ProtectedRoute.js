import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(token, "jfryfgey");

  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectRoute;
