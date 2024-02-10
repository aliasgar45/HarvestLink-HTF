import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Onboarding/Login";
import HomePage from "./components/Home/HomePage";
import AddDonation from "./components/Donation/AddDonation";
import AddRequests from "./components/Request/AddRequest";
import Donations from "./components/Donation/Donations";
import Requests from "./components/Request/Request";
import Community from "./components/Community/Community";
import Profile from "./components/Profile/Profile";
import Volunteer from "./components/Volunteer/Volunteer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donations/add" element={<AddDonation />} />
        <Route path="/requests/add" element={<AddRequests />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/volunteer" element={<Volunteer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
