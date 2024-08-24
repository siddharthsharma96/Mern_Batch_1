const EmptyCart = ({ redirectHandler }) => {
  return (
    <div className="emptyCart">
      <img src="/images/Cart_empty.png" alt="." />
      <p>Your Cart is empty</p>
      <span>You can go to home page to view more restaurants</span>
      <button onClick={redirectHandler}>See restaurants near you</button>
    </div>
  );
};

export default EmptyCart;
