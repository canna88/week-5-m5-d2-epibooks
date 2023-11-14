import React, { useState,useContext } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Loading from "./Loading";
import { deleteMethod} from "../Bearer";
import crudOperatorContext from "../Context/crudOperator.js";


function DeleteComment({ commentId }) {
  const { crudOperator, setCrudOperator } = useContext(crudOperatorContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteComment = () => {
    setIsDeleting(true)
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, deleteMethod)
      .then((response) => {
        if (response.ok) {
          alert("Eliminazione avvenuta con successo");
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .catch((error) => {
        console.error("Errore nell'aggiornamento del commento", error);
      })
      .finally(() => {
        crudOperator ? setCrudOperator(false) : setCrudOperator(true)
        setIsDeleting(false)
      });
  };

  return (
    <>
    
      <Button className="mx-2" variant="danger" onClick={deleteComment}>
        Delete
      </Button>
      {isDeleting && <Loading />}
    </>
  );
}

export default DeleteComment;
