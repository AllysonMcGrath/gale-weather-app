import React from 'react';
import { Link } from 'react-router-dom';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

import PreferenceToggle from '../components/PreferenceToggle';
import Weather from '../components/Weather';


const Dashboard = (props) => {

  const { loading, data } = useQuery(GET_ME);

  const userData = data?.me || data?.user || {};
  console.log(Auth.loggedIn())
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <div>
        <h2>You need to be signed in!</h2>
        <Link to="/signin">
        Go to sign in
        </Link>
      </div>
    );
  }
console.log(userData);
  return (
    <main>
        <div>
            <h2>Hello {userData.username}!</h2>
            <div>
              <Weather/>
              <PreferenceToggle />
            </div>
        </div>
      </main>
    );
};

export default Dashboard;
