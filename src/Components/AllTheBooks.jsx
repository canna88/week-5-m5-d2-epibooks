import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import FilterContext from "../Context/filter.js";
import CategoryContext from "../Context/category.js";

function AllTheBooks() {
  const [filteredTitles, setFilteredTitles] = useState([]);
  const { filter } = useContext(FilterContext);
  const { category } = useContext(CategoryContext);
  const booksToShow = category;

  useEffect(() => {
    const filteredBookTitles = booksToShow.filter((book) =>
      book.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredTitles(filteredBookTitles);
  }, [booksToShow, filter]);

  return (
    <>
      <Container>
        <Row>
          {filteredTitles.length > 0 &&
            filteredTitles.map((book) => (
              <SingleBook key={book.asin} book={book} />
              ))}
          {filteredTitles.length === 0 &&
            booksToShow.map((book) => (
              <SingleBook key={book.asin} book={book} />
              ))}
        </Row>
      </Container>
    </>
  );
}

export default AllTheBooks;

