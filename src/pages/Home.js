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
                style={{ backgroundColor: "rgb(116, 140, 171)" }}
              >
                <a>Random Personal Project</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="About-Container"
        style={{
          padding: "60px 20px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          backgroundColor: "rgb(29, 45, 68)",
          flexDirection: "column",
          gap: "40px",
          height: "auto",
        }}
      >
        <div className="About-Title" style={{ color: "rgb(240, 235, 216)" }}>
          <h1>About Me</h1>
        </div>
        <div
          className="About-Content"
          style={{
            color: "rgb(240, 235, 216)",
            fontSize: "var(--maxFontSize)",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <p>
            I am a recent Computer Science graduate from Rochester Institute of
            Technology (RIT). I have a passion for technology and Software
            Development. From a very young age, I have been facinated by the
            interworkings of technology, always eager to create and learn how
            various devices operate.
          </p>
          <p>
            In addition to my interest in technology, I have always been
            motivated by a desire to make a meaningful impact that benefits
            others. My journey began with a strong interest in Biology, which
            led me to complete an Associate of Science in Biology at South Texas
            College. During this time, I became aware of the numerous
            environmental issues caused by pollution, which deepend my
            commitment to finding solutions that could address these challenges.
          </p>
          <p>
            Realizing the potential for technology to address these issues, I continued my academic journey
            at RIT where I completed a Bachelor of Science in Computer Science. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
