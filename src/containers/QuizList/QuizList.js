import React, { Component } from 'react';
import Quiz from '../../components/Quiz/Quiz'
import {checkAuth} from '../../components/User/User'

class QuizList extends Component {
    constructor(props) {
        super(props);
        this.state = {
              quizzes: [],
        };
    }

    
    componentDidMount() {
        fetch('http://localhost:5000/api/quiz')
        .then(res => res.json())
        .then(data => this.setState({quizzes: data}));
    }


    render () {
        if (!checkAuth()) {
            this.props.history.push('./login')
        }
        
        return (
            this.state.quizzes.map((quiz => {
                return (
                    <React.Fragment key={quiz.id}>
                        <br />
                        <br />
                        <Quiz quiz={quiz} {...this.props}></Quiz>
                    </React.Fragment>
                )
            }))
        )
    }
}

export default QuizList