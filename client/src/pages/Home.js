import React from 'react';
import SignUp from '../components/SignUp'
import NavBar from "../components/NavBar";
import SavedCards from "../components/SavedCards";
import WeatherVid from '../weathervid.mp4'


const Home = () => {

  return (
    <div>
        <div>
        <video id="video" autoPlay muted loop >
      <source src={WeatherVid} type="video/mp4"/>
     </video>
        <SignUp />
        {/* <SavedCards /> */}
    </div>
    </div>
  );
};

export default Home;
