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
        fetch('http://localhost:5000/api/user/createuser', {
            method: 'POST',
            body: JSON.stringify({
                Id: this.state.userName,
                Password: this.state.password
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    render () {
      return (
        <Form>
            <br />
            {/* <Form.Title> Create a User </Form.Title>   TODO: add title */}

            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username" onChange={(event) => this.updateUserName(event)}/>
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
