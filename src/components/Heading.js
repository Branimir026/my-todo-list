import React from "react";
import Col from "react-bootstrap/Col";
function Heading() {
  return (
    <Col lg={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
      <h1>Simple Todo List</h1>
    </Col>
  );
}
export default Heading;
