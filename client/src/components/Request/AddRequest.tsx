import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import './AddRequest.css';
import BASE_URL from '../../../config';

const AddRequests = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    address: '',
    phone_number: '',
    email: '',
    food_type: '',
    expiryDate: '',
    foodQuantity: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formValid = true;
    const newErrors: { [key: string]: boolean } = { ...errors };
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        formValid = false;
        newErrors[key] = true;
      }
    });
    setErrors(newErrors);
    if (formValid) {
      try {
        const response = await axios.post(`${BASE_URL}/foodRequests/`, formData);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="add-request-main-div">
      <div className="add-request-label-div">
        <Link to="/">
          <ArrowBackIosNewIcon
            style={{ width: '1rem', color: 'var(--primary-color)', marginTop: '0.5rem' }}
          />
        </Link>
        <label className="add-request-label">Request</label>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="add-request-input-divs">
          <label className="add-request-input-main-label">Please Enter your Details</label>
          <div className="add-request-indi-input-div">
            <label className="add-request-input-labels">Hotel/Event Name</label>
            <input
              className="add-request-input"
              type="text"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="Enter Event or Hotel Name"
            />
            {errors.orgName && <span className="error-message">This field is mandatory!</span>}
          </div>
          <div className="add-request-indi-input-div">
            <label className="add-request-input-labels">Address</label>
            <input
              type="text"
              className="add-request-input"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address from where the food can be picked"
            />
            {errors.address && <span className="error-message">This field is mandatory!</span>}
          </div>
          <div className="add-request-indi-input-div">
            <label className="add-request-input-labels">Phone Number</label>
            <input
              className="add-request-input"
              type="number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Enter Phone Number"
            />
            {errors.phone_number && <span className="error-message">This field is mandatory!</span>}
          </div>
          <div className="add-request-indi-input-div">
            <label className="add-request-input-labels">Email</label>
            <input
              className="add-request-input"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
            {errors.email && <span className="error-message">This field is mandatory!</span>}
          </div>
          <div className="add-request-indi-input-div">
            <label className="add-request-input-labels">Food Type</label>
            <select
              className="add-request-input"
              name="food_type"
              value={formData.food_type}
              onChange={handleChange}
            >
              <option value="">Select Food Type</option>
              <option value="Veg">Veg</option>
              <option value="Non Veg">Non Veg</option>
              <option value="Both">Both</option>
            </select>
            {errors.food_type && <span className="error-message">This field is mandatory!</span>}
          </div>
          <div className="add-request-indi-input-div">
            <label className="add-request-input-labels">Expiry Date of Food</label>
            <input
              className="add-request-input"
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
            {errors.expiryDate && <span className="error-message">This field is mandatory!</span>}
          </div>
          <div className="add-request-indi-input-div">
            <label className="add-request-input-labels">Food Quantity (Serving Max People)</label>
            <input
              className="add-request-input"
              type="number"
              name="foodQuantity"
              value={formData.foodQuantity}
              onChange={handleChange}
              placeholder="Enter Food Quantity"
            />
            {errors.foodQuantity && <span className="error-message">This field is mandatory!</span>}
          </div>
        </div>
        <div className="add-request-submit-div">
          <button type="submit" className="add-request-submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddRequests;
