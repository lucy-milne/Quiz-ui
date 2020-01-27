import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            nameMessage:'',
            passwrodMessage: ''
        }
    }

    updateUserName = (event) => {
        this.setState({username: event.target.value})
    }

    updatePassword = (event) => {
        this.setState({password: event.target.value})
    }

    updatePassword2 = (event) => {
        this.setState({password2: event.target.value})
    }

    CreateUser() {
        this.setState({passwordMessage: '', nameMessage: ''})
        if (this.state.password !== this.state.password2) {
            this.setState({passwordMessage: 'Passwords do not match'})
            return null
        }
            fetch('http://localhost:5000/api/user/createuser', {
                method: 'POST',
                body: JSON.stringify({
                    Id: this.state.username,
                    Password: this.state.password
                }),
                headers: {
                    // Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                     this.props.history.push('/quizList')
                } else {
                    this.setState({nameMessage: 'Username taken'})
                }
            })           
    }

    render () {
      return (
        <Form>
            <br />
            {/* <Form.Title> Create a User </Form.Title>   TODO: add title */}

            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username" onChange={(event) => this.updateUserName(event)}/>
                <Form.Text className="text-danger"> {this.state.nameMessage} </Form.Text>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event) => this.updatePassword(event)} />   
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event) => this.updatePassword2(event)} />
                <Form.Text className="text-danger"> {this.state.passwordMessage} </Form.Text>
            </Form.Group>

            <Button variant="info" onClick={() => this.CreateUser()}> Create </Button>
        </Form>
      )
    }
  }
 

export default CreateQuiz
