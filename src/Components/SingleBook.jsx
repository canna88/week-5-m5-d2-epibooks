import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  const cardStyle = {
    borderColor: selected ? "red" : "",
    cursor: "pointer",
  };

  const handleCardClick = () => {
    setSelected(!selected); // Inverti lo stato di 'selected' al click sulla card
  };

  const closeComments = () => {
    setSelected(false);
  };

  return (
    <Col className="p-3" xs={12} md={6} lg={3}>
      <Card
        className="my-5"
        key={book.asin}
        style={{ width: "18rem", ...cardStyle }}
      >
        <div onClick={handleCardClick}>
          <Card.Img
            variant="top"
            src={book.img}
            alt={book.title}
            style={{ width: "20%" }}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <p>Asin: {book.asin}</p>
            <p>Price: ${book.price}</p>
            <p>Category: {book.category}</p>
          </Card.Body>
        </div>
        <div className="p-3">
          {selected && (
            <Button variant="danger" onClick={closeComments}>
              Close
            </Button>
          )}
          
          {selected && <CommentArea asin={book.asin} select={selected} />}
        </div>
      </Card>
    </Col>
  );
}

export default SingleBook;
