import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import selectedBookContext from "../../Context/selectedBook.js";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function SingleBook({ book }) {
  const { selectedBook, setSelectedBook } = useContext(selectedBookContext);
  const isSelected = selectedBook === book.asin;

  const handleCardClick = (asin) => {
    setSelectedBook(asin);
  };

  return (
    <Card
      className={`${styles.bookCard} ${
        isSelected ? styles.selected : styles.notSelected
      }`}
      key={book.asin}
      onClick={() => handleCardClick(book.asin)}
    >
      <Button
        as={Link}
        to={`/bookdetails/${book.asin}`}
        variant="outline-dark"
        className={styles.bookDetailsButton}
      >
        Book Details
      </Button>
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        className={styles.cardImgTop} // Utilizza className invece di style
      />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{book.title}</Card.Title>
        <Card.Text className={styles.bookCategory}>
          <strong>Category:</strong> {book.category}
        </Card.Text>
        <Card.Text className={styles.bookPrice}>
          <strong>Price:</strong> € {book.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
