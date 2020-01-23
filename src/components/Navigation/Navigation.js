import React from 'react';
import { Navbar, Col, Nav } from 'react-bootstrap';

const navigation = (props) => {
    return (
        <Col>
            <Navbar bg='info'>
                <Navbar.Brand> Quiz </Navbar.Brand>
                <Nav>
                    <Nav.Link href="../quizList">Take a quiz</Nav.Link>
                    <Nav.Link href="../createQuiz">Create a quiz</Nav.Link>
                </Nav>
            </Navbar>
        </Col>
    )
}

export default navigation
