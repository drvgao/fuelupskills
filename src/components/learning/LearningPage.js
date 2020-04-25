import React from "react";
// import LearningFormContainer from "./forms/LearningFormContainer";
import CoursesFormContainer from '../courses/forms/CoursesFormContainer'
import { Container } from "reactstrap";

const LearningPage = () => {
    return (
        <div>
            <Container>
            <br />
            <h2>Start learning something new today</h2>
                {/* <LearningFormContainer /> */}
                <CoursesFormContainer />
            </Container>
        </div>
    )
}

export default LearningPage;