import React from 'react';
import { Link } from 'react-router-dom';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

import PreferenceToggle from '../components/PreferenceToggle';
import SearchBar from '../components/SearchBar';
// import SearchResults from './components/SearchResults';
import Weather from '../components/Weather';


const Dashboard = (props) => {
  const { data: userData } = useQuery(GET_ME);
  const loggedIn = Auth.loggedIn();

  return (
    <main>
        <div>
            {/* {loggedIn ? ( */}
            <div>            
                {/* <h2>Hello {userData.username}!</h2> */}
                <div>
                <Weather/>
                <PreferenceToggle />
                </div>
                </div>
                {/* ) :   */}
                <div>
                    <h2>You need to be signed in!</h2>
                    <Link to="/signin">
                    Go to sign in
                </Link>
                </div>
               {/* } */}
        </div>
      </main>
    );
};

export default Dashboard;
