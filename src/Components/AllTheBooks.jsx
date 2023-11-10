import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import FilterContext from "../Context/filter.js";
import CategoryContext from "../Context/category.js";
import selectedBookContext from "../Context/selectedBook.js";

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
      <Row className="row-gap-1 mt-5">
        {filteredTitles.map((book) => (
          <Col key={book.asin} xs={12} md={6} lg={4} className="p-2 d-flex align-items-stretch flex-wrap">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
  
}

export default AllTheBooks;
