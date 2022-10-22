import React from "react";
import { Container, Image } from "react-bootstrap";
import Profile from "../assets/Profile.png";

const Home = () => {
  return (
    <div id="home">
      <Container
        fluid
        className="text-center text-white"
        style={{ padding: "100px 0 0 0", backgroundColor: "#2e3336" }}
      >
        <Image
          src={Profile}
          className="img-thumbnail rounded-circle animate__animated animate__flipInY animate__delay-0.5s"
          alt="profile"
          style={{ width: "200px" }}
        />
        <h1 className="fw-light display-4 animate__animated animate__fadeInDown animate__delay-1s">
          Anas Faisal Amri
        </h1>
        <h5 className="fw-light animate__animated animate__fadeInUp animate__delay-2s">
          Junior Web Developer
        </h5>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            d="M0,192L48,202.7C96,213,192,235,288,250.7C384,267,480,277,576,266.7C672,256,768,224,864,197.3C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Container>
    </div>
  );
};

export default Home;
