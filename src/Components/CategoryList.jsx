import React, { useContext } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "../Data/history.json";
import fantasy from "../Data/fantasy.json";
import horror from "../Data/horror.json";
import romance from "../Data/romance.json";
import scifi from "../Data/scifi.json";
import CategoryContext from "../Context/category.js";
import selectedBookContext from "../Context/selectedBook.js";

function CategoryList() {
  const { category, setCategory } = useContext(CategoryContext);
  const { setSelectedBook } = useContext(selectedBookContext);

  const categories = [
    { name: "History", data: history },
    { name: "Fantasy", data: fantasy },
    { name: "Horror", data: horror },
    { name: "Romance", data: romance },
    { name: "Sci-Fi", data: scifi },
  ];

  const handleClickCategory = (categoryName) => {
    setCategory(categoryName);
    setSelectedBook();
  };

  return (
    <Container>
          <Row className="mt-5">
        <Col>
          <h3>Categories:</h3>
        </Col>
      </Row>
      <Row>
        {categories.map((cat, index) => (
          <Col key={index} className="mb-2">
            <Button
              style={{
                width: "100%",
                fontWeight: category === cat.data ? "bold" : "normal",
              }}
              variant={category === cat.data ? "primary" : "secondary"}
              onClick={() => handleClickCategory(cat.data)}
            >
              {cat.name}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryList;
