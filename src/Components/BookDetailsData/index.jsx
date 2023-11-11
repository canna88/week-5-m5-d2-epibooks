import React from "react";
import { Col, Row } from "react-bootstrap";

function BookDetailsData({ img, title, category, price }) {
  const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  return (
    <>
      <Row className="mt-5 mb-2">
        <Col xs={12} className="d-flex">
          <h3>{title}</h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={2} className="d-flex">
          {img && (
            <img
              src={img}
              alt={title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </Col>
        <Col
          xs={12}
          lg={9}
          className="d-flex flex-column justify-content-start align-items-start"
        >
          <h5>
            <span style={{ fontWeight: "bold" }}>Category: </span>
            {category}
          </h5>
          <p>
            <span style={{ fontWeight: "bold" }}>Description: </span>
            {loremIpsum}
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          xs={12}
          className="d-flex flex-column justify-content-start align-items-start"
        >
          <p>
            <span style={{ fontWeight: "bold" }}>Price: </span>€ {price}
          </p>
        </Col>
      </Row>
    </>
  );
}

export default BookDetailsData;
