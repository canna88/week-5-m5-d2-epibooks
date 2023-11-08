import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import { useContext } from "react";
import selectedBookContext from "../Context/selectedBook.js";
import Loading from "./Loading.jsx";
import bearer from "../Bearer.js";

function CommentArea2() {
  const { selectedBook } = useContext(selectedBookContext);
  const  [loading, setLoading]  = useState(false);
  const [ comments, setComments ] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${selectedBook}`,
      {
        method: "GET",
        headers: {
          Authorization: bearer,
        },
      }
    )
      .then((r) => r.json())
      .then((data) => setComments(data))
      .catch((error) => {
        console.error("Errore nella richiesta dei commenti", error);
      })
      .finally(() => setLoading(false));
  },[selectedBook]);

  return (
    
    <Col xs={2}>
    { loading && <Loading/>}
      {selectedBook}
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <div>
              <h6>Comment:</h6> {comment.comment} <h6>Rate:</h6> {comment.rate}
            </div>
          </li>
        ))}
      </ul>
    </Col>
  );
}

export default CommentArea2;
