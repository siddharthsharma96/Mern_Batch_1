import EmptyCart from "../UI/EmptyCart";
import "./../Style/cart.css";
import { useNavigate } from "react-router-dom";
import CartItems from "./../UI/CartItems";
import { useState, useEffect } from "react";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  let items = [];
  useEffect(() => {
    let totalPrice = 0;
    if (items.length !== 0) {
      items.forEach((item) => {
        totalPrice += item.quantity * item.card.info.defaultPrice;
      });
      setTotalPrice(totalPrice / 100);
    }
  }, [items]);

  console.log(totalPrice);
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate(`/`);
  };
  const options = {
    key: "rzp_test_hTBBwZ1lIKgkiA",
    key_secret: "0kvBX77hIOfMCE5L4VVG3VOc",
    amount: parseInt(totalPrice * 100),
    currency: "INR",
    order_receipt: "order_rcptid_",
    name: "E-Bharat",
    description: "for testing purpose",
    handler: function (response) {
      // Handle payment response
      console.log(response);
    },
    theme: {
      color: "#3399cc",
    },
  };

  const handlePayment = () => {
    var pay = new window.Razorpay(options);
    pay.open();
  };
  return (
    <div className="cart">
      {items.length === 0 ? (
        <EmptyCart redirectHandler={redirectHandler} />
      ) : (
        <CartItems handlePayment={handlePayment} totalPrice={totalPrice} />
      )}
    </div>
  );
};

export default Cart;
