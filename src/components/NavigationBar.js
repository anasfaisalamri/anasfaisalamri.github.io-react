import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import navLink from "./NavigationLink";

const NavigationBar = () => {
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
            <Nav
              className="ms-auto animate__animated animate__bounceInDown"
              navbarScroll
            >
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
