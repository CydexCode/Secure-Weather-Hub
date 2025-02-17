import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    logout({ returnTo: window.location.origin });
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <Link to="/" className="home-link">
            <h2>Secure Weather Hub</h2>
          </Link>
          {isAuthenticated && (
            <Link to="/weather" className="weather-link">
              Weather
            </Link>
          )}
        </div>
        <div className="auth-section">
          {isAuthenticated ? (
            <div className="user-info">
              <span>{user.email}</span>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          ) : (
            <button onClick={loginWithRedirect}>Log In</button>
          )}
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="logout-modal">
          <div className="modal-content">
            <p>Are you sure you want to log out?</p>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={confirmLogout}>Yes</button>
              <button className="cancel-btn" onClick={() => setShowLogoutConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
