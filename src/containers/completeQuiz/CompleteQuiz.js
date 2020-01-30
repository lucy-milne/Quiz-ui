import React, { Component } from 'react';
import Question from './Question';
import Layout from '../../components/Layout/Layout';
import { Button, Modal} from 'react-bootstrap';
import {checkAuth} from '../../components/UserAuth';



class CompleteQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
              data: [],
              score: 0,
              show: false,
              i: 0,
              exists: true
        };
    }

    answered = (answer, chosen) => {
        if (answer === chosen) {
            this.setState({score: (this.state.score + 1)})
        }
        this.setState({i: this.state.i + 1})
        if (this.state.i === this.state.data.length - 1) {
            this.setState({show: true})
        }

    }

    //Copied
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    finishQuiz() {
        this.setState({show: true})
    }

    closeQuiz() {
        this.props.history.push('/quizList');
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        const res = await fetch('http://localhost:5000/api/question/' + id)
        if (!res.ok) {
            this.setState({exists: false})
        }
        const body = await res.json()
        this.setState({data: body})
    }

    render() {
        if (!checkAuth()) {
            this.props.history.push('../login')
        }

        if (!this.state.exists) {
            return ( 
            <Layout>             
                <Modal show={true}>
                    <Modal.Header>
                        <Modal.Title> Quiz does not exist</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.closeQuiz()}> Close </Button>
                    </Modal.Footer>
                </Modal>  
            </Layout>   
            )
        }

        let questions = this.state.data.map((question => {
            let answers = [question.correctAnswer, question.wrongAnswer1, question.wrongAnswer2, question.wrongAnswer3]
            this.shuffle(answers)
            return (
                <Question key={question.id} question={question.question} answer={question.correctAnswer} 
                allAnswers={answers} answered={this.answered} />
            )
        }))
        
        return ( 
            <Layout>
                <div>{questions[this.state.i]}</div> 

                <Modal show={this.state.show} >
                    <Modal.Header>
                        <Modal.Title> Congratulations! </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >You got {this.state.score} / {this.state.data.length} </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.closeQuiz()}> Ok </Button>
                    </Modal.Footer>
                </Modal>  
                
            </Layout>
        )        
    }
}


export default CompleteQuiz