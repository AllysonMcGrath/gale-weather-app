import React from 'react';
import SignUp from '../components/SignUp'
import NavBar from "../components/NavBar";
import Weather from "../components/Weather";


const Home = () => {

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
