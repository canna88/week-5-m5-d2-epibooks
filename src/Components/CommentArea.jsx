import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import CommentList from "./CommentList.jsx";
import Loading from "./Loading.jsx";
import AddComment from "./AddComment.jsx";
import {bearer} from "../Bearer.js";



function CommentArea({ asin, select }) {
  const [comments, setComments] = useState([]);
  const [isCommentActive, setIsCommentActive] = useState(select);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyComments, setEmptyComments] = useState(false);

  const cardStyle = {
    borderColor: setIsCommentActive ? "red" : "",
    cursor: "pointer",
  };

  useEffect(() => {
    if (isCommentActive === true) {
      setIsLoading(true);

      fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        method: "GET",
        headers: {
          Authorization:
          bearer,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
          setIsCommentActive(true);
          if (data.length === 0) {
            setEmptyComments(true);
          } else {
            setEmptyComments(false);
          }
        })
        .catch((error) => {
          console.error("Errore nella richiesta dei commenti", error);
          setEmptyComments(true); // Imposta a true se si verifica un errore nella richiesta
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [asin]);

  const handleReloadComments = () => {
    setIsCommentActive(false);
    setIsLoading(true);
    setEmptyComments(false);
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      method: "GET",
      headers: {
        Authorization:bearer,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setIsCommentActive(true);
        if (data.length === 0) {
          setEmptyComments(true);
        } else {
          setEmptyComments(false);
        }
      })
      .catch((error) => {
        console.error("Errore nella richiesta dei commenti", error);
        setEmptyComments(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  return (
    <div className="my-2">

      <AddComment asin={asin} />
      <Button className="my-2" variant="warning" onClick={handleReloadComments}>
        Reload
      </Button>


      {isLoading && <Loading />}
      {isCommentActive && (
        <CommentList
          className="my-5"
          list={comments}
          reloadComments={handleReloadComments}
        />
      )}
      {emptyComments && (
        <div className="my-2">Non ci sono commenti da mostrare</div>
      )}
    </div>
  );
}

export default CommentArea;
