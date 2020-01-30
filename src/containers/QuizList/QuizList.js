import React, { Component } from 'react';
import Quiz from '../../components/Quiz/Quiz'
import Layout from '../../components/Layout/Layout';
import {checkAuth, getUser} from '../../components/UserAuth'

class QuizList extends Component {
    constructor(props) {
        super(props);
        this.state = {
              otherQuizzes: [],
              userQuizzes: []
        };
    }

    
    componentDidMount() {
        fetch('http://localhost:5000/api/quiz/otherQuizzes', 
        {
            method: 'POST',
            body: JSON.stringify({Id: getUser()}),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.setState({otherQuizzes: data}));

        fetch('http://localhost:5000/api/quiz/usersQuizzes', 
            {
                method: 'POST',
                body: JSON.stringify({Id: getUser()}),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        .then(res => res.json())
        .then(data => this.setState({userQuizzes: data}));
    }

    otherQuizzes() {
        return (
            this.state.otherQuizzes.map((quiz => {
                return (
                    <React.Fragment key={quiz.id}>
                        <br />
                        <br />
                        <Quiz quiz={quiz} delete={false} {...this.props}></Quiz>
                    </React.Fragment>
                )
            }))
        )
    }

    userQuizzes() {
        return (
            this.state.userQuizzes.map((quiz => {
                return (
                    <React.Fragment key={quiz.id}>
                        <br />
                        <br />
                        <Quiz quiz={quiz} delete={true} {...this.props}></Quiz>
                    </React.Fragment>
                )
            }))
        )
    }

    render () {
        if (!checkAuth()) {
            this.props.history.push('./login')
        }
        
        return (
            <Layout>
                {this.otherQuizzes()}
                {this.userQuizzes()} 
                <br/>
            </Layout>
        )
    }
}

export default QuizList