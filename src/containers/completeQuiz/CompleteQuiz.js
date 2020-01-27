import React, { Component } from 'react';
import Question from './Question';
import { Button, Modal} from 'react-bootstrap';
import './completeQuiz.css';
import {checkAuth} from '../../components/User/User'



class CompleteQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
              data: [],
              score: 0,
              show: false,
              i: 0
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

    componentDidMount() {
        let id = this.props.match.params.id;
        fetch('http://localhost:5000/api/question/' + id)
        .then(res => res.json())
        .then(body => this.setState({data: body})
        )
    }

    render() {
        if (!checkAuth()) {
            this.props.history.push('../login')
        }

        if (this.state.data.length > 0) {
            let questions = this.state.data.map((question => {
                let answers = [question.correctAnswer, question.wrongAnswer1, question.wrongAnswer2, question.wrongAnswer3]
                this.shuffle(answers)
                return (
                    <Question key={question.id} question={question.question} answer={question.correctAnswer} 
                    allAnswers={answers} answered={this.answered} />
                )
            }))
            
            return ( 
                <React.Fragment>
                    <div>{questions[this.state.i]}</div> 

                    <Modal show={this.state.show} >
                        <Modal.Header>
                            <Modal.Title> Congratulations! </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >You got {this.state.score} / {this.state.data.length} </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.closeQuiz()}> Close </Button>
                        </Modal.Footer>
                    </Modal>  
                    
                </React.Fragment>
            )        
        }
        else {
            return (
                <div></div>
            )
        }
    }
}


export default CompleteQuiz