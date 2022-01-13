import React from 'react';
import CityList from '../components/CityList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_CITIES, QUERY_ME } from '../utils/queries';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_CITIES);
  const { data: userData } = useQuery(QUERY_ME);
  const cities = data?.cities || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
        <div className={loggedIn}>
        {loggedIn && userData ? (
          <div>
            <CityList
              cities={cities}
              title="Your Saved Locations"
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Dashboard;

