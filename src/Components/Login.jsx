import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";
import "../index.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = { username, token: "dummy_token" };
    dispatch({ type: "LOGIN", payload: user });

    navigate("/Product");
  };
  return (
    <>
    <Navbar />
    <div className="cart-log">
      <div className="container">
        <h1 className="cart-heading">Cart Items</h1>

        <div className="add-cart">
          <Cart />
        </div>
      </div>
      <div>
        <h1 className="Login-Page">Product Shop</h1>
        <div className="login">
          <div className="login-form">
            <h1 className="Login-Page"> Login </h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
