import "./App.css";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Common/Header";
import UserContext from "./Utils/userContext";
import { useState } from "react";
import CartContext from "./Utils/cartContext";
import appStore from "./UI/appstore";

function App() {
  const [username, setUserName] = useState("asd");
  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ userName: username, setUserName }}>
          <CartContext.Provider value={{ items: "apple" }}>
            <Header />
          </CartContext.Provider>
          {/* <UserContext.Provider value={{ userName: "lalit", fullname: "sid" }}> */}
          <Outlet />
          {/* </UserContext.Provider> */}
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
