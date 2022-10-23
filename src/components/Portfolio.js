import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import portfolioImg from "./PortfolioImg";
import portoProject from "./PortfolioProject";

const Portfolio = () => {
  return (
    <div id="portfolio" className="pt-5">
      <h3 className="text-center text-white mt-5" data-aos="fade-up">
        Portfolio
      </h3>
      <Container>
        <Row className="justify-content-center my-5">
          {portoProject.map((project, index) => (
            <Col md={4} key={index} className="px-3 py-2">
              <Card
                key={index}
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-delay="200"
              >
                <Card.Link href={project.url} target="_blank" rel="noreferrer">
                  {/* <div class="project"></div> */}
                  <Card.Img className="project" />
                </Card.Link>
                <Card.Body>
                  <Card.Title>
                    <Card.Link
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none text-black"
                    >
                      {project.nama}
                    </Card.Link>
                  </Card.Title>
                  <Card.Text>
                    <p>ini bagian deskripsi dari setiap project</p>
                    <Card.Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="scroll-container">
        <div className="scroll-area">
          {portfolioImg.map((portfolio, index) => (
            <Image
              src={portfolio}
              key={index}
              alt={index}
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-delay="200"
            />
          ))}
        </div>
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
