import React from 'react';
import CityList from '../components/CityList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_CITIES, QUERY_ME } from '../utils/queries';

import WeatherDisplay from './components/Nav';
import PreferenceToggle from './components/PreferenceToggle';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchBar';


const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_CITIES);
  const { data: userData } = useQuery(QUERY_ME);
  const cities = data?.cities || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
        <div>
            <h2>Hello {userData.username}</h2>
            <WeatherDisplay/>
            <PreferenceToggle />
            <SearchBar />
            <SearchResults />
        </div>
    </main>
  );
};

export default Dashboard;

