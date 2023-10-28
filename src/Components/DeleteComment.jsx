import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Loading from "./Loading";

function DeleteComment({ commentId }) {

  const deleteComment = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZmIwYTc3Y2RhYTAwMTQ2ZGYzODMiLCJpYXQiOjE2OTgxNjc1NjIsImV4cCI6MTY5OTM3NzE2Mn0.c1a_v_-jtk5AO1RmpBerwNPt3UTg6A3Zvyvkhe_-Rm8",
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        if (response.ok) {
          alert("Eliminazione avvenuta con successo");
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .catch((error) => {
        console.error("Errore nell'aggiornamento del commento", error);
      });
  };

  return (
    <>
      <Button variant="danger" onClick={deleteComment}>
        Delete
      </Button>
      
    </>
  );
}

export default DeleteComment;
