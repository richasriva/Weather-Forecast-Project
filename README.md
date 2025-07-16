🌦️ India Weather Forecast App
A React-based weather app that displays a 3-day forecast for major Indian cities using mock data or live weather API (via a toggle switch).

🚀 Features
🔍 Select City from a dropdown of 20 Indian cities

📅 3-Day Forecast shown in a clean, card-style layout

🌤️ Weather Emojis change based on forecast (e.g. ☀️, 🌧️, ⛈️)

⚠️ Prediction Messages like “Extreme Heat Warning” or “Carry an Umbrella”

🔁 Toggle between Mock Data and Live API data (WeatherAPI)

📦 Uses .env file for storing API key securely

🗂️ Folder Structure

weather-ui/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CityInput.jsx
│   │   ├── ForecastCard.jsx
│   │   └── ToggleOfflineMode.jsx
│   ├── data/
│   │   └── mockForecastData.json
│   ├── utils/
│   │   └── fetchWeather.js
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── .env
├── package.json
└── README.md

⚙️ Setup Instructions
Clone the repo

git clone 
cd weather-ui
Install dependencies
npm install
Add your API key

Create a .env file at the root:
REACT_APP_WEATHER_API_KEY=your_api_key_here
Start the app
npm start

📊 Key React Concepts Used
useState – to handle city, forecast, loading, and data mode (mock/live)

useEffect – triggers data fetch on city/mode change

PropTypes – for prop validation in components

Conditional Rendering – to show forecast or loading message

Destructuring & Callbacks – for cleaner, readable code

Array methods – .map(), Set, and spread (...) for unique city extraction

🌐 Live Weather API
Powered by WeatherAPI.com

Wind converted from kph to mph for consistency

If API fails or key is invalid → app falls back to mock data

📝 To-Do / Extensions
Save favorite cities
Progressive web app support

