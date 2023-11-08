import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";
import selectedBookContext from "../Context/selectedBook.js";
import { useContext } from "react";

function SingleBook({ book }) {
  const { selectedBook, setSelectedBook } = useContext(selectedBookContext);
  const isSelected = selectedBook === book.asin;

  const handleCardClick = (asin) => {
    setSelectedBook(asin);
  };

  const closeComments = () => {
    setSelectedBook(null);
  };

  return (
    <Col className="p-3" xs={12} md={6} lg={3}>
      <Card
        className="my-5"
        key={book.asin}
        style={{
          cursor: "pointer",
          border: isSelected ? "2px solid red" : "none",
          width: "18rem",
        }}
        onClick={() => handleCardClick(book.asin)}
      >
        <Card.Img variant="top" src={book.img} alt={book.title} style={{ width: "20%" }} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <p>Asin: {book.asin}</p>
          <p>Price: ${book.price}</p>
          <p>Category: {book.category}</p>
        </Card.Body>
        <div className="p-3">
          {isSelected && (
            <Button variant="danger" onClick={closeComments}>
              Close
            </Button>
          )}
          {isSelected && <CommentArea asin={book.asin} select={isSelected} />}
        </div>
      </Card>
    </Col>
  );
}

export default SingleBook;

