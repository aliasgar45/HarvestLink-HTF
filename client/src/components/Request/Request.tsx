import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import img from "../../images/hotel.jpg";
import BASE_URL from "../../../config";

const Request = () => {
  const [loading, setLoading] = useState(true);
  const [donationRequests, setDonationRequests] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/foodRequests/`).then((response) => {
      setDonationRequests(response.data);
      setLoading(false);
    });
  }, []);

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
        <label className="donations-label">Food Requests</label>
      </div>
      {loading ? (
        <div className="loading-spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="donations-cards-div">
          {donationRequests.map((request) => (
            <div
              key={request.id}
              className="home-page-food-donation-card-div"
            >
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
                  <button className="home-page-accept-button">
                    Accept Request
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Request;
