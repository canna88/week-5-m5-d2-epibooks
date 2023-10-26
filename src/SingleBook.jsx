import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Form } from "react-bootstrap";

function SingleBook({ book }) {
  const [buy, setBuy] = useState(false);
  const cardStyle = {
    borderColor: buy ? "red" : "", // Imposta il bordo rosso quando buy è true
  };

  return (
    <Col xs={12} md={6} lg={3}>
      <Card key={book.asin} style={{ width: "18rem", ...cardStyle }}>
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Form>
            <Form.Group controlId={`checkbox-${book.asin}`}>
              <Form.Check
                type="checkbox"
                label="Acquista"
                value={buy}
                onChange={(event) => {
                  setBuy(event.target.checked);
                }}
              />
            </Form.Group>
          </Form>
          <Card.Title>{book.title}</Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p>Price: ${book.price}</p>
          <p>Category: {book.category}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
