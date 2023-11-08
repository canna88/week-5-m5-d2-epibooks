import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Loading from "./Loading";
import {postMethod} from "../Bearer";

function AddComment({ asin }) {
  const [addOpen, setAddOpen] = useState(false);
  const [addComment, setAddComment] = useState("");
  const [addRate, setAddRate] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const discardAdd = () => {
    setAddOpen(false); // Nasconde il form di aggiornamento
  };

  const opendAdd = () => {
    setAddOpen(true); // Nasconde il form di aggiornamento
  };
  const submitAdd = () => {
    setIsUpdating(true);

    const newComment = {
      comment: addComment,
      rate: addRate,
      elementId: asin,
    };

    fetch(`https://striveschool-api.herokuapp.com/api/comments`, postMethod)
      .then((response) => {
        if (response.ok) {
          setAddOpen(false); // Chiude il form dopo un aggiornamento riuscito
          alert("Commento aggiunto con successo");
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .catch((error) => {
        console.error("Errore nell'aggiornamento del commento", error);
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  return (
    <>
      <Button variant="dark" onClick={opendAdd}>
        Add
      </Button>
      {addOpen && (
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                value={addComment}
                onChange={(e) => setAddComment(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                value={addRate}
                onChange={(e) => setAddRate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Asin</Form.Label>
              <Form.Control value={asin} disabled />
            </Form.Group>
          </Form>

          <div>
            <div>{isUpdating && <Loading />}</div>
            <Button variant="success" onClick={submitAdd}>
              Add Comment
            </Button>

            <Button variant="danger" onClick={discardAdd}>
              Discard
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddComment;
