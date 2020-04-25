import React from 'react'
import {Card, Row, Col, Button, Form} from 'react-bootstrap';

function CourseForm(props){
    let variants = [
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
        ]
    return(
        <div>
            <Row>
                <Col md={3}>
                <br />
                    {variants.map((variant, idx) => (
                    <>
                        <Row style={{display: 'flex', flexDirection: 'row'}}>
                            <Col md={3}>
                                <Card
                                    bg={variant.toLowerCase()}
                                    key={idx}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '18rem', flex: 1 }}
                                    >
                                    <Card.Header>Course Name</Card.Header>
                                    <Card.Body>
                                        <Card.Title> Mathematics </Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="light">Goto Course</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        
                        <br />
                    </>
                    ))};
                </Col>
                            
                <Col md={3}>
                <br />
                    {variants.map((variant, idx) => (
                    <>
                        <Row style={{display: 'flex', flexDirection: 'row'}}>
                            <Col md={3}>
                                <Card
                                    bg={variant.toLowerCase()}
                                    key={idx}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '18rem', flex: 1 }}
                                    >
                                    <Card.Header>Course Name</Card.Header>
                                    <Card.Body>
                                        <Card.Title> Web Development </Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="light">Goto Course</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        
                        <br />
                    </>
                    ))};
                </Col>

                <Col md={3}>
                <br />
                    {variants.map((variant, idx) => (
                    <>
                        <Row style={{display: 'flex', flexDirection: 'row'}}>
                            <Col md={3}>
                                <Card
                                    bg={variant.toLowerCase()}
                                    key={idx}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '18rem', flex: 1 }}
                                    >
                                    <Card.Header>Course Name</Card.Header>
                                    <Card.Body>
                                        <Card.Title> IELTS </Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="light">Goto Course</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        
                        <br />
                    </>
                    ))};
                </Col>
            </Row>   
        </div>
    )
}

export default CourseForm