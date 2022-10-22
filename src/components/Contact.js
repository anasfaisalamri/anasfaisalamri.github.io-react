import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import IconContact from "./IconContact";

const Contact = () => {
  return (
    <div id="contact" className="pt-5 mt-2">
      <Container className="text-center pt-5">
        <h3 data-aos="fade-up">Contact Me</h3>
        <Row className="justify-content-center mt-5">
          {IconContact.map((contact, index) => (
            <Col key={index} sm={3} md={3} className="m-3">
              <a href={contact.url} target="_blank" rel="noreferrer">
                <Image
                  src={contact.logo}
                  fluid
                  data-aos={contact.dataAos}
                  data-aos-delay={contact.delay}
                />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#212529"
          d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,229.3C672,245,768,235,864,224C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Contact;
