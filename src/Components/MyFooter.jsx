import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {

  const footerStyle = {
    position: "relative",
    bottom: 0,
    width: "100%",
    marginTop: "100px"
  }

  return (
    <Container fluid className="bg-dark text-light p-4" style = {footerStyle}>
      <Row>
        <Col className="text-center">
          &copy; {new Date().getFullYear()} EpiBooks. All rights reserved.
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
