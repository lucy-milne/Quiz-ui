import React from 'react';
import { Navbar, Col, Nav, Button} from 'react-bootstrap';
import {checkAuth, logout} from '../UserAuth';

const navigation = () => {
    if (checkAuth()) {
        return (
            <Col>
                <Navbar bg='info'>
                    <Navbar.Brand> Quiz </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="../quizList">Take a quiz</Nav.Link>
                        <Nav.Link href="../createQuiz">Create a quiz</Nav.Link>     
                    </Nav>
                        <Button onClick={() => logout()} href="../login">Logout</Button>
                </Navbar>
            </Col>
        )
    } 
    return (
        <Col>
            <Navbar bg='info'>
                <Navbar.Brand> Quiz </Navbar.Brand>
            </Navbar>
        </Col>
    )
}

export default navigation
