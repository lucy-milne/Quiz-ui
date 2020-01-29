import React from 'react';
import { Navbar, Col, Nav, Button} from 'react-bootstrap';
import {checkAuth, logout} from '../User/User'

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
                        <Button onClick={localStorage.removeItem('token')} href="../login">Logout</Button>
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
