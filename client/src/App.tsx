import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Onboarding/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;