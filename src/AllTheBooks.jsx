import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import booksData from "./history.json";
import SingleBook from "./SingleBook";

function AllTheBooks() {
  const [filter, setFilter] = useState("");
  const [filteredTitles, setFilteredTitles] = useState([]);

  const handleFilterChange = (event) => {
    const inputValue = event.target.value;
    setFilter(inputValue);

    const filteredBookTitles = booksData.filter((book) =>
      book.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredTitles(filteredBookTitles);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4 my-5">
        <Col xs={12} md={6} lg={4}>
          <Form>
            <Form.Group className="text-center" controlId="filterForm">
              <Form.Label className="text-center">Filter Books</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a filter keyword"
                className="text-center"
                value={filter}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        {filteredTitles.length > 0 &&
          filteredTitles.map((book) => (
            <SingleBook key={book.asin} book={book} />
          ))}
        {filteredTitles.length === 0 &&
          booksData.map((book) => <SingleBook key={book.asin} book={book} />)}
      </Row>
    </Container>
  );
}

export default AllTheBooks;