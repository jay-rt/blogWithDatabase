import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    //Navbar component with bg as background props, expand to allow collapsable behaviour and variant for colour palate
    <Navbar bg="light" expand="lg" variant="light">
      {/* Container component with bootstrap container class */}
      <Container>
        <Link className="navbar-brand" to="/">
          DAILY JOURNAL
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Using as property to set the element to ul, div by default*/}
          <Nav as="ul" className="ms-auto">
            <Nav.Item as="li">
              {/* Using Link to render just the component instead of whole DOM*/}
              <Link className="nav-link" to="/create">
                CREATE
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/about">
                ABOUT US
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/contact">
                CONTACT US
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
