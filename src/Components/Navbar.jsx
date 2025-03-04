import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart?.cart) || [];

  const cartCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="div-title container">
        <h2 className="user">
          {auth?.username ? `Welcome ${auth.username}` : "Loading..."}
        </h2>
        {auth?.isAuthenticated && (
          <span className="cart-count">
            Cart: {cartCount} {cartCount !== 1 ? "items" : "item"}
          </span>
        )}
      </div>

      <button className="log-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
