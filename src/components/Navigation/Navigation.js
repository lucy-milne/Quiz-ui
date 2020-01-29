import React from 'react';
import './Navigation.css';
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
                        <Button className='right' onClick={() => logout()} variant="outline-light" href="../login">Logout</Button>
                </Navbar>
            </Col>
        )
    } 
    return (
        <Col>
            <Navbar bg='info'>
                <Navbar.Brand> Quiz </Navbar.Brand>
                <Button className='right' variant="outline-light" href="../createuser"> Create User </Button>
            </Navbar>
        </Col>
    )
}

export default navigation
