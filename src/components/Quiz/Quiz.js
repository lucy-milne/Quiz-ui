import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';

const redirectToQuiz = (id, props) => {
    props.history.push('/completeQuiz/' + id);
}

const redirectToDelete = (id, props) => {
    props.history.push('/deleteQuiz/' + id);
}


const quiz = (props) => {
    return (
        <Card>
            <Card.Body>
                <Container>
                    <Row>
                        <Col> {props.quiz.name} </Col>
                        <Col> {props.quiz.username} </Col>
                        <Col>
                            <Button variant="info" onClick={() => redirectToQuiz(props.quiz.id, props)}> Take Quiz </Button>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <Button variant="danger" onClick={() => redirectToDelete(props.quiz.id, props)} disabled={!props.delete}>Delete </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default quiz