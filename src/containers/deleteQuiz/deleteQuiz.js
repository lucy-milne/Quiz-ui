import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
import {checkAuth} from '../../components/User/User'


class DeleteQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    
    cancelDelete() {
        this.props.history.push('/quizList');
    }

    async delete() {
        let id = this.props.match.params.id;

        const res = await fetch('http://localhost:5000/api/question/' + id)
        const json = await res.json()
        this.setState({questions: json})

        for (const question of this.state.questions ) {
            await fetch('http://localhost:5000/api/question/' + question.id, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
        
        await fetch('http://localhost:5000/api/quiz/' + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })

        this.props.history.push('/quizList');
    }

    render () {
        if (!checkAuth()) {
            this.props.history.push('../login')
        }

        return (
            <React.Fragment>
                    <Modal show={true}>
                    <Modal.Header>
                        <Modal.Title> Are you sure? </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                    <Button variant="danger" onClick={() => this.delete()}> Delete </Button>
                        <Button variant="secondary" onClick={() => this.cancelDelete()}> Cancel </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default DeleteQuiz