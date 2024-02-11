import "./Footer.css";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import Person2Icon from "@mui/icons-material/Person2";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isCommunity = location.pathname === "/community";
  const isProfile = location.pathname === "/profile";
  return (
    <div className="footer-main-div">
      <div className="footer-inner-div">
        <Link to={"/"}>
          <div>
            <HomeIcon
              className={isHome ? "footer-icon-color" : "footer-icon"}
            />
          </div>
        </Link>
        <Link to={"/community"} style={{ textDecoration:"none", }}>
          <div>
            <PeopleIcon
              className={isCommunity ? "footer-icon-color" : "footer-icon"}
            />
          </div>
        </Link>
        <Link to={'/profile'}>
          <div>
            <Person2Icon
              className={isProfile ? "footer-icon-color" : "footer-icon"}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
