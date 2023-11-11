import { Form, Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import FilterContext from "../Context/filter";
import { Link } from "react-router-dom";

function MyNav() {
  const { filter, setFilter } = useContext(FilterContext);

  const myNavStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000, // Set a higher z-index value

  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" style={myNavStyle}> {/* Fix the typo here */}
      <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link> 
          <Nav.Link as={Link} to="/">Books</Nav.Link> 
          <Nav.Link as={Link} to="/authors">Authors (NOT FOUND)</Nav.Link>
          <Nav.Link as={Link} to="/contacts">Contact</Nav.Link>
        </Nav>

        <Form className="me-xs-1 me-lg-5">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Enter a filter keyword"
                className="text-center"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Col>
          </Row>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;

