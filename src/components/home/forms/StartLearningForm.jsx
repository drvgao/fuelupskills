import React from 'react'
import { Button } from 'react-bootstrap';

function StartLearningForm(props){
    return(
        <div>
            <br />
            <h1 style={{color: 'rgb(38, 0, 153)'}}>Interactive quizzes,
                tests & exams
            </h1>

            <Button variant="success">Start Learning</Button>{' '}
            
        </div>
    )
}

export default StartLearningForm