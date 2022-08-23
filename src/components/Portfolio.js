import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import thumbImages from "./ThumbImage";

const Portfolio = () => {
  return (
    <div id="portfolio" style={{ backgroundColor: "#2e3336" }} className="pt-5">
      <h3 className="text-center text-white mt-5" data-aos="fade-up">
        Portfolio
      </h3>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={10} className="mb-3">
            <OwlCarousel
              className="owl-theme"
              responsiveClass={true}
              loop={true}
              autoplay={true}
              autoplayTimeout={3000}
              margin={10}
              responsive={
                ({ 0: { items: 1 } },
                { 600: { items: 2 } },
                { 1000: { items: 4 } })
              }
            >
              {thumbImages.map((img) => (
                <div
                  className="items"
                  key={img}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <img src={img} alt={img} />
                </div>
              ))}
            </OwlCarousel>
          </Col>
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
