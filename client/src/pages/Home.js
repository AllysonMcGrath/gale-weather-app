import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import SignUp from '../components/SignUp'


const Home = (props) => {

  return (
    <div>
        <div>
          HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE 
          <NavBar />

          <SignUp />
        </div>
        <SignUp />
    </div>
  );
};

export default Home;
