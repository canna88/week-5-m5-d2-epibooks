import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Loading from "./Loading";
import { getMethod, putMethod} from "../Bearer";

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

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, putMethod)
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
        getMethod
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
