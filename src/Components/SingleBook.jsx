import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import selectedBookContext from "../Context/selectedBook.js";
import { useContext } from "react";
import { Link } from "react-router-dom";

function SingleBook({ book }) {
  const { selectedBook, setSelectedBook } = useContext(selectedBookContext);
  const isSelected = selectedBook === book.asin;

  const handleCardClick = (asin) => {
    setSelectedBook(asin);
  };

  return (
    <>
      <Card
        className="my-2"
        key={book.asin}
        style={{
          cursor: "pointer",
          border: isSelected ? "3px solid red" : "2px solid black",
        }}
        onClick={() => handleCardClick(book.asin)}
      >
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
        <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
  {book.title}
</Card.Title>

          <Card.Text style={{ marginBottom: "1rem" }}>
            <strong>Category:</strong> {book.category}
          </Card.Text>
          <Card.Text>
            <strong>Price:</strong> € {book.price}
          </Card.Text>
        </Card.Body>
        <Button
          as={Link}
          to={`/bookdetails/${book.asin}`}
          variant="outline-dark"
          style={{ marginTop: "1rem" }}
        >
          Book Details
        </Button>
      </Card>
    </>
  );
}

export default SingleBook;

