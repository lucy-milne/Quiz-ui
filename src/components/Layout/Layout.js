import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Navigation from '../Navigation/Navigation';

const layout = (props) => {
    return (
        <Col>
            <Row>
                <Navigation />
            </Row>
            <Container>
                {props.children}
            </Container>
        </Col>
    )
}

export default layout;