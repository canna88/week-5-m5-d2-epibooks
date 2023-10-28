import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Loading from "./Loading";

function Update({ commentId }) {
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);



  const [commentData, setCommentData] = useState({ comment: "", rate: "" });
  const [newComment, setNewComment] = useState("");
  const [newRate, setNewRate] = useState("");

  const discardUpdate = () => {
    setUpdateOpen(false); // Nasconde il form di aggiornamento
  };

  const updateConfirmation = () => {
    setIsUpdating(true);

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZmIwYTc3Y2RhYTAwMTQ2ZGYzODMiLCJpYXQiOjE2OTgxNjc1NjIsImV4cCI6MTY5OTM3NzE2Mn0.c1a_v_-jtk5AO1RmpBerwNPt3UTg6A3Zvyvkhe_-Rm8",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: newComment, rate: newRate }),
    })
      .then((response) => {
        if (response.ok) {
          setUpdateOpen(false); // Cambia lo stato del form dopo un aggiornamento riuscito
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .catch((error) => {
        console.error("Errore nell'aggiornamento del commento", error);
      });
  };

  useEffect(() => {
    if (updateOpen) {
      setIsLoadingUpdate(true);
      fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZmIwYTc3Y2RhYTAwMTQ2ZGYzODMiLCJpYXQiOjE2OTgxNjc1NjIsImV4cCI6MTY5OTM3NzE2Mn0.c1a_v_-jtk5AO1RmpBerwNPt3UTg6A3Zvyvkhe_-Rm8",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setCommentData(data);
          setNewComment(data.comment);
          setNewRate(data.rate);
          setIsLoadingUpdate(false);
          
        })
        .catch((error) => {
          setIsLoadingUpdate(false);
          console.error("Errore nel caricamento dei commenti", error);
        })
    }
  }, [updateOpen, commentId]);

  return (
    <>
      <Button variant="primary" onClick={() => setUpdateOpen(true)}>
        Change
      </Button>

      {isLoadingUpdate && <Loading />}
      {!isLoadingUpdate && updateOpen && (
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                defaultValue={commentData.comment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                defaultValue={commentData.rate}
                onChange={(e) => setNewRate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Element ID</Form.Label>
              <Form.Control value={commentId} disabled />
            </Form.Group>
          </Form>

          <div>
            {isUpdating && <Loading />}
            <Button variant="success" onClick={updateConfirmation}>
              Update Comment
            </Button>

            <Button variant="danger" onClick={discardUpdate}>
              Discard
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Update;
