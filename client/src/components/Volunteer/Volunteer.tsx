import { Link } from "react-router-dom";
import "./Volunteer.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import img from "../../images/hotel.jpg";
import Footer from "../Footer/Footer";

const Volunteer = () => {
  return (
    <div>
      <div className="volunteer-top-div">
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
                <button className="home-page-accept-button">
                  Yesss
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default Volunteer;
