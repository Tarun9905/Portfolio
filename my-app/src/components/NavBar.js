import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'; // Import custom CSS

const NavBar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // State to control collapse

  // Function to handle link click and close the menu
  const handleNavClick = () => {
    setExpanded(false); // Collapse the menu
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded} // Bind state to control collapse
      onToggle={() => setExpanded(!expanded)} // Toggle state when clicking the toggler
      style={{
        backgroundColor: 'black',
        height: '80px',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
      }}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand>Portfolio Builder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/home"
              className={location.pathname === '/home' ? 'active' : ''}
              onClick={handleNavClick} // Close menu on click
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/links"
              className={location.pathname === '/links' ? 'active' : ''}
              onClick={handleNavClick} // Close menu on click
            >
              Link
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/update"
              className={location.pathname === '/update' ? 'active' : ''}
              onClick={handleNavClick} // Close menu on click
            >
              Update
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={handleNavClick} // Close menu on click
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/service"
              className={location.pathname === '/service' ? 'active' : ''}
              onClick={handleNavClick} // Close menu on click
            >
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
