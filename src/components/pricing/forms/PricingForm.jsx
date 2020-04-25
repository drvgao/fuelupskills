import React from 'react'
import { Input } from 'reactstrap';
import {Button, Form, FormControl, Label, FormText, Col, Container} from 'react-bootstrap';
import { Fade, Roll, Zoom, Flip, Rotate, Bounce, Slide, LightSpeed, Reveal } from 'react-reveal';

function PricingForm(props){
    return(
        <div>
            <h4>Fill the form to complete the package purchase.</h4>
            <Form onSubmit={props.handleSubmit}>
                    <Form.Group>
                        <Form.Label for="fullname" >Full Name</Form.Label>
                            <Input type="text" name="fullname" vale={props.data.fullname} onChange={props.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="courseName" >Course Name</Form.Label>
                            <Input type="text" name="courseName" value={props.data.courseName} onChange={props.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="packageName" >Package Name</Form.Label>
                            <Input type="text" name="packageName" value={props.data.packageName} onChange={props.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="price" >Price</Form.Label>
                            <Input type="text" name="price" value={props.data.price} onChange={props.handleChange} />
                    </Form.Group>
                    <FormText>
                        <h4>{props.data.fullname && 'Full Name#   '}<b>{props.data.fullname}</b></h4><h4>{props.data.courseName && 'Course Name#   '}{props.data.courseName}</h4>
                        <h4>{props.data.packageName && 'Package Name#  '}{props.data.packageName}</h4><h4>{props.data.price && 'Price# '}{props.data.price}</h4>
                    </FormText>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    
                    
                    
                    <Form.Group tag="fieldset">
                        <legend>Select Type of Package</legend>
                        <Container>
                            <Form.Group check>
                                <Form.Label check>
                                    <Input type="radio" name="package" value="3months" checked={props.data.package === "3months"} onChange={props.handleChange}/>{' '}
                                    3 Months Package
                                </Form.Label>
                            </Form.Group>
                            <Form.Group check>
                                <Form.Label check>
                                    <Input type="radio" name="package" value="6months"  checked={props.data.package === "6months"} onChange={props.handleChange}/>{' '}
                                    6 Months Package
                                </Form.Label>
                            </Form.Group>
                        </Container>
                        <h4>{props.data.package && 'The Package'} {props.data.package}</h4>
                    </Form.Group>

                    <Form.Label>Select a course:: </Form.Label>
                    <select
                        value={props.data.courses}
                        onChange={props.handleChange}
                        name="courses"
                    >       <option value="CBSE">--select a course--</option>
                            <option value="CBSE">CBSE</option>
                            <option value="SSE">SSE</option>
                            <option value="ICSE">ICSE</option>
                            <option value="IB">IB</option>
                    </select>
                    <h4>Selected course name is {props.data.courses}</h4>

                    <Roll>
                    <Form.Group>
                        <input 
                            type="checkbox"
                            name="teststatus"
                            checked={props.data.tnc}
                            onChange={props.handleChange}
                        /> Accept terms and conditions.
                    </Form.Group>
                    </Roll>

                    <Button variant="primary">Purchase Package</Button>
                </Form>
        </div>
    )
}

export default PricingForm