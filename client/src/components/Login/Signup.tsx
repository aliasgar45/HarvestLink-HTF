import React, { useState } from "react";
import "./Signup.css";
import pic from "../../images/HarvestLink (2).png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../config";

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !phoneNo || !email || !password || !role) {
      setErrorMessage("All fields are compulsory");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/user/`, {
        name: fullName,
        email: email,
        password: password,
        role: role,
        phone_number: phoneNo,
      });
      if (response.status === 201) {
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
    <div className="sign-main-div">
      <div className="">
        <img style={{ width: "7.5rem" }} src={pic} alt="" />
      </div>
      <div className="sign-welcome-div">
        <label className="sign-welcome-label">
          Welcome to{" "}
          <span style={{ color: "var(--primary-color)" }}>HarvestLink</span>
        </label>
      </div>
      <div className="sign-in-div">
        <label className="sign-in-label">SIGN UP</label>
        <label>Create Your account</label>
      </div>
      <div className="sign-input-div">
        <input
          className="sign-inputs"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="sign-inputs"
          type="number"
          placeholder="Phone No"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <input
          className="sign-inputs"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="sign-inputs"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className="sign-inputs"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Organizations">Organizations</option>
          <option value="Donar">Donar</option>
        </select>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="sign-submit-button-div">
        <button className="sign-submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <label className="already-have-account">
          ALready have an account? <Link to={"/login"}>Login</Link>
        </label>
      </div>
    </div>
  );
};

export default Signup;
