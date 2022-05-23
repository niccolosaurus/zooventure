import { Link } from "react-router-dom";

import Auth from "../utils/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar
      style={{ width: "100%", backgroundColor: "rgba(52, 52, 52, 0.95)" }}
      expand="lg"
    >
      <Container style={{ width: "100%" }}>
        <Navbar.Brand style={{ color: "white" }} href="/">
          <strong>Zooventure</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {Auth.loggedIn() ? (
              <>
                <Nav.Link
                  style={{ color: "white" }}
                  className="nav-link"
                  href="/profile"
                >
                  My Trip
                </Nav.Link>

                <Nav.Link
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/"
                  onClick={logout}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  href="/login"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  href="/signup"
                >
                  Signup
                </Nav.Link>
              </>
            )}
            <Nav.Link
              style={{ color: "white" }}
              className="nav-link active"
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              className="nav-link active"
              href="/map"
            >
              Map
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              className="nav-link active"
              href="/animals"
            >
              Current Animals
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
