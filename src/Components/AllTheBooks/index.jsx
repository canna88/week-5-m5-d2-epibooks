import React, { useContext, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SingleBook from "../SingleBook/index.jsx";
import FilterContext from "../../Context/filter.js";
import CategoryContext from "../../Context/category.js";
import selectedBookContext from "../../Context/selectedBook.js";
import styles from "./index.module.scss";

function AllTheBooks() {
  const [filteredTitles, setFilteredTitles] = useState([]);
  const { filter } = useContext(FilterContext);
  const { category } = useContext(CategoryContext);
  const { setSelectedBook } = useContext(selectedBookContext);

  const booksToShow = category;

  useEffect(() => {
    const filteredBookTitles = booksToShow.filter((book) =>
      book.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredTitles(filteredBookTitles);
    setSelectedBook("");
  }, [booksToShow, filter]);

  return (
    <>
      <Row className="mt-5">
        <Col>
          <h3>Books:</h3>
        </Col>
      </Row>
      <Row className={`row-gap-1 ${styles.containerMinHeight}`}>
        {filteredTitles.length === 0 && (
          <Col xs={12} className="text-center mt-3">
            <h2>La tua ricerca non produce risultati</h2>
          </Col>
        )}
        {filteredTitles.map((book) => (
          <Col
            key={book.asin}
            xs={12}
            md={6}
            lg={4}
            className="p-3 d-flex align-items-stretch flex-wrap"
          >
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllTheBooks;
