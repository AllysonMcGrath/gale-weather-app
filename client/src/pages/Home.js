import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import SignUp from '../components/SignUp'


const Home = (props) => {

  return (
    <div>
        <div>
            <img src='' alt='demo of dashboard with weather display' />
            <div>Carousel of images</div>
        </div>
        <SignUp />
    </div>
  );
};

export default Home;
