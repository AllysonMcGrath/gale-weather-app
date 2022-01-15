import React from "react";
import SearchAppBar from "../components/SearchAppBar";
import SearchBar from "../components/SearchBar";
import PreferenceToggle from "../components/PreferenceToggle";

const Dashboard = () => {
    return (
        <div>
            <SearchAppBar />
            <SearchBar />
            <PreferenceToggle />
        </div>
    );
};

export default Dashboard;
