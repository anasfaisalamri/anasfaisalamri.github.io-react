import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import iconAbout from "./IconAbout";

const About = () => {
  return (
    <div id="about" className="pt-5 mt-5">
      <Container className="text-center mt-5">
        <h3 data-aos="fade-up" data-aos-offset="200">
          About Me
        </h3>
        <Row className="justify-content-center mt-4 px-1">
          <Col md={5} lg={4}>
            <p data-aos="fade-right" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              sequi veritatis, harum, voluptate architecto quidem ducimus quae
              distinctio corporis a illo voluptates suscipit quo ab fugiat. Quo
              perferendis cumque soluta, quidem aspernatur modi in, rem
              voluptatibus sint, dolore natus consequuntur?
            </p>
          </Col>
          <Col md={5} lg={4}>
            <p data-aos="fade-left" data-aos-delay="400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              inventore pariatur nihil, laudantium obcaecati saepe iste
              quibusdam eos provident corporis doloribus dolorum cum nesciunt
              vel, soluta, sit magni! Quis dolor omnis voluptas magnam
              doloremque consequatur aspernatur totam dolorum doloribus
              repellat!
            </p>
          </Col>
        </Row>

        <h4 data-aos="fade-up" data-aos-delay="200">
          Tools
        </h4>
        <Row className="px-5 mx-5 mt-3 justify-content-center">
          {iconAbout.map((icon, index) => (
            <Col key={index} xs={9} sm={4} md={2} className="m-3">
              <Image
                src={icon}
                fluid
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="200"
              />
            </Col>
          ))}
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2e3336"
          d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,208C672,192,768,160,864,165.3C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default About;
