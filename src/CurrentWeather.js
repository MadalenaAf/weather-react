import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  const weatherData = {
    city: "Lisbon",
    date: "Friday 10:00h",
    description: "Clear Sky",
    Humidity: 30,
    Wind: 40,
  };

  return (
    <div className="row current-weather">
      <div className="col-6 city-weekday">
        <h1 ClassName="city">{weatherData.city}</h1>
        <ul>
          <li className="date">Last updated : {weatherData.date}</li>
          <li ClassName="description">{weatherData.description}</li>
          <li className="Humidity">Humidity: {weatherData.Humidity}%</li>
          <li className="wind">Wind: {weatherData.Wind}km/h</li>
        </ul>
      </div>
      <div className="col-6 image-temperature">
        <span className="temperature-value">12 </span>
        <span className="temperature-units">
          <a href="XX">Cº</a> |<a href="YY">Fº</a>
        </span>
        <span>
          <i className="fas fa-sun icon-today-weather" />
        </span>
        <ul />
      </div>
    </div>
  );
}
