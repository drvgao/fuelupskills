import React from "react";
import Container from "./Container";
import Header from "./Header";
import { Route } from "react-router-dom";
import Router from "react-router-dom/BrowserRouter";

import Home from "./Home";
import Pricing from "./Pricing";
import Card from "./cards/Card";
import CardTitle from "./cards/CardTitle";

const index = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Card color="#FFC119">
          <CardTitle>Course completed</CardTitle>
          <h3 style={{ textAlign: "center" }}>16</h3>
        </Card>
        <br />
        <Card color="#F86D70">
          <CardTitle>Certifications earned</CardTitle>
          <h3 style={{ textAlign: "center" }}>4</h3>
        </Card>
        <br />
        <Card color="#86CC8A">
          <CardTitle>Courses in progress</CardTitle>
          <h3 style={{ textAlign: "center" }}>12</h3>
        </Card>
        <br />
        <Card color="#C799F2">
          <CardTitle>Forum discussions</CardTitle>
          <h4 style={{ textAlign: "center" }}>9021</h4>
        </Card>
      </Container>
    </Router>
  );
};

export default index;
