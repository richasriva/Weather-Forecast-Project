// Import core React functionality and styling
import React, { useEffect, useState } from "react";
import ForecastCard from "./components/ForecastCard"; // Component to show 3-day forecast
import mockData from "./data/mockForecastData.json";  // Local mock data
import { fetchLiveWeather } from "./utils/fetchWeather"; // Function to fetch live API weather
import "./styles.css"; // App styling

function App() {
  // State to track selected city, forecast data, data source, and loading status
  const [city, setCity] = useState("Delhi");
  const [forecasts, setForecasts] = useState([]);
  const [useMock, setUseMock] = useState(false);
  const [loading, setLoading] = useState(false);

  // Effect hook to load forecast data when city or data mode changes
  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Show loading while fetching

      try {
        if (useMock) {
          // Load mock data for selected city
          const filtered = mockData.filter((item) => item.city === city);
          setForecasts(filtered);
        } else {
          // Fetch live weather data for selected city
          const liveData = await fetchLiveWeather(city);
          setForecasts(liveData);
        }
      } catch (err) {
        // If live fetch fails, fallback to mock data
        console.error("Error loading data:", err);
        const fallback = mockData.filter((item) => item.city === city);
        setForecasts(fallback);
        setUseMock(true); // Auto-switch to mock mode
      } finally {
        setLoading(false); // Hide loading once data is ready
      }
    };

    loadData(); // Run data fetch function
  }, [city, useMock]); // Re-run when city or mode changes

  // Extract unique city names from mock data for dropdown
  const uniqueCities = [...new Set(mockData.map((d) => d.city))];

  return (
    <div className="app">
      <h1 className="title">🌦️ India Weather Forecast</h1>
      <div className="controls">
        <select onChange={(e) => setCity(e.target.value)} value={city}>
          {uniqueCities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <button onClick={() => setUseMock((prev) => !prev)}>
          {useMock ? "🔁 Use Live Weather" : "📦 Use Mock Data"}
        </button>
      </div>
      {loading ? (
        <p>Loading weather...</p>
      ) : (
        <ForecastCard forecasts={forecasts} />
      )}
    </div>
  );
}

export default App;
