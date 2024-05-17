import * as React from "react";
import personalLogo from "../assets/Images/personalLogo.png";
import currentImageofMe from "../assets/Images/currentImageofMe.jpeg";

import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div
      className="Home-Container"
      style={{
        minHeight: "100%",
        width: "100%",
        position: "relative",
        backgroundColor: "rgb(11,57,72)",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        placeContent: "center flex-start",
        overflow: "hidden",
      }}
    >
      <div
        className="Intro-Container"
        style={{
          placeContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(217, 219, 241)",
          display: "flex",
          flexFlow: "row",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          padding: "20px",
          width: "100%",
        }}
      >
        <div
          className="Intro-Inner-Container"
          style={{
            display: "flex",
            alignItems: "center",
            flexFlow: "column",
            position: "relative",
            placeContent: "center space-between",
            width: "100%",
            gap: "20px",
          }}
        >
          <div
            className="Intro-Nav-Container"
            style={{
              display: "flex",
              alignItems: "center",
              height: "min-content",
              position: "relative",
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <div className="Header-Nav-Item">
              <Link>
                <img
                  style={{ height: "40px" }}
                  src={personalLogo}
                  alt="Personal Logo"
                />
              </Link>
            </div>

            <div className="Header-Nav-Item">
              <Link>Profile</Link>
            </div>
            <div className="Header-Nav-Item">
              <Link>Projects</Link>
            </div>
            <div className="Header-Nav-Item">
              <Link>Resume</Link>
            </div>
          </div>
          <div
            className="Intro-Content-Container"
            style={{
              display: "flex",
              position: "relative",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div className="Intro-Image-Container">
              <img src={currentImageofMe} alt="Me" />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
