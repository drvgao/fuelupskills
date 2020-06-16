import React from 'react'
import {Button, Form} from 'react-bootstrap';

function LoginForm(props){
    return(
        <div>
            <br />
            <h4>Login Page</h4>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" name="email" value={props.data.email} placeholder="username or email" />
                    <Form.Text className="text-muted" name="email" value={props.data.email} >
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me for one month." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>{'  '}<Button variant="primary" type="submit">REGISTER HERE</Button>
            </Form>
        </div>
    )
}

export default LoginForm