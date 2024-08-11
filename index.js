// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

let getweather = async function() {
  const response = await fetch('https://api.codetabs.com/v1/weather?city=seattle');
  const json = await response.json(); // Parse the response as JSON
  return json;
}

app.get("/api", async (req, res) => { 
  // Use async/await for the route handler
  try {
    const weatherData = await getweather(); // Wait for the weather data
    res.json(weatherData); // Send the weather data as JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
