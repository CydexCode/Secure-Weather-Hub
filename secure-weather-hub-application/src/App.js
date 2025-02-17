import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Weather from "./components/Weather";

function App() {
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  // Trigger login only once when the user is not authenticated
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  // Show loading state while authentication is in progress
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Show app content after login
  return isAuthenticated ? (
    <div className="App">
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      <Weather />
    </div>
  ) : (
    <p>Please verify your email before logging in.</p>
  );
}

export default App;
