import React from "react";
import CoursesFormContainer from "./forms/CoursesFormContainer";
import { Container } from "reactstrap";

const CoursesPage = () => {
    return (
        <div>
            <Container>
                <CoursesFormContainer />
            </Container>
        </div>
    )
}

export default CoursesPage;