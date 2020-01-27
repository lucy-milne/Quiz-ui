import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    updateUserName = (event) => {
        this.setState({userName: event.target.value})
    }

    updatePassword = (event) => {
        this.setState({password: event.target.value})
    }

    CreateUser() {
        console.log(this.state.userName, this.state.userName)
    }

    render () {
      return (
        <Form>
            <br />
            {/* <Form.Title> Create a User </Form.Title>   TODO: add title */}

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(event) => this.updateUserName(event)}/>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event) => this.updatePassword(event)} />
            </Form.Group>

            <Button variant="info" type="submit" onClick={() => this.CreateUser()}> Create </Button>
        </Form>
      )
    }
  }
 

export default CreateQuiz
