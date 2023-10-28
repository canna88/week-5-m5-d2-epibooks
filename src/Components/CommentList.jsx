import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Update from "./Update";
import DeleteComment from "./DeleteComment";

function CommentList({ list }) {
  const [commentToOpen, setCommentToOpen] = useState("");

  const handleUpdateClick = (commentId) => {
    if (commentToOpen === commentId) {
      // Se il commento è già aperto, chiudilo cliccando di nuovo sul pulsante "Change"
      setCommentToOpen("");
    } else {
      // Altrimenti, apri il form per il commento selezionato
      setCommentToOpen(commentId);
    }
  };

  return (
    <>
      <ul>
        {list.map((element, index) => (
          <li key={index}>
            <div>
              <h6>Comment:</h6> {element.comment} <h6>Rate:</h6> {element.rate}
            </div>
            {/* <div>
              <Button variant="danger" asin={element.asin}>
                Delete
              </Button>
            </div> */}

            <Update commentId={element._id} />
            <DeleteComment commentId={element._id} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentList;
