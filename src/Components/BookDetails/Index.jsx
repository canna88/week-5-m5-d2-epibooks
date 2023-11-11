import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Loading from "../Loading.jsx";
import { getMethod } from "../../Bearer.js";
import selectedBookContext from "../../Context/selectedBook.js";
import AddComment from "../AddComment.jsx";
import Update from "../Update.jsx";
import crudOperatorContext from "../../Context/crudOperator.js";
import DeleteComment from "../DeleteComment.jsx";
import { useParams } from "react-router-dom";
import history from "../../Data/history.json";
import fantasy from "../../Data/fantasy.json";
import horror from "../../Data/horror.json";
import romance from "../../Data/romance.json";
import scifi from "../../Data/scifi.json";
import BookDetailsData from "../BookDetailsData/BookDetailsData.jsx";

function BookDetails() {
  const { selectedBook } = useContext(selectedBookContext);
  const { crudOperator } = useContext(crudOperatorContext);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [noComments, setNoComments] = useState(false);
  const [selectedBookData, setSelectedBookData] = useState({});
  const bookList = [history, fantasy, horror, romance, scifi];
  const { asin } = useParams();

  const getBookData = bookList
    .map((categoryBooks) => categoryBooks.find((book) => book.asin === asin))
    .filter((book) => book)[0];

  useEffect(() => {
    if (selectedBook) {
      setLoading(true);
      setNoComments(false);

      fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${selectedBook}`,
        getMethod
      )
        .then((r) => r.json())
        .then((data) => {
          setComments(data);
          setNoComments(data.length === 0);
          setSelectedBookData(getBookData);
        })
        .catch((error) => {
          console.error("Errore nella richiesta dei commenti", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedBook, crudOperator]);

  return (
    <>
      <Container>
        <BookDetailsData
          img={selectedBookData.img}
          title={selectedBookData.title}
          category={selectedBookData.category}
          price={selectedBookData.price}
        />
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className="my-1">Comments:</h3>
            {selectedBook && (
              <div>
                <AddComment asin={selectedBook} />
                {loading && <Loading />}
                {noComments && (
                  <div>
                    <div>Non ci sono commenti da mostrare</div>
                  </div>
                )}
                {comments.length > 0 && (
                  <div>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th style={{ width: "60%" }}>Comment</th>
                          <th style={{ width: "10%" }}>Rate</th>
                          <th style={{ width: "30%" }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comments.map((comment, index) => (
                          <tr key={index}>
                            <td>{comment.comment}</td>
                            <td>{comment.rate}</td>
                            <td>
                              <Update commentId={comment._id} />
                              <DeleteComment commentId={comment._id} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BookDetails;
