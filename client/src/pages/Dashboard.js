import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import PreferenceToggle from "../components/PreferenceToggle";
import WeatherCard from "../components/WeatherCards";

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            
            <p>DASHBOARD</p>

            <SearchBar />

            <PreferenceToggle />

            <WeatherCard />

        </div>
    );
};

export default Dashboard;
