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
    <div className="p-2" style={{
      width: "33%"
    }}>

      <Card
        className="my-5"
        key={book.asin}
        style={{
          cursor: "pointer",
          border: isSelected ? "3px solid red" : "2px solid black",

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
          {/* {isSelected && (
            <Button variant="danger" onClick={closeComments}>
            Close
            </Button>
          )} */}
          {/* {isSelected && <CommentArea asin={book.asin} select={isSelected} />} */}
        </div>
      </Card>
          </div>
  );
}

export default SingleBook;

