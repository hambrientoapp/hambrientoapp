import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

export default function Categories() {
    return (
        <div id="categories">
            <Container className="mt-4 mb-4">
                <Row className="justify-content-md-center text-center">
                    <Col>
                        <h2><span role='img' aria-label='burger emoji' className='menu-item'>🍔</span></h2>
                        <a href="#Burger">Burger</a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='pizza emoji' className='menu-item'>🍕</span></h2>
                        <a href="#Pizza">Pizza</a>
                    </Col>
                    <Col>
                        <h2><span role='img'aria-label='sushi emoji' className='menu-item'>🍣</span></h2>
                        <a href="#Sushi">Sushi</a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='taco emoji' className='menu-item'>🌮</span></h2>
                        <a href="#Mexican">Mexican</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}