import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css';

const redirectToQuiz = (id, props) => {
    props.history.push('/completeQuiz/' + id);
}

const redirectToDelete = (id, props) => {
    props.history.push('/deleteQuiz/' + id);
}

const checkDelete = (props) => {
    if (props.delete) {
        return ''
    }
    return 'none'
}

const quiz = (props) => {
    return (
        <Card className='card border-left-info shadow py-2 col-xl-8 offset-2'>
            <Card.Body>
                <Container>
                    <Row>
                        <Col> <b>{props.quiz.name}</b> </Col>
                        <Col> {props.quiz.username} </Col>
                        <Col>
                            <button className='btn btn-primary' onClick={() => redirectToQuiz(props.quiz.id, props)}> Take Quiz </button>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <button className="btn btn-danger" onClick={() => redirectToDelete(props.quiz.id, props)} style={{display: checkDelete(props)}}>Delete</button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default quiz