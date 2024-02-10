import "./HomePage.css";
import profile from "../../images/ProfilePic.svg";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import img from "../../images/hotel.jpg";
import order from "../../images/orderFood.png";
import request from "../../images/requestFood.png";
import Footer from "../Footer/Footer";
import volunteer from "../../images/volunteer.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="home-page-top-div">
        <div className="home-page-inner-top-div">
          <img src={profile} className="home-page-profile-img" />
          <label className="home-page-customer-name-label">Hi, Kiara</label>
        </div>
        <div>
          <MenuIcon />
        </div>
      </div>
      <div className="home-page-food-request-div">
        <div className="home-page-food-request-labels-div">
          <label className="home-page-food-request-label">
            Food Donation Request
          </label>
          <label className="home-page-view-all-label">View All</label>
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
                    5km(Near XYZ Place)
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
                    Available Meal for 6 Person
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
        </div>
      </div>
      <div className="home-page-category-div">
        <label>Category</label>
        <div className="home-page-category-cards-div">
          <Link to={'/donation/add'} style={{ textDecoration:"none",color:"#000" }}>
            <div className="home-page-category-card">
              <div className="home-page-category-img">
                <img src={order} alt="" />
              </div>
              <label style={{ fontSize: "0.9rem" }}>Order Food</label>
            </div>
          </Link>
          <Link to={'/donation/add'} style={{ textDecoration:"none",color:"#000" }}>
          <div className="home-page-category-card">
            <div className="home-page-category-img">
              <img src={request} alt="" />
            </div>
            <label style={{ fontSize: "0.9rem" }}>Need Food</label>
          </div>
          </Link>
          <Link to={'/donation/add'} style={{ textDecoration:"none",color:"#000" }}>
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
          <label className="home-page-food-request-label">Food Request</label>
          <label className="home-page-view-all-label">View All</label>
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
                    5km(Near XYZ Place)
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
                <button className="home-page-accept-button">
                  Accept Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
