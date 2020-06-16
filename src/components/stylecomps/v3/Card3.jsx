import React from "react";
import { Card, CardImage, CardTitle, CardFigCaption } from "./Card";
import { Row, Col } from "react-bootstrap";
const V3Comps = () => {
  return (
    <Row>
      <Col>
        <Card>
          <h4>Title</h4>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardImage src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" />
          <CardFigCaption>Caption</CardFigCaption>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardImage src="https://i.redd.it/b3esnz5ra34y.jpg" />
          <CardTitle>
            <CardFigCaption>Caption</CardFigCaption>
          </CardTitle>
        </Card>
      </Col>
    </Row>
  );
};

export default V3Comps;
