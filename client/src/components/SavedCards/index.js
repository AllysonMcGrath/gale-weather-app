// import React, { useState } from "react";
// //import Display from "../Display";
// //import WeatherCard from "../WeatherCards";
// import { useQuery } from '@apollo/client';
// import "../../App.css";
// import WeatherCard from "../WeatherCards";
// import "../../index.css";
// import { GET_ME } from '../../utils/queries';
// // import Auth from '../utils/auth';

// function apiCall() {
//   const [weather, setWeather] = useState([]);


//   const api_key = "3f698036d7cb81fb192ca1a1ad2af845";
//   async function weatherData(savedCitiesArrayDummy) {
//     const cityCall = 
//       const data = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&units=imperial&APPID=${api_key}`
//       )
//         .then((res) => res.json())
//         .then((data) => data);
//       console.log(data);

//       setWeather({ data: data });
//     }
//   }
// }

// function SavedWeather() {
//     const [userData, setUserData] = useState({});
//     const [weather, setWeather] = useState([]);

//     // use this to determine if `useEffect()` hook needs to run again
//     const userDataLength = Object.keys(userData).length;
//     const {loading, error, data} = useQuery(GET_ME);

//   const api_key = "3f698036d7cb81fb192ca1a1ad2af845";

//     let savedCitiesArrayDummy = ["austin", "denver", "seattle"]
//   // let savedCitiesArray;

//   if(data) {
//       console.log('savedcities getme')
//       console.log('LOOK AT ME THIS IS THE DATA', data)
//       savedCitiesArray = data.savedCities
//   }


// //   function populateSavedCities() => {

// //   }

// //   useEffect(() => {
// //     if(data) {
// //       setUserData(data.me)
// //     async function weatherCards() {

// //         const data = await fetch(
// //             `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&units=imperial&APPID=${api_key}`
// //         )
// //             .then((res) => res.json())
// //             .then((data) => data);

// //         setWeather({ data: data });
// //     }


//   if (!weather) {
//     return (
//         <div className="wrap">
//           <span className="title"></span>
//           <br />
//           <form className="search">
//             <input
//               type="text"
//               placeholder="Search your city"
//               className="searchTerm"
//               name="city"
//               // onChange={(e) => handleChange(e)}
//             />
//             &nbsp;&nbsp;
//             {/* <button className="searchButton" onClick={(e) => weatherData(e)}>
//               Search
//             </button> */}
//           </form>
//         </div>
//       );
//   }

//   return (
//     <div className="wrap">
//       <span className="title"></span>
//       <br />
//       <form className="search">
//         <input
//           type="text"
//           placeholder="Search your city"
//           className="searchTerm"
//           name="city"
//           // onChange={(e) => handleChange(e)}
//         />
//         &nbsp;&nbsp;
//         {/* <button className="searchButton" onClick={(e) => weatherData(e)}>
//           Search
//         </button> */}
//       </form>

//       {weather.data !== undefined ? (
//         <div>{savedCitiesArrayDummy.map(city => {
//           //api call
//             <WeatherCard data={forecast.data} />
//         })}</div>
//       ) : null}
//     </div>
//   );
// }

// export default SavedWeather;
