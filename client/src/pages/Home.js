import React from "react";
import Weather from "../components/Weather";
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <div className="container">
        <h1> Placeholder header</h1>
        <Button variant="contained">test button</Button>
      <Weather /> 
    </div>
  );
};

export default Home;

