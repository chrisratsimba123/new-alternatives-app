import React, { useState, useEffect } from "react";
import "./Home.css";
import MissionCarousel from "../../Components/MissionCarousel/MissionCarousel";

const Home = () => {
  return (
    <>
      <div className="layout">
        <div className="purple-icons-first">
          <div className="icon">
            <div className="icon-text">
              <h1>$500K</h1>
              <p>raised in one year</p>
            </div>
          </div>
          <div className="icon">
            <div className="icon-text">
              <h1>40%</h1>
              <p>
                of LGBTQ+ are
                <br />
                homeless in NYC
              </p>
            </div>
          </div>
          <div className="icon">
            <div className="icon-text">
              <h1>10K</h1>
              <p>meals provided thus far</p>
            </div>
          </div>
        </div>

        <div className="who-we-help">
          <MissionCarousel />
        </div>

        <div className="get-involved">
          <h1>Get Involved</h1>
          <div className="get-involved-icon"></div>
          <div className="get-involved-text">
            <h2>Get Help</h2>
            <h2>Volunteer</h2>
            <h2>Donate</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
