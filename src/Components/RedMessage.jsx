import React from "react";

function RedMessage({ message }) {
  return (
    <>
      <div>
        <div style={{ color: "red" }}>{message}</div>
      </div>
    </>
  );
}

export default RedMessage;