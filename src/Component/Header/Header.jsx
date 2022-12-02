import React from "react";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Particles from "react-tsparticles";
import "./Home.css";

const Header = () => {
    return (
        <div className="home-container">
            <Profile />
            <Footer />
        </div>
    );
};

export default Header;
