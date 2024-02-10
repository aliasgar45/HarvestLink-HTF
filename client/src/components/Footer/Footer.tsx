import "./Footer.css";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Person2Icon from "@mui/icons-material/Person2";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isCommunity = location.pathname === "/community";
  const isNotification = location.pathname === "/notificatio";
  const isProfile = location.pathname === "/profile";
  return (
    <div className="footer-main-div">
      <div className="footer-inner-div">
        <div>
          <HomeIcon
            className={isHome ? "footer-icon-color" : "footer-icon"}
          />
        </div>
        <div>
          <PeopleIcon
            className={isCommunity ? "footer-icon-color" : "footer-icon"}
          />
        </div>
        <div>
          <NotificationsNoneIcon
            className={isNotification ? "footer-icon-color" : "footer-icon"}
          />
        </div>
        <div>
          <Person2Icon
            className={isProfile ? "footer-icon-color" : "footer-icon"}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
