import React, { useState, useEffect } from "react";
import "./../Style/cart.css";
import AccountSection from "./AccountSection";
const CartItems = ({ handlePayment, totalPrice }) => {
  // const [totalPrice, setTotalPrice] = useState(0);
  // console.log(totalPrice / 100);
  // useEffect(() => {
  //   let totalPrice = 0;
  //   items.forEach((item) => {
  //     totalPrice += item.quantity * item.card.info.defaultPrice;
  //   });
  //   setTotalPrice(totalPrice);
  // }, [items]);
  return (
    <div className="cartItems">
      <AccountSection handlePayment={handlePayment} />
      <div className="cartInfo">
        <div className="cartInfoContainer">
          <div className="amountHeading">
            <h3>Items in Cart</h3>
          </div>
          <div className="scrollableContent">
            {/* {items.map((r) => {
              return (
                <div className="addedItems">
                  <p>{r.card.info.name}</p>
                  <div className="buttonCont">
                    <button className="">-</button>

                    <span>{r.quantity}</span>
                    <button className="">+</button>
                  </div>
                  <span>
                    ₹{" "}
                    {r.card.info.defaultPrice / 100 || r.card.info.price / 100}
                  </span>
                </div>
              );
            })} */}
            <div className="billDetails">
              <h3>Bill details</h3>
              <div>
                <p>Item Total</p>
                <p>₹ 300</p>
              </div>
              <div>
                <p>Delivery Fee | 3.0 kms</p>
                <p>₹ 43</p>
              </div>
              <div>
                <p>Platform fee</p>
                <p>₹ 5</p>
              </div>
              <div>
                <p>GST and Restaurant Charges</p>
                <p>₹ 79</p>
              </div>
            </div>
          </div>
          <div className="amount">
            <p>TO PAY</p>
            <p>₹ 200</p>
          </div>
        </div>
        <div className="policy">
          <div>
            <h4>
              Review your order and address details to avoid cancellations
            </h4>
            <p>
              <span>Note: </span>
              If you cancel within 60 seconds of placing your order, a 100%
              refund will be issued. No refund for cancellations made after 60
              seconds.
            </p>
            <p>Avoid cancellation as it leads to food wastage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
