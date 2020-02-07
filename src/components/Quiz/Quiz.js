import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css';
import { IoMdPlay, IoIosTrash } from "react-icons/io";

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
        <Card className='card border-left-primary shadow py-2 col-xl-8 offset-2'>
            <Card.Body>
                <Container>
                    <Row>
                        <Col> <b>{props.quiz.name}</b> </Col>
                        <Col> {props.quiz.username} </Col>
                        <Col>
                            <Button className='btn border-0' style={{backgroundColor: '#443FE0'}} onClick={() => redirectToQuiz(props.quiz.id, props)}> <IoMdPlay size={25} style={{color: '#fff'}}/></Button>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <Button className="btn bg-danger border-0 " onClick={() => redirectToDelete(props.quiz.id, props)} style={{display: checkDelete(props)}}><IoIosTrash size={25} style={{color: '#fff'}}/></Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default quiz