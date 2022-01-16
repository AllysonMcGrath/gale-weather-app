import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import SignIn from '../components/SignIn';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';



const Login = (props) => {

const loggedIn = Auth.loggedIn();

  return (
    <div>
        {loggedIn ? (
            <div>
                <h2>You're already signed in!</h2>
                <Link to="/dashboard">
                    Go to Dashboard
                </Link>
            </div>
        ) : <div>
            <SignIn />
            </div>}
        
    </div>
  );
};

export default Login;
