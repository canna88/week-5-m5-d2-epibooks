import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Loading from "./Loading";
import bearer from "../Bearer";

function DeleteComment({ commentId }) {

  const deleteComment = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: bearer,
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