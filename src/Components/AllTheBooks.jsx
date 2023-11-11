import React, { useContext, useState, useEffect } from "react";
import {  Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import FilterContext from "../Context/filter.js";
import CategoryContext from "../Context/category.js";
import selectedBookContext from "../Context/selectedBook.js";
import history from "../Data/history.json";
import fantasy from "../Data/fantasy.json";
import horror from "../Data/horror.json";
import romance from "../Data/romance.json";
import scifi from "../Data/scifi.json";

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
      <Row className="row-gap-1">
        {filteredTitles.map((book) => (
          <Col key={book.asin} xs={12} md={6} lg={3} className="p-3 d-flex align-items-stretch flex-wrap">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
  
}

export default AllTheBooks;
