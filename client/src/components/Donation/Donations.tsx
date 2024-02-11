import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal"; // Import modal component
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import img from "../../images/hotel.jpg";
import BASE_URL from "../../../config";

const Donations = () => {
  const [loading, setLoading] = useState(true);
  const [donationRequests, setDonationRequests] = useState([]);
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const [foodDetails, setFoodDetails] = useState(null); // State to store food details

  useEffect(() => {
    axios.get(`${BASE_URL}/donatedFood/`).then((response) => {
      setDonationRequests(response.data);
      setLoading(false);
    });
  }, []);

  const handleAcceptRequest = async (requestId) => {
    try {
      // Fetch customer ID based on the user's email from the local storage
      const userEmail = localStorage.getItem("userEmail");
      const response = await axios.get(`${BASE_URL}/user/email/${userEmail}`);
      const customerId = response.data.customer_id;

      // Prepare order data
      const orderData = {
        food_id: requestId,
        order_id: "", // You need to set this value
        user_id: customerId,
        order_status: "succeed",
        order_type: "donation",
      };

      // Create the order
      const createOrderResponse = await axios.post(
        `${BASE_URL}/orders/${userEmail}`,
        orderData
      );
      console.log("Order created successfully:", createOrderResponse.data);

      // Fetch food details
      const foodDetailsResponse = await axios.get(
        `${BASE_URL}/donatedFood/${requestId}`
      );
      const foodDetails = foodDetailsResponse.data;

      // Store food details in state
      setFoodDetails(foodDetails);

      // Open the modal
      setOpenModal(true);
    } catch (error) {
      // Handle error
      console.error("Error creating order:", error);
    }
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className="community-top-div">
        <Link to={"/"}>
          <ArrowBackIosNewIcon
            style={{
              width: "1rem",
              color: "var(--primary-color)",
              marginTop: "0.5rem",
            }}
          />
        </Link>
        <label className="donations-label">Donation Requests</label>
      </div>
      {loading ? (
        <div className="loading-spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="donations-cards-div">
          {donationRequests.map((request) => (
            <div key={request.id} className="home-page-food-donation-card-div">
              <div className="home-page-food-donation-card-left-div">
                <img
                  style={{ width: "5.5rem", borderRadius: "0.5rem" }}
                  src={img}
                  alt=""
                />
              </div>
              <div className="home-page-food-donation-card-right-div">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    gap: "0.8rem",
                  }}
                >
                  <label style={{ fontSize: "1rem" }}>{request.orgName}</label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "row",
                    }}
                  >
                    <LocationOnIcon
                      style={{ color: "#b8b8b8", width: "1.5rem" }}
                    />
                    <label style={{ fontSize: "0.8rem", color: "#B8b8b8" }}>
                      {request.address}
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "row",
                    }}
                  >
                    <TakeoutDiningIcon
                      style={{ color: "#b8b8b8", width: "1.5rem" }}
                    />
                    <label style={{ fontSize: "0.8rem", color: "#B8b8b8" }}>
                      Available Meal for {request.foodQuantity} Person
                    </label>
                  </div>
                </div>
                <div className="home-page-food-donation-card-button-div">
                  <button
                    className="home-page-accept-button"
                    onClick={() => handleAcceptRequest(request._id)}
                  >
                    Accept Request
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Modal to display order details */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className="modal-container"
      >
        <div className="order-modal-container">
          <div className="modal-order-created-div">
            <label className="modal-order-created">
              Order Created Successfully!!
            </label>
          </div>

          <h3>Food Details</h3>
          <p>Name: {foodDetails?.orgName}</p>
          <p>Phone No: {foodDetails?.phone_number}</p>
          <p>Email: {foodDetails?.email}</p>
          <p>Address: {foodDetails?.address}</p>
          <p>Food Quantity: {foodDetails?.foodQuantity}</p>
          <p>Food Type: {foodDetails?.food_type}</p>

          {/* Add more food details as needed */}
        </div>
      </Modal>
    </div>
  );
};

export default Donations;
