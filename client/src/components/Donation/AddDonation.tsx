import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddDonation.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "axios";
import BASE_URL from "../../../config.ts";
import Modal from "@mui/material/Modal";

const AddDonation: React.FC = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    address: "",
    phone_number: "",
    email: "",
    food_type: "",
    expiryDate: "",
    foodQuantity: "",
  });
  const [errors, setErrors] = useState({
    orgName: false,
    address: false,
    phone_number: false,
    email: false,
    food_type: false,
    expiryDate: false,
    foodQuantity: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let formValid = true;
    const newErrors: { [key: string]: boolean } = { ...errors };
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        formValid = false;
        newErrors[key] = true;
      }
    });
    setErrors(newErrors);
    if (formValid) {
      try {
        const response = await axios.post(`${BASE_URL}/donatedFood/`, formData);
        console.log("Response:", response.data);
        setOpenModal(true);
        // Redirect or show success message as needed
      } catch (error) {
        console.error("Error:", error);
        // Handle error
      }
    }
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="add-donation-main-div">
      <div className="add-donation-label-div">
        <Link to={"/"}>
          <ArrowBackIosNewIcon
            style={{
              width: "1rem",
              color: "var(--primary-color)",
              marginTop: "0.5rem",
            }}
          />
        </Link>
        <label className="add-donation-label">Donation</label>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="add-donation-input-divs">
          <label className="add-donation-input-main-label">
            Please Enter your Details
          </label>
          <div className="add-donation-indi-input-div">
            <label className="add-donation-input-labels">
              Hotel/Event Name
            </label>
            <input
              className="add-donation-input"
              type="text"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="Enter Event or Hotel Name"
            />
            {errors.orgName && (
              <span className="error-message">This field is mandatory!</span>
            )}
          </div>
          <div className="add-donation-indi-input-div">
            <label className="add-donation-input-labels">Address</label>
            <input
              type="text"
              className="add-donation-input"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address from where the food can be picked"
            />
            {errors.address && (
              <span className="error-message">This field is mandatory!</span>
            )}
          </div>
          <div className="add-donation-indi-input-div">
            <label className="add-donation-input-labels">Phone Number</label>
            <input
              className="add-donation-input"
              type="number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Enter Phone Number"
            />
            {errors.phone_number && (
              <span className="error-message">This field is mandatory!</span>
            )}
          </div>
          <div className="add-donation-indi-input-div">
            <label className="add-donation-input-labels">Email</label>
            <input
              className="add-donation-input"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
            {errors.email && (
              <span className="error-message">This field is mandatory!</span>
            )}
          </div>
          <div className="add-donation-indi-input-div">
            <label className="add-donation-input-labels">Food Type</label>
            <select
              className="add-donation-input"
              name="food_type"
              value={formData.food_type}
              onChange={handleChange}
            >
              <option value="Veg">Veg</option>
              <option value="Non Veg">Non Veg</option>
              <option value="Both">Both</option>
            </select>
            {errors.food_type && (
              <span className="error-message">This field is mandatory!</span>
            )}
          </div>
          <div className="add-donation-indi-input-div">
            <label className="add-donation-input-labels">
              Expiry Date of Food
            </label>
            <input
              className="add-donation-input"
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
            {errors.expiryDate && (
              <span className="error-message">This field is mandatory!</span>
            )}
          </div>
          <div className="add-donation-indi-input-div">
            <label className="add-donation-input-labels">
              Food Quantity (Serving Max People)
            </label>
            <input
              className="add-donation-input"
              type="number"
              name="foodQuantity"
              value={formData.foodQuantity}
              onChange={handleChange}
              placeholder="Enter Food Quantity"
            />
            {errors.foodQuantity && (
              <span className="error-message">This field is mandatory!</span>
            )}
          </div>
        </div>
        <div className="add-donation-submit-div">
          <button type="submit" className="add-donation-submit-button">
            Submit
          </button>
        </div>
      </form>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className="modal-container"
      >
        <div className="donation-modal">
          <div className="modal-order-created-div">
            <label className="modal-order-created">
              Details Added Successfully!!
            </label>
          </div>
          <div>
            <Link to={'/'}>
              <button className="donation-back-button">Back to Home</button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddDonation;
