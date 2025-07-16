import React from "react";
import PropTypes from "prop-types";

const ToggleOfflineMode = ({ isOffline, toggleOffline }) => {
  return (
     // Render a button. When it's clicked, call the toggleOffline function
    <button onClick={toggleOffline}>
      {isOffline ? "Go Online" : "Go Offline"}
    </button>
  );
};

// This helps catch bugs by warning us if we pass the wrong type of data, use for strict coding
ToggleOfflineMode.propTypes = {
  isOffline: PropTypes.bool.isRequired,
  toggleOffline: PropTypes.func.isRequired
};

export default ToggleOfflineMode;