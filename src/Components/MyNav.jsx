import { Form, Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import FilterContext from "../Context/filter";


function MyNav() {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#books">Books</Nav.Link>
          <Nav.Link href="#authors">Authors</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>

        <Form>
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
