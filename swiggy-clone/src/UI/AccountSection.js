import "./../Style/cart.css";

const AccountSection = ({ handlePayment }) => {
  return (
    <div className="accountContainer">
      <div className="timeline"></div>
      <div className="accountItems">
        <div className="accountSection">
          <h3>Account</h3>
          <p>
            To place your order now, log in to your existing account or sign up
          </p>
          <div>
            <div>
              <p>Have an Account</p>
              <p>LOG IN</p>
            </div>
            <div>
              <p>New To Food Web?</p>
              <p>SIGN UP</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/ROLL.avif" alt="." />
        </div>
      </div>
      <div className="accountItems">
        <h3>Delivery Address</h3>
      </div>
      <div className="accountItems">
        <div className="accountSection">
          <h3>Payment</h3>
          <p>
            To place your order now, log in to your existing account or sign up
          </p>
          <div>
            <button onClick={handlePayment}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
