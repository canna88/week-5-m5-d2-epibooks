import "./App.css";

//Import file history come predefinito all'inizio
import history from "./Data/history.json";

//Import componenti
import MyNav from "./Components/MyNav.jsx";
import MyFooter from "./Components/MyFooter.jsx";
import Welcome from "./Components/Welcome.jsx";
import AllTheBooks from "./Components/AllTheBooks.jsx";
import { useState } from "react";
import CategoryList from "./Components/CategoryList.jsx";
import CommentArea2 from "./Components/CommentArea2.jsx";
import { Container, Row, Col } from "react-bootstrap";

import selectedBookContext from "./Context/selectedBook.js";
import CategoryContext from "./Context/category.js";
import FilterContext from "./Context/filter.js";
import crudOperatorContext from "./Context/crudOperator.js";

// npm install reac-router-dom
// import { BrowserRouter } from "react-router-dom";

// https://reactrouter.com/en/main/router-components/browser-router

function App() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(history);
  const [selectedBook, setSelectedBook] = useState("");
  const [crudOperator, setCrudOperator] = useState();

  return (
    <>
      {/* <BrowserRouter> */}
      <selectedBookContext.Provider value={{ selectedBook, setSelectedBook }}>
        <crudOperatorContext.Provider value={{ crudOperator, setCrudOperator }}>
          <CategoryContext.Provider value={{ category, setCategory }}>
            <FilterContext.Provider value={{ filter, setFilter }}>
              <Routes>
                <MyNav />
                {/* <Welcome />
                <Route path = "/" element = {<CategoryList/>} />
                <Route path = "/" element = {<Container>
                  <Row>
                    <Col className="m-0" xs={8}>
                      <AllTheBooks />
                    </Col>
                    <Col className="m-0" xs={4}>
                      <CommentArea2 />
                    </Col>
                  </Row>
                </Container>}/>
                <MyFooter /> */}

                <MyNav />
                <Welcome />
                <CategoryList />
                <Container>
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
              </Routes>
            </FilterContext.Provider>
          </CategoryContext.Provider>
        </crudOperatorContext.Provider>
      </selectedBookContext.Provider>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
