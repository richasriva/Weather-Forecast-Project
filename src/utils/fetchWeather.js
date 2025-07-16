export async function fetchLiveWeather(city) {
  // Get the API key securely from the .env file
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const res = await fetch(
    //fetch weather for next 3 days
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`
  );

   // If response is not OK (status 200–299), throw an error
  if (!res.ok) throw new Error("Failed to fetch live weather");
  const data = await res.json();

  return data.forecast.forecastday.map((day) => ({
    city,
    date: day.date,
    high: Math.round(day.day.maxtemp_c), //structure of weather API data 
    low: Math.round(day.day.mintemp_c),
    condition: day.day.condition.text,
    wind: Math.round(day.day.maxwind_kph / 1.6) // Convert km/h to mph(because API return kmh)
  }));
}
