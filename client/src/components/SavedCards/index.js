import React, { useState, useEffect } from "react";
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
  let savedCitiesArrayDummy = ["austin"]
  const { loading, error, data } = useQuery(GET_ME);
  console.log('Loading!!!', loading, data)


  const [weather, setWeather] = useState([]);

  const api_key = "3f698036d7cb81fb192ca1a1ad2af845";

  //   for (let i = 0; i < savedCitiesArrayDummy.length; i++) {   
  //     async function weatherData(savedCitiesArrayDummy) {
  //       const data = await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${savedCitiesArrayDummy[i]}&units=imperial&APPID=${api_key}`
  //       )
  //         .then((res) => res.json())
  //         .then((data) => data);

  //       setWeather({ data: data });
  //     }
  // }
  useEffect(() => {

//if(data) {
  var promiseArray = []
  for (let i = 0; i < savedCitiesArrayDummy.length; i++) {
    let promise = new Promise((resolve, reject) => {

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${savedCitiesArrayDummy[i]}&units=imperial&APPID=${api_key}`
      )
        .then((res) => res.json())
        .then((data) => resolve(data));

    })
    promiseArray.push(promise)

  }

  Promise.all(promiseArray).then(function (data) {
    setWeather(data)
  })
//}
    
  }, [])


  if (!weather) {
    return (<div>loading...</div>)
  } else {
    return (
      <div>
       
          <div>{weather.map(city => {
            return (<WeatherCard data={city} />)
          })}</div>
       
      </div>
    );
  }
  
}

export default SavedWeather;