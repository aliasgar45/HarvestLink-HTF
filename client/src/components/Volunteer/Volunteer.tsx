import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal"; // Import modal component
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import img from "../../images/hotel.jpg";
import Footer from "../Footer/Footer";
import BASE_URL from "../../../config";

const Volunteer = () => {
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const [foodDetails, setFoodDetails] = useState(null); // State to store food details

  const handleVolunteer = async (requestId) => {
    try {
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
      console.error("Error volunteering:", error);
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
        <label className="volunteer-label">Volunteer</label>
      </div>
      <div style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
        <label className="volunteer-ongoing-orders-label">Ongoing Orders</label>
      </div>
      <div className="volunteer-cards-div">
        <div className="home-page-food-donation-card-div">
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
              <label style={{ fontSize: "1rem" }}>Raddison Blue Restro</label>
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
                  Station road Ahmedabad
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
                  Need Meal for 6 Person
                </label>
              </div>
            </div>
            <div className="home-page-food-donation-card-button-div">
              <label style={{ fontSize:"0.8rem" }}>Do you wanna volunteer?</label>
              <button
                className="home-page-accept-button"
                onClick={() => handleVolunteer("614d740beddcd442f89816c4")} // Pass request ID here
              >
                Yesss
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal to display food details */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className="modal-container"
      >
        <div className="food-details-modal-container">
          <div className="modal-order-created-div">
            <label className="modal-order-created">
              Volunteer Request Accepted!!
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
      <Footer />
    </div>
  );
};

export default Volunteer;
