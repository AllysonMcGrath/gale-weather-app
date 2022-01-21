import React, { useState } from "react";
//import Display from "../Display";
//import WeatherCard from "../WeatherCards";
import "../../App.css";
import WeatherCard from "../WeatherCards";
import "../../index.css";
import env from "react-dotenv";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
  });

  const api_key = env.API_KEY;
  console.log(api_key);
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Please enter a city");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&units=imperial&APPID=${api_key}`
      )
        .then((res) => res.json())
        .then((data) => data);
      console.log(data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
  };
  return (
    <div className="wrap">
      <span className="title"></span>
      <br />
      <form className="search">
        <input
          type="text"
          placeholder="Search your city"
          className="searchTerm"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp;&nbsp;
        <button className="searchButton" onClick={(e) => weatherData(e)}>
          Search
        </button>
      </form>

      {console.log(weather)}
      {weather.data !== undefined ? (
        <div><WeatherCard data={weather.data} /></div>
      ) : null}
    </div>
  );
}

export default Weather;
