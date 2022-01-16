import React from 'react';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import WeatherCard from '../components/WeatherCards';
import PreferenceToggle from '../components/PreferenceToggle';
import SearchBar from '../components/SearchBar';
// import SearchResults from './components/SearchResults';
import Weather from '../components/Weather';
import weatherData from '../weather.json';
import Wrapper from './components/Wrapper';

function weatherCard() {
  // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
  const [weatherList, setWeatherList] = useState(weatherData);

  // let d = new Date({friend.dt} * 1000); // The 0 there is the key, which sets the date to the epoch
  //   // let dateTime = d.setUTCSeconds(forecastData[i].dt);
  //   console.log(d);

  return (
    <Wrapper>
      <h1 className="title">Weather Cards</h1>
      {/* Map through 'friendsList' and render a 'FriendCard' for each friend */}
      {/* Pass in the 'removeFriend()' method and each property of a friend */}
      {weatherList.map(weather => (
        <WeatherCard
        
          key={weather.id}
          date={weather.dt}
          weather={weather.weather}
          image={weather.image}
          temp={weather.temp}
          uvi={weather.UVI}
          humidity={weather.humidity}
          feelsLike={weather.feels_like}
        />
      ))}
    </Wrapper>
  );
  }

const Dashboard = (props) => {
  const { data: userData } = useQuery(QUERY_ME);
  const loggedIn = Auth.loggedIn();

  return (
    <main>
        <div>
            <NavBar />
            
            <p>DASHBOARD</p>

            <SearchBar />

            <PreferenceToggle />

            <WeatherCard />

        </div>
    </main>
  );
};

export default Dashboard;

