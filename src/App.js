import "./App.css";

//Import file history come predefinito all'inizio
import history from "./Data/history.json";

// Import di react router DOM
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//Import componenti
import MyNav from "./Components/MyNav.jsx";
import MyFooter from "./Components/MyFooter.jsx";
import Welcome from "./Components/Welcome.jsx";
import AllTheBooks from "./Components/AllTheBooks.jsx";
import CategoryList from "./Components/CategoryList.jsx";
import CommentArea2 from "./Components/CommentArea2.jsx";
import BookDetails from "./Components/BookDetails/Index.jsx";
import NotFound from "./Components/NotFound.jsx";
import Contacts from "./Components/Contacts.jsx";

// Import stati, context e CSS
import CategoryContext from "./Context/category.js";
import FilterContext from "./Context/filter.js";
import crudOperatorContext from "./Context/crudOperator.js";
import selectedBookContext from "./Context/selectedBook.js";

import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(history);
  const [selectedBook, setSelectedBook] = useState("");
  const [crudOperator, setCrudOperator] = useState();

  return (
    <>
      <BrowserRouter>
        <selectedBookContext.Provider value={{ selectedBook, setSelectedBook }}>
          <crudOperatorContext.Provider
            value={{ crudOperator, setCrudOperator }}
          >
            <CategoryContext.Provider value={{ category, setCategory }}>
              <FilterContext.Provider value={{ filter, setFilter }}>
                <MyNav />
                <div style ={{height:"100px"}}></div>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Welcome />
                        <CategoryList />
                        <Container>
                          <Row>
                            <Col className="m-0" xs={12}>
                              <AllTheBooks />
                            </Col>
                            {/* <Col className="m-0" xs={4}>
                              <CommentArea2 />
                            </Col> */}
                          </Row>
                        </Container>
                      </>
                    }
                  />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/bookdetails/:asin" element={<BookDetails />} />
                  <Route path="*" element={<Navigate to="/notfound" />} />
                  <Route path="/notfound" element={<NotFound />} />
                </Routes>
                <MyFooter />
              </FilterContext.Provider>
            </CategoryContext.Provider>
          </crudOperatorContext.Provider>
        </selectedBookContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
