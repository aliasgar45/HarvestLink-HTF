import { Link } from "react-router-dom";
import "./Profile.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import profile from "../../images/ProfilePic.svg";
import Footer from "../Footer/Footer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Profile = () => {
  return (
    <div>
      <div className="profile-top-div">
        <Link to={"/"}>
          <ArrowBackIosNewIcon
            style={{
              width: "1rem",
              color: "var(--primary-color)",
              marginTop: "0.5rem",
            }}
          />
        </Link>
        <label className="profile-label">Edit Profile</label>
      </div>
      <div className="profile-pic-div">
        <img style={{ width: "7rem" }} src={profile} alt="" />
      </div>
      <div className="profile-cards-div">
        <div className="profile-cards">
          <label>Food Requests</label>
          <ChevronRightIcon />
        </div>
        <div className="profile-cards">
          <label>Food Donations</label>
          <ChevronRightIcon />
        </div>
        <div className="profile-cards">
          <label>Volunteer Services</label>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="profile-thank-you-div">
        <label className="profile-thank-you-label">
          Thank you for being part of our initiative :)
        </label>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
