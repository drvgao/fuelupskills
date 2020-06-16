import React from "react";
import { Card, CardImage, CardTitle } from "./Card";
import { Row, Col } from "react-bootstrap";
const V1Comps = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardImage src="https://i.redd.it/b3esnz5ra34y.jpg" />
          <CardTitle>Title of the card</CardTitle>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardImage src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
        </Card>
      </Col>
      <Col>
        <Card>
          <CardImage src="https://i.redd.it/b3esnz5ra34y.jpg" />
          <CardTitle>Title of the card</CardTitle>
        </Card>
      </Col>
    </Row>
  );
};

export default V1Comps;
