import React, { useState, useEffect } from "react";
//import Display from "../Display";
//import WeatherCard from "../WeatherCards";
import { useQuery } from '@apollo/client';
import "../../App.css";
import SingleSavedCards from "../SingleSavedCards";
import "../../index.css";
import { GET_ME } from '../../utils/queries';
// import Auth from '../utils/auth';



function SavedWeather() {
  const [userData, setUserData] = useState({});
  const { loading, error, data } = useQuery(GET_ME);
  console.log('Loading!!!', loading, data)


  const [weather, setWeather] = useState([]);

  const api_key = "b579564ec60f2efd0d30f05fbccce8ee";

  useEffect(() => {
    console.log('useeffect called')
  let savedCitiesArrayDummy = ["austin", "seattle", "denver"]


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
   Promise.all(promiseArray).then(async function (data) {
   setWeather(data)
    console.log('THIS IS DATA', data);
  })

  }, [])

if (!weather) {
    return (<div>loading...</div>)
  } else {
    console.log('THIS IS WEATHER', weather);
    return (
      <div>
          {/* <SingleSavedCards data={weather} /> */}
      </div>
    );
  
  }
}

export default SavedWeather;