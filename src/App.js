import "./App.css";
import MyNav from "./Components/MyNav.jsx";
import MyFooter from "./Components/MyFooter.jsx";
import Welcome from "./Components/Welcome.jsx";
import AllTheBooks from "./Components/AllTheBooks.jsx";
import { useState } from "react";
import FilterContext from "./Context/filter";
import CategoryContext from "./Context/category.js";
import selectedBookContext from "./Context/selectedBook.js";
import history from "./Data/history.json";
import CategoryList from "./Components/CategoryList.jsx";
import CommentArea2 from "./Components/CommentArea2.jsx";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(history);
  const [selectedBook, setSelectedBook] = useState("");

  return (
    <>
      <selectedBookContext.Provider value={{ selectedBook, setSelectedBook }}>
        <CategoryContext.Provider value={{ category, setCategory }}>
          <FilterContext.Provider value={{ filter, setFilter }}>
            <MyNav />
            <Welcome />
            <CategoryList />
            <Container fluid>
              <Row>
                <Col xs={9}>
                  <AllTheBooks />
                </Col>
                <Col xs={3}>
                  <CommentArea2 />
                </Col>
              </Row>
            </Container>
            <MyFooter />
          </FilterContext.Provider>
        </CategoryContext.Provider>
      </selectedBookContext.Provider>
    </>
  );
}

export default App;
