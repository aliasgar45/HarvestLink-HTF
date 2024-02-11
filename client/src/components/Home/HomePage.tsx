import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal"; // Import modal component
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import img from "../../images/hotel.jpg";
import order from "../../images/orderFood.png";
import request from "../../images/requestFood.png";
import Footer from "../Footer/Footer";
import volunteer from "../../images/volunteer.png";
import pic from "../../images/HarvestLink (2).png";
import profile from "../../images/ProfilePic.svg";
import "./HomePage.css";
import BASE_URL from "../../../config";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [foodDonation, setFoodDonation] = useState(null);
  const [foodRequest, setFoodRequest] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null); // State to store order details
  const [foodDetails, setFoodDetails] = useState(null); // State to store food details
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    // Fetch most recent food donation
    axios.get(`${BASE_URL}/donatedFood/`).then((response) => {
      const mostRecentDonation = response.data[0];
      setFoodDonation(mostRecentDonation);
    });

    // Fetch most recent food request
    axios.get(`${BASE_URL}/foodRequests/`).then((response) => {
      const mostRecentRequest = response.data[0];
      setFoodRequest(mostRecentRequest);
      setLoading(false); // Set loading to false after fetching data
    });
  }, []);

  const handleAcceptRequest = async (orderType) => {
    try {
      const userEmail = localStorage.getItem("userEmail");
      // Fetch customer ID based on the user's email from the local storage
      const response = await axios.get(`${BASE_URL}/user/email/${userEmail}`);
      const customerId = response.data.customer_id;

      // Prepare order data
      const orderData = {
        food_id: orderType === "donation" ? foodDonation._id : foodRequest._id,
        order_id: "", // You need to set this value
        user_id: customerId,
        order_status: "succeed",
        order_type: orderType,
      };

      // Create the order
      const createOrderResponse = await axios.post(
        `${BASE_URL}/orders/${userEmail}`,
        orderData
      );
      console.log("Order created successfully:", createOrderResponse.data);

      // Fetch food details based on order type
      const foodId =
        orderType === "donation" ? foodDonation._id : foodRequest._id;
      const foodDetailsResponse = await axios.get(
        `${BASE_URL}/${
          orderType === "donation" ? "donatedFood" : "foodRequests"
        }/${foodId}`
      );
      const foodDetails = foodDetailsResponse.data;

      // Store order and food details in state
      setOrderDetails(createOrderResponse.data.order);
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
    <div className="home-main-div">
      <div className="home-page-top-div">
        <div className="home-page-inner-top-div">
          <img
            src={pic}
            style={{
              width: "6.5rem",
              marginLeft: "-1rem",
              marginTop: "-0.5rem",
            }}
            alt=""
          />
        </div>
        <div>
          <img src={profile} className="home-page-profile-img" />
        </div>
      </div>
      {loading ? (
        <div className="loading-spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="home-page-food-request-div">
            <div className="home-page-food-request-labels-div">
              <label className="home-page-food-request-label">
                Food Donation Request
              </label>
              <Link
                to={"/donations"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <label className="home-page-view-all-label">View All</label>
              </Link>
            </div>
            <div className="home-page-food-d-outer-div">
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
                    <label style={{ fontSize: "1rem" }}>
                      {foodDonation?.orgName}
                    </label>
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
                        {foodDonation?.address}
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
                        Available Meal for {foodDonation?.foodQuantity}
                      </label>
                    </div>
                  </div>
                  <div className="home-page-food-donation-card-button-div">
                    <button
                      className="home-page-accept-button"
                      onClick={() => handleAcceptRequest("donation")}
                    >
                      Accept Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-page-category-div">
            <label>Category</label>
            <div className="home-page-category-cards-div">
              <Link
                to={"/donations/add"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div className="home-page-category-card">
                  <div className="home-page-category-img">
                    <img src={order} alt="" />
                  </div>
                  <label style={{ fontSize: "0.9rem" }}>Donate Food</label>
                </div>
              </Link>
              <Link
                to={"/requests/add"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div className="home-page-category-card">
                  <div className="home-page-category-img">
                    <img src={request} alt="" />
                  </div>
                  <label style={{ fontSize: "0.9rem" }}>Need Food</label>
                </div>
              </Link>
              <Link
                to={"/volunteer"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div className="home-page-category-card">
                  <div className="home-page-category-img2">
                    <img src={volunteer} style={{ width: "5.5rem" }} alt="" />
                  </div>
                  <label style={{ fontSize: "0.9rem" }}>Volunteer</label>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-page-food-r-request-div">
            <div className="home-page-food-request-labels-div">
              <label className="home-page-food-request-label">
                Food Request
              </label>
              <Link
                to={"/requests"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <label className="home-page-view-all-label">View All</label>
              </Link>
            </div>
            <div className="home-page-food-d-outer-div" style={{ marginBottom:"6rem" }}>
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
                    <label style={{ fontSize: "1rem" }}>
                      {foodRequest?.orgName}
                    </label>
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
                        {foodRequest?.address}
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
                        Need Meal for {foodRequest?.foodQuantity}
                      </label>
                    </div>
                  </div>
                  <div className="home-page-food-donation-card-button-div">
                    <button
                      className="home-page-accept-button"
                      onClick={() => handleAcceptRequest("request")}
                    >
                      Accept Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          {/* Modal to display order details */}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            className="modal-container"
          >
            <div className="order-modal-container">
              <div  className="modal-order-created-div">
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
        </>
      )}
    </div>
  );
};

export default HomePage;
