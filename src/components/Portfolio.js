import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Cyborgguppy from "../assets/thumb/cyborgguppy.png";
import Dicksluiter from "../assets/thumb/dicksluiter.png";
import Kingfarmer from "../assets/thumb/kingfarmer.png";
import Homesteak from "../assets/thumb/homesteak.png";
import Penguin from "../assets/thumb/penguin.png";
import Seafoodjulid from "../assets/thumb/seafoodjulid.png";

const Portfolio = () => {
  const portfolios = [
    {
      img: Cyborgguppy,
      title: "Cyborg Guppy",
      dataAos: "fade-right",
      delay: "100",
    },
    {
      img: Dicksluiter,
      title: "Dick Sluiter",
      dataAos: "fade-down",
      delay: "200",
    },
    {
      img: Homesteak,
      title: "Home Steak",
      dataAos: "fade-left",
      delay: "300",
    },
    {
      img: Kingfarmer,
      title: "King Farmer",
      dataAos: "fade-right",
      delay: "400",
    },
    {
      img: Penguin,
      title: "Penguin",
      dataAos: "fade-up",
      delay: "500",
    },
    {
      img: Seafoodjulid,
      title: "Seafood Julid",
      dataAos: "fade-left",
      delay: "600",
    },
  ];

  return (
    <div id="portfolio" style={{ backgroundColor: "#2e3336" }} className="pt-5">
      <h3 className="text-center text-white mt-5" data-aos="fade-up">
        Portfolio
      </h3>
      <Container>
        <Row className="justify-content-center mt-5">
          {portfolios.map((portfolio, index) => (
            <Col key={index} md={4} className="mb-3">
              <Card
                className="border-0"
                data-aos={portfolio.dataAos}
                data-aos-delay={portfolio.delay}
                data-aos-offset="200"
              >
                <Card.Img src={portfolio.img} />
                <Card.Body>
                  <Card.Title className="text-center">
                    {portfolio.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,160C672,139,768,117,864,112C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Portfolio;
