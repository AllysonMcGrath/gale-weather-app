import React, { useState } from "react";
//import Display from "../Display";
//import WeatherCard from "../WeatherCards";
import { useQuery } from '@apollo/client';
import "../../App.css";
import WeatherCard from "../WeatherCards";
import "../../index.css";
import { GET_ME } from '../../utils/queries';
// import Auth from '../utils/auth';



function SavedWeather() {
    const [userData, setUserData] = useState({});
    let savedCitiesArrayDummy = ["austin", "denver", "seattle"]  
    const {loading, error, data} = useQuery(GET_ME);
    

      const [weather, setWeather] = useState([]);

      const api_key = "3f698036d7cb81fb192ca1a1ad2af845";

      for (let i = 0; i < savedCitiesArrayDummy.length; i++) {   
        async function weatherData(savedCitiesArrayDummy) {
          const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${savedCitiesArrayDummy[i]}&units=imperial&APPID=${api_key}`
          )
            .then((res) => res.json())
            .then((data) => data);
          console.log(data);

          setWeather({ data: data });
        }
    }


  if(data) {
      console.log('savedcities getme')
      console.log('LOOK AT ME THIS IS THE DATA', data)
      savedCitiesArrayDummy = data
  }


  if (!weather) {
    <div></div>
  }

  return (
    <div>
      {weather.data !== undefined ? (
        <div>{savedCitiesArrayDummy.map(city => {
          //api call
            <WeatherCard data={weather.data} />
        })}</div>
      ) : null}
    </div>
  );
}

export default SavedWeather;