import { Link } from "react-router-dom";
import "./AddDonation.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const AddDonation = () => {
  return (
    <div className="add-donation-main-div">
      <div className="add-donation-label-div">
        <Link to={"/"}>
          <ArrowBackIosNewIcon
            style={{ width: "1rem", color: "var(--primary-color)",marginTop:"0.5rem" }}
          />
        </Link>
        <label className="add-donation-label">Donation</label>
      </div>
      <div className="add-donation-input-divs">
        <label className="add-donation-input-main-label">
          Please Enter your Details
        </label>
        <div className="add-donation-indi-input-div">
          <label className="add-donation-input-labels">Hotel/Event Name</label>
          <input
            className="add-donation-input"
            type="text"
            placeholder="Enter Event or Hotel Name"
          />
        </div>
        <div className="add-donation-indi-input-div">
          <label className="add-donation-input-labels">Address</label>
          <input
            type="text"
            className="add-donation-input"
            placeholder="Enter Address from where the food can be picked"
          />
        </div>
        <div className="add-donation-indi-input-div">
          <label className="add-donation-input-labels">Phone Number</label>
          <input
            className="add-donation-input"
            type="number"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="add-donation-indi-input-div">
          <label className="add-donation-input-labels">Email</label>
          <input
            className="add-donation-input"
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div className="add-donation-indi-input-div">
          <label className="add-donation-input-labels">Food Type</label>
          <select className="add-donation-input">
            <option>Veg</option>
            <option>Non Veg</option>
            <option>Both</option>
          </select>
        </div>
        <div className="add-donation-indi-input-div">
          <label className="add-donation-input-labels">
            Expiry Date of Food
          </label>
          <input className="add-donation-input" type="date" />
        </div>
        <div className="add-donation-indi-input-div">
          <label className="add-donation-input-labels">
            Food Quantity (Serving Max People)
          </label>
          <input
            className="add-donation-input"
            type="number"
            placeholder="Enter Food Quantity"
          />
        </div>
      </div>
      <div className="add-donation-submit-div">
        <button className="add-donation-submit-button">Submit</button>
      </div>
    </div>
  );
};

export default AddDonation;
