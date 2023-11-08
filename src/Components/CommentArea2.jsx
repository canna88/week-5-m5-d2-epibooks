import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useContext } from "react";
import Loading from "./Loading.jsx";
import { getMethod } from "../Bearer.js";
import selectedBookContext from "../Context/selectedBook.js";
import AddComment from "./AddComment.jsx";
import Update from "./Update.jsx";
import crudOperatorContext from "../Context/crudOperator.js";
import DeleteComment from "./DeleteComment.jsx";

function CommentArea2() {
  const { selectedBook } = useContext(selectedBookContext);
  const { crudOperator } = useContext(crudOperatorContext);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [noComments, setNoComments] = useState(false);
  const [cleanComments, setCleanComments] = useState(false);

  useEffect(() => {
    if (selectedBook) {
      setLoading(true);
      setNoComments(false);
      setCleanComments(false)


      fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${selectedBook}`,
        getMethod
      )
        .then((r) => r.json())
        .then((data) => {
          setComments(data);
          setNoComments(data.length === 0);
          setCleanComments(true)
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
    <Col>
      <h3 className="mt-5">Comments:</h3>
      {selectedBook && (
        <div>
          <AddComment asin={selectedBook} />
          {loading && <Loading />}
          {noComments &&
            <div>
              <div>Non ci sono commenti da mostrare</div>
            </div>}
      
            {cleanComments && <div>
              <ul>
                {comments.map((comment, index) => (
                  <li className="mb-3" key={index}>
                    <p className="mb-0">
                      <span style={{ fontWeight: "bold" }}>Comment:</span>{" "}
                      {comment.comment}
                    </p>
                    <p className="mb-0">
                      <span style={{ fontWeight: "bold" }}>Rate:</span>{" "}
                      {comment.rate}
                    </p>
                    <Update commentId={comment._id}></Update>
                    <DeleteComment commentId={comment._id}></DeleteComment>

                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      )}
    </Col>
  );
}

export default CommentArea2;
