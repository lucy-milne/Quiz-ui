import React, { Component } from 'react';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';

class Question extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // button1: ['outline-info', false],
    //         // button2: ['outline-info', false],
    //         // button3: ['outline-info', false],
    //         // button4: ['outline-info', false],
    //         //answers: []
    //     }
    
    //     // This binding is necessary to make `this` work in the callback
    //   }

    //   handleClick1(chosen) {
    //     if (chosen === this.props.answer) {
    //         this.setState({button1: ['success', true] })
    //     } else {
    //         this.setState({button1: ['danger', true] })
    //     }
    //     this.setState({
    //         button2: ['outline-info', true],
    //         button3: ['outline-info', true],
    //         button4: ['outline-info', true]
    //     })
    //     this.answered(chosen)
    //   }

    //   handleClick2(chosen) {
    //     if (chosen === this.props.answer) {
    //         this.setState({button2: ['success', true] })
    //     } else {
    //         this.setState({button2: ['danger', true] })
    //     }
    //     this.setState({
    //         button1: ['outline-info', true],
    //         button3: ['outline-info', true],
    //         button4: ['outline-info', true]
    //     })
    //     this.answered(chosen)
    //   }

    //   handleClick3(chosen) { 
    //     if (chosen === this.props.answer) {
    //         this.setState({button3: ['success', true] })
    //     } else {
    //         this.setState({button3: ['danger', true] })
    //     }
    //     this.setState({
    //         button2: ['outline-info', true],
    //         button1: ['outline-info', true],
    //         button4: ['outline-info', true]
    //     })
    //     this.answered(chosen)
    //   }

    //   handleClick4(chosen) {
    //     if (chosen === this.props.answer) {
    //         this.setState({button4: ['success', true] })
    //     } else {
    //         this.setState({button4: ['danger', true] })
    //     }
    //     this.setState({
    //         button2: ['outline-info', true],
    //         button3: ['outline-info', true],
    //         button1: ['outline-info', true]
    //     })
    //     this.answered(chosen)
    //   }

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
