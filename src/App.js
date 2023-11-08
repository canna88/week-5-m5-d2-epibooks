import "./App.css";
import history from "./Data/history.json";

import MyNav from "./Components/MyNav.jsx";
import MyFooter from "./Components/MyFooter.jsx";
import Welcome from "./Components/Welcome.jsx";
import AllTheBooks from "./Components/AllTheBooks.jsx";
import { useState } from "react";
import CategoryList from "./Components/CategoryList.jsx";
import CommentArea2 from "./Components/CommentArea2.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import selectedBookContext from "./Context/selectedBook.js";
import CategoryContext from "./Context/category.js";
import FilterContext from "./Context/filter.js";
import crudOperatorContext from "./Context/crudOperator.js";

function App() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(history);
  const [selectedBook, setSelectedBook] = useState("");
 const [crudOperator, setCrudOperator] = useState();

  return (
    <>
      <selectedBookContext.Provider value={{ selectedBook, setSelectedBook }}>
        <crudOperatorContext.Provider value={{ crudOperator, setCrudOperator }}>
          <CategoryContext.Provider value={{ category, setCategory }}>
            <FilterContext.Provider value={{ filter, setFilter }}>
              <MyNav />
              <Welcome />
              <CategoryList />
              <Container  >
                <Row>
                  <Col className="m-0" xs={8}>
                    <AllTheBooks />
                  </Col>
                  <Col className="m-0" xs={4}>
                    <CommentArea2 />
                  </Col>
                </Row>
              </Container>
              <MyFooter />
            </FilterContext.Provider>
          </CategoryContext.Provider>
        </crudOperatorContext.Provider>
      </selectedBookContext.Provider>
    </>
  );
}

export default App;
