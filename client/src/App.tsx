import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Onboarding/Login";
import HomePage from "./components/Home/HomePage";
import AddDonation from "./components/Donation/AddDonation";
import AddRequests from "./components/Request/AddRequest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donations/add" element={<AddDonation />} />
        <Route path="/requests/add" element={<AddRequests />} />
      </Routes>
    </Router>
  );
}

export default App;
