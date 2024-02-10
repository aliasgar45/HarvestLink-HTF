import "./Request.css";
import profile from "../../images/ProfilePic.svg";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import img from "../../images/hotel.jpg";

const Requests = () => {
  return (
    <div>
      <div className="requests-top-div">
        <div className="requests-inner-top-div">
          <img src={profile} className="requests-profile-img" />
          <label className="requests-customer-name-label">Hi, Kiara</label>
        </div>
        <div>
          <MenuIcon />
        </div>
      </div>
      <div className="requests-label-div">
        <label className="requests-label">Food Requests</label>
      </div>
      <div className="requests-cards-div">
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
    </div>
  );
};

export default Requests;
