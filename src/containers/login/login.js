import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
        }
    }

    updateUserName = (event) => {
        this.setState({username: event.target.value})
    }

    updatePassword = (event) => {
        this.setState({password: event.target.value})
    }

    login() {
        console.log(this.state.username, this.state.password)
            fetch('http://localhost:5000/api/user/getuser', {
                method: 'POST',
                body: JSON.stringify({
                    Id: this.state.username,
                    Password: this.state.password
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                     this.props.history.push('/quizList')
                } else {
                    this.setState({message: 'Username or password incorrect'})
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
                <Form.Text className="text-danger"> {this.state.message} </Form.Text>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event) => this.updatePassword(event)} />   
                <Form.Text className="text-danger"> {this.state.message} </Form.Text>
            </Form.Group>

            <Button variant="info" onClick={() => this.login()}> Login </Button>
        </Form>
      )
    }
  }

export default Login