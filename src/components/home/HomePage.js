import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import HomeBG from '../../images/Home.JPG'; // Tell webpack this JS file uses this image
import StartLearningFormContainer from "./forms/StartLearningFormContainer";

const HomePage = () => {
    return (
        <div>
            <Container>
                 <Col xs={20} md={12}>
                     <Image src={HomeBG} fluid />
                </Col>

                <br />
              <StartLearningFormContainer />
            </Container>
        </div>
    )
}

export default HomePage;