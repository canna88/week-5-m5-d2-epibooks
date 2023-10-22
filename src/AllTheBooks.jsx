import React from "react";
import booksData from "./history.json";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function AllTheBooks() {
  return (
    <Container>
      <Row>
        {booksData.map((book) => (
          <Col key={book.asin} xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <p>Price: ${book.price}</p>
                <p>Category: {book.category}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
