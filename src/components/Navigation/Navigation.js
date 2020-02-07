import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {checkAuth, logout} from '../UserAuth';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css';
import { IoIosLogOut } from "react-icons/io";

const navigation = () => {
    if (checkAuth()) {
        return (   
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled">
                <li className="nav-item">
                    <div className="sidebar-brand d-flex align-items-center justify-content-center"> Quiz </div>
                </li>
                
                <hr className="sidebar-divider d-none d-md-block"/>
                <hr className="sidebar-divider my-0"/>
                
                <li className="nav-item">
                    <Nav.Link className="nav-link" href="../quizList">Take a quiz</Nav.Link>
                </li>
                <hr className="sidebar-divider my-0"/>
                <li className="nav-item">
                    <Nav.Link href="../createQuiz">Make a quiz</Nav.Link>  
                </li>
                <hr className="sidebar-divider d-none d-md-block"/>
                <hr className="sidebar-divider d-none d-md-block"/>

                <div className="text-center d-none d-md-inline">
                <li className="nav-item">
                    <Nav.Link onClick={() => logout()} href="../login"><IoIosLogOut size={28} style={{color: '#fff'}}/></Nav.Link>  
                </li>
                
                
                
                </div>
            </ul>

        )
    } 
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled">
        <li className="nav-item">
            <Navbar.Brand className="sidebar-brand d-flex align-items-center justify-content-center"> Quiz </Navbar.Brand>
        </li>

        <hr className="sidebar-divider d-none d-md-block"/>
        <hr className="sidebar-divider my-0"/>
        <li className="nav-item">
            <Nav.Link className="nav-link" href="../login">Login</Nav.Link>
        </li>

        <hr className="sidebar-divider my-0"/>
        <li className="nav-item">
            <Nav.Link className="nav-link" href="../createuser">Create user</Nav.Link>
        </li>
        <hr className="sidebar-divider d-none d-md-block"/>
        <hr className="sidebar-divider my-0"/>
    </ul>

    )
}

export default navigation
