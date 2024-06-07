import * as React from "react";
import personalLogo from "../assets/Images/personalLogo.png";
import currentImageofMe from "../assets/Images/currentImageofMe.jpeg";
import { Link } from "react-router-dom";
//import { Popover, OverlayTrigger } from "react-bootstrap";

//Project Images
import findIvyProject from "../assets/ProjectImages/findIvyProject.png";
import secureMessageProject from "../assets/ProjectImages/SecureMessagingImage.png";
import shading from "../assets/ProjectImages/shading.png";
import tesselaton from "../assets/ProjectImages/tesselation.png";
import toolsharingdb from "../assets/ProjectImages/toolsharingdb.png";
//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

//importing css
import "../css/stylings.css";

const LoadingScreen = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 1.0)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999, // Ensure it's above other elements
    }}
  >
    <h2>Loading...</h2>
  </div>
);


function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  const personalProjects = [
    "https://people.rit.edu/da8648/tessellation/tessellation.html",
    "https://people.rit.edu/da8648/transformation/transformation.html",
    "https://people.rit.edu/da8648/shading/shading.html",
    "https://people.rit.edu/da8648/art/art.html",
  ];

  const handleRandomProjectClick = () => {
    const randomIndex = Math.floor(Math.random() * personalProjects.length);
    window.location.href = personalProjects[randomIndex];
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="Home-Container">
        <div className="Intro-Container">
          <div className="Intro-Inner-Container">
            <div className="Intro-Nav-Container">
              <div className="Header-Nav-Item" onClick={scrollToTop}>
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
                <a href="/Resume.pdf">Resume</a>
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
                <h1 style={{ fontWeight: "bold" }}>
                  Diego Avila Perles Blanco
                </h1>
              </div>
              <div className="Intro-Image-Container">
                <img src={currentImageofMe} alt="Me" />
              </div>

              <div className="Intro-Buttons">
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "rgb(116, 140, 171)" }}
                  onClick={handleRandomProjectClick}
                >
                  Random Personal Project
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
              fontSize: "calc(var(--maxFontSize) * 0.8)",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <p>
              I am a recent Computer Science graduate from Rochester Institute
              of Technology (RIT). I have a passion for technology and Software
              Development. From a very young age, I have been facinated by the
              interworkings of technology, always eager to create and learn how
              various devices operate.
            </p>
            <p>
              In addition to my interest in technology, I have always been
              motivated by a desire to make a meaningful impact that benefits
              others. My journey began with a strong interest in Biology, which
              led me to complete an Associate of Science in Biology at South
              Texas College. During this time, I became aware of the numerous
              environmental issues caused by pollution, which deepend my
              commitment to finding solutions that could address these
              challenges.
            </p>
            <p>
              Realizing the potential for technology to address these issues, I
              continued my academic journey at RIT where I completed a Bachelor
              of Science in Computer Science.
            </p>
          </div>
        </div>
        <div
          className="Project-Container"
          style={{
            backgroundColor: "rgb(29, 45, 68)",
            padding: "20px",
          }}
        >
          <div className="Project-Title">
            <h1 style={{ color: "rgb(240, 235, 216)", paddingLeft: "0px" }}>
              My Featured Projects
            </h1>
          </div>
          <div
            className="Project-Grid"
            style={{ display: "grid", backgroundColor: "rgb(29, 45, 68)" }}
          >
            <div className="Project-Cell">
              <div className="card">
                <img src={findIvyProject} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="Project-Cell">
              <div className="card">
                <img
                  src={secureMessageProject}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="Project-Cell">
              <div className="card">
                <img src={shading} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="Project-Cell">
              <div className="card">
                <img src={tesselaton} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="Project-Cell">
              <div className="card">
                <img src={toolsharingdb} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div
          className="Footer-Container"
          style={{ backgroundColor: "rgb(29, 45, 68)" }}
        >
          <div
            className="Footer-Content"
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div
              className="Footer-Emails"
              style={{ display: "flex", flexDirection: "row", gap: "20px" }}
            >
              <a
                style={{ color: "rgb(240, 235, 216)", textDecoration: "none" }}
                href="mailto:diegoavila358@gmail.com"
              >
                da8648@rit.edu
              </a>
              <a
                style={{ color: "rgb(240, 235, 216)", textDecoration: "none" }}
                href="mailto:diegoavila358@gmail.com"
              >
                diegoavila358@gmail.com
              </a>
            </div>
            <div
              className="Footer-Socials"
              style={{ display: "flex", flexDirection: "row", gap: "20px" }}
            >
              <Link to="https://www.linkedin.com/in/diego-avila-perles-blanco/">
                <img
                  src="linkedinsvg.svg"
                  alt="Logo"
                  style={{ width: "40px", height: "40px" }} // Adjust width and height as needed
                />
              </Link>
              <Link to="https://github.com/diego-avila-358">
                <img
                  src="githubsvg.svg"
                  alt="Logo"
                  style={{ width: "40px", height: "40px" }} // Adjust width and height as needed
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
