import React from 'react';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import PreferenceToggle from '../components/PreferenceToggle';
import SearchBar from '../components/SearchBar';
// import SearchResults from './components/SearchResults';
import Weather from '../components/Weather';


const Dashboard = (props) => {
  const { data: userData } = useQuery(QUERY_ME);
  const loggedIn = Auth.loggedIn();

  return (
    <main>
        <div>
            {loggedIn ? (
            <div>            
                <h2>Hello {userData.username}!</h2>
                <div>
                <Weather/>
                <PreferenceToggle />
                <SearchBar />
                {/* <SearchResults /> */}
                </div>
                </div>
                ) :  
                <div>
                    <h2>You need to be logged in!</h2>
                    <h4>Login</h4>
                </div>
               }
        </div>
    </main>
  );
};

export default Dashboard;

