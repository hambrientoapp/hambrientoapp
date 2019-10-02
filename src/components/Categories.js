import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

export default function Categories() {
    return (
        <div id="categories">
            <Container className="mt-4 mb-4">
                <Row className="justify-content-md-center text-center">
                    <Col>
                        <h2>🍔</h2>
                        <a href="#">Burger</a>
                    </Col>
                    <Col>
                        <h2>🍕</h2>
                        <a href="#">Pizza</a>
                    </Col>
                    <Col>
                        <h2>🍣</h2>
                        <a href="#">Sushi</a>
                    </Col>
                    <Col>
                        <h2>🌮</h2>
                        <a href="#">Mexican</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}