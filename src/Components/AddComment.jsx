import React, { useState, useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Loading from "./Loading";
import { bearer } from "../Bearer";
import crudOperatorContext from "../Context/crudOperator.js";
import RedMessage from "./RedMessage";

function AddComment({ asin }) {
  const [addOpen, setAddOpen] = useState(false);
  const [addComment, setAddComment] = useState("");
  const [addRate, setAddRate] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { crudOperator, setCrudOperator } = useContext(crudOperatorContext);

  const discardAdd = () => {
    setAddOpen(false);
  };

  useEffect(() => {
    setAddOpen(false);
  }, [asin]);

  const opendAdd = () => {
    setAddOpen(true);
  };

  const submitAdd = () => {
    if (!addComment || !addRate || addRate < 1 || addRate > 5) {
      alert("Inserisci un commento valido e un rate compreso tra 1 e 5");
      return;
    }
    setIsUpdating(true);

    const newComment = {
      comment: addComment,
      rate: addRate,
      elementId: asin,
    };

    fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      method: "POST",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (response.ok) {
          setAddOpen(false);
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
        crudOperator ? setCrudOperator(false) : setCrudOperator(true);
        setAddComment("");
        setAddRate("");
      });
  };

  return (
    <>
      <div className="my-3">
        <Button variant="dark" onClick={opendAdd}>
          Add comment
        </Button>

        {addOpen && (
          <div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  value={addComment}
                  onChange={(e) => setAddComment(e.target.value)}
                  required
                />
              </Form.Group>
              {!addComment ? <RedMessage message="Inserisci un commento" /> : null}


              <Form.Group className="mb-3">
                <Form.Label>Rate</Form.Label>
                <Form.Control
                type="number"
                  value={addRate}
                  onChange={(e) => setAddRate(e.target.value)}
                  required
                />

              </Form.Group>
              {addRate < 1 || addRate > 5 ? <RedMessage message="Il rate deve essere compreso tra 1 e 5" /> : null}


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
      </div>
    </>
  );
}

export default AddComment;
