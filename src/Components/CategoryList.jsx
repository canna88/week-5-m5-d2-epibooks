import React, { useState } from "react";
import { useContext } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import history from "../Data/history.json";
import fantasy from "../Data/fantasy.json";
import horror from "../Data/horror.json";
import romance from "../Data/romance.json";
import scifi from "../Data/scifi.json";
import CategoryContext from "../Context/category";
import selectedBookContext from "../Context/selectedBook.js";


function CategoryList() {
  const { category, setCategory } = useContext(CategoryContext);
  const { setSelectedBook } = useContext(selectedBookContext);

  const categories = [
    { name: "History", data: history },
    { name: "Fantasy", data: fantasy },
    { name: "Horror", data: horror },
    { name: "Romance", data: romance },
    { name: "Sci-Fi", data: scifi }
  ];
  const handleClickCategory = (categoryName) => {
    setCategory(categoryName);
    setSelectedBook()
  };

  return (
    <Container>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} className="mb-2">
            <Button onClick={() => handleClickCategory(category.data)}>
              {category.name}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryList;
