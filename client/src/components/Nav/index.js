import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li>
                        // SEARCH BAR GOES HERE
                        // SEARCH BAR GOES HERE
                        // SEARCH BAR GOES HERE
                        // SEARCH BAR GOES HERE
                        // SEARCH BAR GOES HERE
                    </li>
                    <li className="mx-1">
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header>
            <h1>
                <Link to="/">
                    <span role="img" aria-label="gale icon">
                        🌬 Gale
                    </span>
                </Link>
            </h1>

            <nav>{showNavigation()}</nav>
        </header>
    );
}

export default Nav;
