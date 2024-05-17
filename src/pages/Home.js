import * as React from "react";
import personalLogo from "../assets/Images/personalLogo.png";
import currentImageofMe from "../assets/Images/currentImageofMe.jpeg";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

//importing css
import "../css/stylings.css";

function Home() {
  return (
    <div className="Home-Container">
      <div className="Intro-Container">
        <div className="Intro-Inner-Container">
          <div className="Intro-Nav-Container">
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
              <Link>Home</Link>
            </div>
            <div className="Header-Nav-Item">
              <Link>Projects</Link>
            </div>
            <div className="Header-Nav-Item">
              <Link>Resume</Link>
            </div>
            <div className="Header-Nav-Item">
              <Link>Contacts</Link>
            </div>
          </div>
          <div className="Intro-Content-Container">
            <div className="Intro-Name-Container">
              <h1>Hi, I'm</h1>
            </div>
            <div>
              <h1 style={{ fontWeight: "bold" }}>Diego Avila Perles Blanco</h1>
            </div>
            <div className="Intro-Image-Container">
              <img src={currentImageofMe} alt="Me" />
            </div>

            <div className="Intro-Buttons">
              <button
                type="button"
                className="btn "
                style={{ backgroundColor: "rgb(62, 92, 118)" }}
              >
                <a>Random Website I found</a>
              </button>
              <button
                type="button"
                className="btn"
                style={{backgroundColor: "rgb(116, 140, 171)"}}>
                <a>Random Personal Project</a>
              </button>
            </div>
          </div>
          <div className="About-Container">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
