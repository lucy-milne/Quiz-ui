import React, { Component } from 'react';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';

class Question extends Component {

    answered(chosen) {
        this.props.answered(this.props.answer, chosen, this.props)
      }

    render() {
        return (           
            <Container>
                <br />
                <br />
                <Card className='questionCard'>
                    <Card.Header as="h4">{this.props.question}</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Button variant='outline-info' onClick={() => {this.answered(this.props.allAnswers[0])}} block>  {this.props.allAnswers[0]} </Button>
                            </Col>
                            <Col>
                                <Button variant='outline-info'  onClick={() => {this.answered(this.props.allAnswers[1])}} block>  {this.props.allAnswers[1]} </Button>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Button variant='outline-info' onClick={() => this.answered(this.props.allAnswers[2])} block>  {this.props.allAnswers[2]} </Button>
                            </Col>
                            <Col>
                                <Button variant='outline-info' onClick={() => {this.answered(this.props.allAnswers[3])}} block>  {this.props.allAnswers[3]} </Button>
                            </Col>
                        </Row>  
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Question
