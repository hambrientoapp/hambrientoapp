import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

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
                            Burger
                        </a>
                    </Col>
                    <Col>
                        <h2>
                            <span role='img' aria-label='pizza emoji' className='menu-item'>🍕</span>
                        </h2>
                        <a href="#Pizza">
                            Pizza
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img'aria-label='sushi emoji' className='menu-item'>🍣</span></h2>
                        <a href="#Sushi">
                            Sushi
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Spain emoji' className='menu-item'>🥔</span></h2>
                        <a href="#Spainish">
                            Croquettes
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='taco emoji' className='menu-item'>🇲🇽</span></h2>
                        <a href="#Mexican">
                            Mexican
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Venezuela emoji' className='menu-item'>🇻🇪</span></h2>
                        <a href="#Venezuelan">
                           Venezuelan
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Peru emoji' className='menu-item'>🇵🇪</span></h2>
                        <a href="#Peruvian">
                            Peruvian
                        </a>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Pakistan emoji' className='menu-item'>🇵🇰</span></h2>
                        <a href="#Pakistani">
                            Pakistani
                        </a>
                    </Col>
					<Col>
                        <h2><span role='img' aria-label='Flag of Chile emoji' className='menu-item'>🇨🇱</span></h2>
                        <a href="#Chilean">
                            Chilean
                        </a>
                    </Col>
					<Col>
                        <h2><span role='img' aria-label='Noodles With Chopsticks' className='menu-item'>🇯🇵</span></h2>
                        <a href="#Japanese">
                            Japanese
                        </a>
                    </Col>					
                </Row>
            </Container>
        </div>
    )
}