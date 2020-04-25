import React from "react";
import PricingFormContainer from "./forms/PricingFormContainer";
import {Row, Col, Card, Container} from 'react-bootstrap';

const PricingPage = () => {
    return (
        // <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pricing Page</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={8}>
                                        <PricingFormContainer />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        // </div>
    )
}

export default PricingPage;