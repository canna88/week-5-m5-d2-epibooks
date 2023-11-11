import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Contacts() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col xs = {12}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns, please feel free to contact
              us using the information below:
            </p>
            <address>
              <strong>Email:</strong> info@example.com
            </address>
            <address>
              <strong>Phone:</strong> +1 (555) 123-4567
            </address>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacts;
