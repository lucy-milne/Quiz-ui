import React, { Component } from 'react';
import Layout from '../../../components/Layout/Layout';
import {Form, Button} from 'react-bootstrap';
import {login} from '../../../components/UserAuth';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }

    updateUserName = (event) => {
        this.setState({username: event.target.value})
    }

    updatePassword = (event) => {
        this.setState({password: event.target.value})
    }
    
    
    async loginClicked() {
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
        }).then (response => {
            if (response.ok) {
                login(this.state.username)
                this.props.history.push('./quizlist')
            }
            else {
                this.setState({message: 'Username or password incorrect'})
            }
        })
    }


    render () {
      return (
          <Layout>
            <br />
            <h3> Login </h3>
            <Form>
                <br />
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
                <Button variant="info" onClick={() => this.loginClicked()}> Login </Button>
            </Form>
        </Layout>
      )
    }
  }

export default Login