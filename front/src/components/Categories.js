import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'

export default function Categories() {
    return (
        <div id="categories">
            <Container className="mt-4 mb-4">
                <Row className="justify-content-md-center text-center">
                    <Col>
                        <h2>
                            <span role='img' aria-label='burger emoji' className='menu-item'>🍔</span>
                        </h2>
                        <a href="#Burger">
                            Burger <Badge variant="primary">9</Badge>
                        </a>
                    </Col>
                    <Col>
                        <h2>
                            <span role='img' aria-label='pizza emoji' className='menu-item'>🍕</span>
                        </h2>
                        <a href="#Pizza">
                            Pizza <Badge variant="primary">3</Badge>
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img'aria-label='sushi emoji' className='menu-item'>🍣</span></h2>
                        <a href="#Sushi">
                            Sushi <Badge variant="primary">4</Badge>
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='taco emoji' className='menu-item'>🌮</span></h2>
                        <a href="#Mexican">
                            Mexican <Badge variant="primary">7</Badge>
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Venezuela emoji' className='menu-item'>🇻🇪</span></h2>
                        <a href="#Venezuelan">
                           Venezuelan <Badge variant="primary">9</Badge>
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Peru emoji' className='menu-item'>🇵🇪</span></h2>
                        <a href="#Peruvian">
                            Peruvian <Badge variant="primary">11</Badge>
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Pakistan emoji' className='menu-item'>🇵🇰</span></h2>
                        <a href="#Pakistani">
                            Pakistani <Badge variant="primary">12</Badge>
                        </a>
                    </Col>
					<Col>
                        <h2><span role='img' aria-label='Flag of Chile emoji' className='menu-item'>🇨🇱</span></h2>
                        <a href="#Chilean">
                            Chilean <Badge variant="primary">13</Badge>
                        </a>
                    </Col>
					<Col>
                        <h2><span role='img' aria-label='Noodles With Chopsticks' className='menu-item'>🍜</span></h2>
                        <a href="#Japanese">
                            Japanese <Badge variant="primary">13</Badge>
                        </a>
                    </Col>					
                </Row>
            </Container>
        </div>
    )
}