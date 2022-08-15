import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const NavigationBar = () => {
  const navLink = [
    {
      title: "Home",
      url: "home",
      animate: "animate__animated animate__bounceInDown animate__delay-1s",
    },
    {
      title: "About",
      url: "about",
      animate: "animate__animated animate__bounceInDown animate__delay-1s",
    },
    {
      title: "Portfolio",
      url: "portfolio",
      animate: "animate__animated animate__bounceInDown animate__delay-1s",
    },
    {
      title: "Contact",
      url: "contact",
      animate: "animate__animated animate__bounceInDown animate__delay-1s",
    },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        fixed="top"
        className="animate__animated animate__bounce"
      >
        <Container>
          <Navbar.Brand
            className="navbar-brand animate__animated animate__bounceInLeft animate__delay-1s"
            onClick={scrollToTop}
          >
            Anas Faisal Amri
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" navbarScroll>
              {navLink.map((link, index) => (
                <Nav.Link key={index} className={link.animate}>
                  <Link
                    activeClass="active"
                    to={link.url}
                    spy={true}
                    offset={10}
                    duration={600}
                  >
                    {link.title}
                  </Link>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
