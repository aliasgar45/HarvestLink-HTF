import { Link } from "react-router-dom";
import "./Community.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Footer from "../Footer/Footer";
import img1 from "../../images/communityimg1.jpg";
import img2 from "../../images/communityimg2.jpg";

const Community = () => {
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
        <label className="community-label">COMMUNITY</label>
      </div>
      <div className="community-cards-div">
        <div className="community-card-1">
          <label className="community-card-1-label">
            Donate food in Ahmedabad; You can feed the Needy with Uday
            Foundation, Most Trusted NGO in Delhi.
          </label>
          <img className="community-card-1-img" src={img1} alt="" />
        </div>
        <div className="community-card-2">
          <label className="community-card-2-label">
            Group of food delivery partners go the extra mile, feed city's needy
            from their pockets
          </label>
          <img className="community-card-2-img" src={img2} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
