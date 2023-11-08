import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

import { useContext } from "react";
import selectedBookContext from "../Context/selectedBook.js";
import Loading from "./Loading.jsx";
import { getMethod } from "../Bearer.js";

function CommentArea2() {
  const { selectedBook } = useContext(selectedBookContext);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [noComments, setNoComments] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNoComments(false);
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${selectedBook}`,
      getMethod
    )
      .then((r) => r.json())
      .then((data) => {
        setComments(data);
        data.length === 0 ? setNoComments(true) : setNoComments(false);
      })
      .catch((error) => {
        console.error("Errore nella richiesta dei commenti", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedBook]);

  return (
    <Col xs={2}>
      {loading && <Loading />}
      {selectedBook}

      {noComments ? (
        <div>Non ci sono commenti da mostrare</div>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <div>
                <h6>Comment:</h6> {comment.comment} <h6>Rate:</h6>{" "}
                {comment.rate}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Col>
  );
}

export default CommentArea2;
