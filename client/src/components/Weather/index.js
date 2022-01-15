import React, { useState } from "react";
import Display from "../Display";
import "../../App.css";

function Weather() {
  //const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
  });

  const api_key = "3f698036d7cb81fb192ca1a1ad2af845";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Please enter a city");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${api_key}`
      )
        .then((res) => res.json())
        .then((data) => data);
      console.log(data);

      //setWeather({ data: data });
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
    <div className="weather">
      <span className="title">Customize your dashboard</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp;&nbsp;
        <button className="btn" onClick={(e) => weatherData(e)}>
          Search
        </button>
      </form>

      {/* {console.log(weather)} */}
      {/* {weather.data !== undefined ? (
        <div><Display data={weather.data} /></div>
      ) : null} */}
    </div>
  );
}

export default Weather;
