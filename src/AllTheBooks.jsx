import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
// import booksData from "./history.json";
import SingleBook from "./SingleBook";

function AllTheBooks() {


  const [booksData, setBooksData] = useState([])

  useEffect(() => {
    fetch("URL")

      .then(response => response.json())
      .then(fetchData => setBooksData(fetchData))
      .catch((error) => {
        console.error("La richiesta non è andata a buon fine")
      })
  })

  const (booksToShow, setBooksToShow) = useState([])

  const categoryFilter = (event) => {

    const filteredBooks = booksData.filter(book) => (
      book.category.toLowerCase().includes(event.target.toLowerCase())
    )

    setBooksToShow(filteredBooks)
  }

  // Filtro
  const [filter, setFilter] = useState("");
  const [filteredTitles, setFilteredTitles] = useState([]);

  const handleFilterChange = (event) => {
    const inputValue = event.target.value;
    setFilter(inputValue);

    const filteredBookTitles = booksToShow.filter((book) =>
      book.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredTitles(filteredBookTitles);
  };

  // Return
  return (
    <>
      <Container>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="History" title="History" onSelect = {categoryFilter}>
            History
          </Tab>
          <Tab eventKey="Scify" title="Scify"onSelect = {categoryFilter}>
            Scify
          </Tab>
          <Tab eventKey="Catastrofy" title="Catastrofy" onSelect = {categoryFilter}>
            Catastrofy
          </Tab>
        </Tabs>
      </Container>


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
    </>
  );

}
export default AllTheBooks;