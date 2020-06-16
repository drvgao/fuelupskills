import React from "react";
import {
  Card,
  CardHeader,
  CardProfile,
  CardImage,
  CardTitle,
  CardBody,
  CardName,
  CardJob,
} from "./Card";
import { Row, Col } from "react-bootstrap";
const V1Comps = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardHeader>
            <h4>Title</h4>
            <CardProfile>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg" />
            </CardProfile>
          </CardHeader>
          {/* <CardImage src="https://i.redd.it/b3esnz5ra34y.jpg" /> */}
          <CardBody>
            <CardName>Neil Armstrong</CardName>
            <CardJob>Software Engineer</CardJob>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardImage src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" />
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
