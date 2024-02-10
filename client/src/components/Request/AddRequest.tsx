import { Link } from "react-router-dom";
import "./AddRequest.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const AddRequests = () => {
  return (
    <div className="add-request-main-div">
      <div className="add-request-label-div">
        <Link to={"/"}>
          <ArrowBackIosNewIcon
            style={{ width: "1rem", color: "var(--primary-color)",marginTop:"0.5rem" }}
          />
        </Link>
        <label className="add-request-label">Request</label>
      </div>
      <div className="add-request-input-divs">
        <label className="add-request-input-main-label">
          Please Enter your Details
        </label>
        <div className="add-request-indi-input-div">
          <label className="add-request-input-labels">Hotel/Event Name</label>
          <input
            className="add-request-input"
            type="text"
            placeholder="Enter Event or Hotel Name"
          />
        </div>
        <div className="add-request-indi-input-div">
          <label className="add-request-input-labels">Address</label>
          <input
            type="text"
            className="add-request-input"
            placeholder="Enter Address from where the food can be picked"
          />
        </div>
        <div className="add-request-indi-input-div">
          <label className="add-request-input-labels">Phone Number</label>
          <input
            className="add-request-input"
            type="number"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="add-request-indi-input-div">
          <label className="add-request-input-labels">Email</label>
          <input
            className="add-request-input"
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div className="add-request-indi-input-div">
          <label className="add-request-input-labels">Food Type</label>
          <select className="add-request-input">
            <option>Veg</option>
            <option>Non Veg</option>
            <option>Both</option>
          </select>
        </div>
        <div className="add-request-indi-input-div">
          <label className="add-request-input-labels">
            Expiry Date of Food
          </label>
          <input className="add-request-input" type="date" />
        </div>
        <div className="add-request-indi-input-div">
          <label className="add-request-input-labels">
            Food Quantity (Serving Max People)
          </label>
          <input
            className="add-request-input"
            type="number"
            placeholder="Enter Food Quantity"
          />
        </div>
      </div>
      <div className="add-request-submit-div">
        <button className="add-request-submit-button">Submit</button>
      </div>
    </div>
  );
};

export default AddRequests;
