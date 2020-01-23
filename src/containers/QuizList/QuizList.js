import React, { Component } from 'react';
import Quiz from '../../components/Quiz/Quiz'

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