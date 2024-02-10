import "./Donations.css";
import profile from "../../images/ProfilePic.svg";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import img from "../../images/hotel.jpg";

const Donations = () => {
  return (
    <div>
      <div className="donations-top-div">
        <div className="donations-inner-top-div">
          <img src={profile} className="donations-profile-img" />
          <label className="donations-customer-name-label">Hi, Kiara</label>
        </div>
        <div>
          <MenuIcon />
        </div>
      </div>
      <div className="donations-label-div">
        <label className="donations-label">Donation Requests</label>
      </div>
      <div className="donations-cards-div">
         <div>
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
    </div>
  );
};

export default Donations;
