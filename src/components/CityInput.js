import React from "react";
import PropTypes from "prop-types";
// Import PropTypes Standalone library to add type-checking for the props we pass into this component

// Define a functional component called CityInput
// This component shows a dropdown to let the user pick a city
// It receives three props: list of cities, the selected city, and a function to update the selected city
const CityInput = ({ cities, selectedCity, onCityChange }) => {
  return (
    // Render a <select> dropdown with the current selected city as its value
    // When the user changes the dropdown, call the onCityChange function with the new value-
    <select value={selectedCity} onChange={(e) => onCityChange(e.target.value)}>
      {/* Loop through all cities and create an <option> for each one */}
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

// Define expected prop types for the CityInput component
// This helps catch bugs by warning us if we pass the wrong type of data(in browser console)
CityInput.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default CityInput;
