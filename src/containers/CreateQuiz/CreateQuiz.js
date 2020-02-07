import React, { Component } from 'react';
import './Createquiz.css';
import Layout from '../../components/Layout/Layout';
import {Form, Button, Row, Col, Alert, Card} from 'react-bootstrap';
import {checkAuth, getUser} from '../../components/UserAuth'


class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameVMessage: '',

            question: '',
            questionValid: 0,
            correct: '',
            correctValid: 0,
            wrong1: '',
            wrong1Valid: 0,
            wrong2: '',
            wrong2Valid: 0,
            wrong3: '',
            wrong3Valid: 0,

            validationMessage: ['', 'Feild Required', 'Must be under 200 characters'],
            
            id: '',
            questionList: [],
            showAdded: false,
            showAlert: false
        };
    }

    updateName = (event) => {
        this.setState({name: event.target.value})
    }

    updateQuestion = (event) => {
        this.setState({question: event.target.value})
    }

    updateCorrect = (event) => {
        this.setState({correct: event.target.value})
    }

    updateWrong1 = (event) => {
        this.setState({wrong1: event.target.value})
    }

    updateWrong2 = (event) => {
        this.setState({wrong2: event.target.value})
    }

    updateWrong3 = (event) => {
        this.setState({wrong3: event.target.value})
    }


    createClicked() {
      if (this.state.questionList.length > 0) {
        this.createQuiz()
      } else {
        this.setState({showAlert: true})
        
        //Copied
        setTimeout(() => {
          this.setState({
              showAlert: false
          })
      }, 1000)
      }
    }


    async createQuiz() {
        if (this.state.name === '') {
          this.setState({nameMessage: 'Field Required'})
          return null
        }
        else if (this.state.name.length > 200) {
          this.setState({nameMessage: 'Must be under 200 characters'})
          return null
        }
        
        const res = await fetch('http://localhost:5000/api/quiz/', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                username: getUser()
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const json = await res.json();
        this.setState({id: json})

        for (const question of this.state.questionList) {
            
            fetch('http://localhost:5000/api/question/', {
                method: 'POST',
                body: JSON.stringify({
                    question: question[0],
                    correctAnswer: question[1],
                    wrongAnswer1: question[2],
                    wrongAnswer2: question[3],
                    wrongAnswer3: question[4],
                    quizId: this.state.id
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }

        this.props.history.push('/quizList');
        
    }



    addQuestion() {
        this.setState({questionList: this.state.questionList.concat(
            [[this.state.question, this.state.correct, this.state.wrong1, this.state.wrong2, this.state.wrong3]])})

        this.setState({            
            question: '',
            correct: '',
            wrong1: '',
            wrong2: '',
            wrong3: '',
        })

        this.setState({showAdded: true})
        
        //Copied
        setTimeout(() => {
          this.setState({
              showAdded: false
          })
      }, 700)
    }

    cancel() {
        this.props.history.push('/quizList');
    }

    async addClicked() {
      await (this.setState({questionValid: this.state.question === '' ? 1 : (this.state.question.length <= 200 ? 0 : 2)}),
      this.setState({correctValid: this.state.correct === '' ? 1 : (this.state.correct.length <= 200 ? 0 : 2)}),
      this.setState({wrong1Valid: this.state.wrong1 === '' ? 1 : (this.state.wrong1.length <= 200 ? 0 : 2)}),
      this.setState({wrong2Valid: this.state.wrong2 === '' ? 1 : (this.state.wrong2.length <= 200 ? 0 : 2)}),
      this.setState({wrong3Valid: this.state.wrong3 === '' ? 1 : (this.state.wrong3.length <= 200 ? 0 : 2)}))

      if ((this.state.questionValid + this.state.correctValid + this.state.wrong1Valid + 
        this.state.wrong2Valid + this.state.wrong3Valid) === 0) 
        {
          this.addQuestion()
        }
      
    }


    render () {
      if (!checkAuth()) {
          this.props.history.push('./login')
      }
      return (
          <Layout>
            <br />
            <Card className='card border-left-info shadow py-2 col-xl-8 offset-2'>
              <br />
              <Form.Group controlId="name">
                <Form.Label > Quiz Name </Form.Label>
                <Form.Control placeholder="Quiz Name"  value={this.state.name} onChange={(event) => this.updateName(event)}/>
                <Form.Text className="text-danger"> {this.state.nameMessage} </Form.Text>
              </Form.Group>

              <br />
              <Form.Group controlId="question">
                <Form.Label> Add Question </Form.Label>
                <Form.Control  placeholder="Question" value={this.state.question} onChange={(event) => this.updateQuestion(event)}/>
                <Form.Text className="text-danger"> {this.state.validationMessage[this.state.questionValid]} </Form.Text>
              </Form.Group>

              <Form.Group controlId="correct">
                <Form.Control  placeholder="Correct Answer" value={this.state.correct} onChange={(event) => this.updateCorrect(event)} />
                <Form.Text className="text-danger"> {this.state.validationMessage[this.state.correctValid]} </Form.Text>
              </Form.Group>

              <Form.Group controlId="wrong1">
                <Form.Control  placeholder="Wrong Answer" value={this.state.wrong1} onChange={(event) => this.updateWrong1(event)} />
                <Form.Text className="text-danger"> {this.state.validationMessage[this.state.wrong1Valid]} </Form.Text>
              </Form.Group>

              <Form.Group controlId="wrong2">
                <Form.Control  placeholder="Wrong Answer" value={this.state.wrong2} onChange={(event) => this.updateWrong2(event)}/>
                <Form.Text className="text-danger"> {this.state.validationMessage[this.state.wrong2Valid]} </Form.Text>
              </Form.Group>

              <Form.Group controlId="wrong3" >
                <Form.Control  placeholder="Wrong Answer" value={this.state.wrong3} onChange={(event) => this.updateWrong3(event)}/>
                <Form.Text className="text-danger"> {this.state.validationMessage[this.state.wrong3Valid]} </Form.Text>
              </Form.Group>

              <Row>
                <Col>
                  <Button variant="primary" onClick={() => this.addClicked()}> Add Question </Button>
                </Col>
                <Col>
                  <Alert className={'alert'} variant='info'  show={this.state.showAdded}> Question added </Alert>   
                  <Alert className={'alert'} variant='danger'  show={this.state.showAlert}> Add a question </Alert>                     
                </Col>
                < Col align='right'> 
                  <Button variant='success' onClick={() => this.createClicked()}> Create Quiz </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button variant='danger' onClick={() => this.cancel()}> Cancel </Button>
                </Col>
              </Row>
              <br />
            </Card>
          </Layout>
      )
    }
  }


export default CreateQuiz
