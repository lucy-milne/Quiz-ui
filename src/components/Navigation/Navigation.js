import React from 'react';
import './Navigation.css';
import { Navbar, Col, Nav, Button} from 'react-bootstrap';
import {checkAuth, logout} from '../UserAuth';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css';

const navigation = () => {
    if (checkAuth()) {
        return (   
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled">
                <li className="nav-item">
                    <Navbar.Brand className="sidebar-brand d-flex align-items-center justify-content-center"> Quiz </Navbar.Brand>
                </li>
                <hr className="sidebar-divider my-0"/>
                <li className="nav-item">
                    <Nav.Link className="nav-link" href="../quizList">Take a quiz</Nav.Link>
                </li>
                <hr className="sidebar-divider my-0"/>
                <li className="nav-item">
                    <Nav.Link href="../createQuiz">Make a quiz</Nav.Link>  
                </li>
                <hr className="sidebar-divider d-none d-md-block"/>

                <div className="text-center d-none d-md-inline">
                    <Button className="rounded-circle border-0" id="sidebarToggle" onClick={() => logout()} href="../login" />
                </div>

                
                <i className=" fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
            </ul>

        )
    } 
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled">
        <li className="nav-item">
            <Navbar.Brand className="sidebar-brand d-flex align-items-center justify-content-center"> Quiz </Navbar.Brand>
        </li>

        <hr className="sidebar-divider my-0"/>
        <li className="nav-item">
            <Nav.Link className="nav-link" href="../login">Login</Nav.Link>
        </li>

        <hr className="sidebar-divider my-0"/>
        <li className="nav-item">
            <Nav.Link className="nav-link" href="../createuser">Create user</Nav.Link>
        </li>
    </ul>

    )
}

export default navigation

        // <Col>
        //     <Navbar bg='info'>
        //         <Navbar.Brand> Quiz </Navbar.Brand>
        //         <Button className='right' variant="outline-light" href="../createuser"> Create user </Button>
        //     </Navbar>
        // </Col>