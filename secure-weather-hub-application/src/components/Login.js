import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';  // Create this file for styling

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithRedirect } = useAuth0();

  const handleLogin = (e) => {
    e.preventDefault();
    // Usually, you'd authenticate the user here, but with Auth0 you don't need this.
    loginWithRedirect({
      redirectUri: window.location.origin,
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
