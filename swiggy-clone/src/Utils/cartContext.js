import { createContext } from "react";

const CartContext = createContext({
  items: ["apple", "banana"],
});

export default CartContext;
