import React from "react";
import LoginFormContainer from "./forms/LoginFormContainer";
import { Container } from "reactstrap";

const LoginPage = () => {
    return (
        <div>
            <Container>
                <LoginFormContainer />
            </Container>
        </div>
    )
}

export default LoginPage;