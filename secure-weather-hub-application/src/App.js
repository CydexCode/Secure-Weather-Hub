import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Weather from "./components/Weather";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {isAuthenticated && <Route path="/weather" element={<Weather />} />}
      </Routes>
    </Router>
  );
}
export default App;
