import React, { useState } from "react";
import "./Login.css";
import pic from "../../images/HarvestLink (2).png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../config";

const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }
  
    try {
      const response = await axios.post(`${BASE_URL}/user/login/`, {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        // Save user email to localStorage
        localStorage.setItem('userEmail', email);
        // Redirect user to home page upon successful login
        navigate("/");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="login-main-div">
      <div className="">
        <img style={{ width: "7.5rem" }} src={pic} alt="" />
      </div>
      <div className="login-welcome-div">
        <label className="login-welcome-label">
          Welcome back to <span style={{ color: "var(--primary-color)" }}>HarvestLink</span>
        </label>
      </div>
      <div className="login-sign-in-div">
        <label className="login-sign-in-label">SIGN IN</label>
        <label>Please sign in to your account</label>
      </div>
      <div className="login-input-div">
        <input
          className="login-inputs"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-inputs"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="forgot-password-label">Forgot Password?</label>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="login-submit-button-div">
        <button className="login-submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <label className="dont-have-account">
          Don't have an account? <Link to={"/signup"}>Sign Up</Link>
        </label>
      </div>
    </div>
  );
};

export default Login;
