import React from "react";
import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="weather-app-total">
          <div class="weather-app">
            <header>
              <SearchForm />
            </header>
            <div className="current-weather" />
            <CurrentWeather />
          </div>
          <div className="bottom-github">
            <small>
              <a
                href="https://github.com/MadalenaAf/SheCodesPlus-WeatherApp"
                target="_blank"
              >
                Open source code{" "}
              </a>
              , by Madalena Ferreira
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
