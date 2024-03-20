import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" bg="white" className="boxShadaw p-3">
        <Container>
          <Navbar.Brand href="/">
            <img src="../../img/logo192.png" alt="fish" />
          </Navbar.Brand>
          <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-collapse">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/news">Men</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
