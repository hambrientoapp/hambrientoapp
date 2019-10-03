import React from 'react'

import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap'

function About() {
    return (
        <main>
            <Jumbotron fluid>
                <Container>
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla quos minima tempora totam delectus voluptatibus itaque atque nisi impedit quisquam odio fuga, quas aspernatur natus aperiam, necessitatibus cumque dolorum.
                    </p>
                </Container>
            </Jumbotron>

            <Container>
                <Row className="justify-content-sm-center">
                    <Col md={3}>
                        <Card className="mb-2">
                            <Card.Img variant="top" src="https://via.placeholder.com/100" />
                            <Card.Body className="text-center">
                                <Card.Title>User One</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">@userone</Card.Subtitle>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus eveniet laborum, error deserunt reprehenderit quidem aperiam debitis? Error commodi accusantium reiciendis sit modi ab temporibus quae, omnis facilis a! </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="mb-2">
                            <Card.Img variant="top" src="https://via.placeholder.com/100" />
                             <Card.Body className="text-center">
                                <Card.Title>User Two</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">@usertwo</Card.Subtitle>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias eaque, architecto saepe optio reprehenderit soluta adipisci suscipit impedit laboriosam dolorum accusantium ea iste recusandae. Odio hic fugit facere pariatur?</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="mb-2">
                            <Card.Img variant="top" src="https://via.placeholder.com/100" />
                             <Card.Body className="text-center">
                                <Card.Title>Yoselyn Ramirez</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">@esmeraldarr</Card.Subtitle>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias eaque, architecto saepe optio reprehenderit soluta adipisci suscipit impedit laboriosam dolorum accusantium ea iste recusandae. Odio hic fugit facere pariatur?</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="mb-2">
                            <Card.Img variant="top" src="https://via.placeholder.com/100" />
                             <Card.Body className="text-center">
                                <Card.Title>Eduardo Collado</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">@aedork</Card.Subtitle>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias eaque, architecto saepe optio reprehenderit soluta adipisci suscipit impedit laboriosam dolorum accusantium ea iste recusandae. Odio hic fugit facere pariatur?</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="mb-2">
                            <Card.Img variant="top" src="https://via.placeholder.com/100" />
                             <Card.Body className="text-center">

                                <Card.Title>Wendell Eloi</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">@wendelleloi</Card.Subtitle>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias eaque, architecto saepe optio reprehenderit soluta adipisci suscipit impedit laboriosam dolorum accusantium ea iste recusandae. Odio hic fugit facere pariatur?</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="mb-2">
                            <Card.Img variant="top" src="https://via.placeholder.com/100" />
                             <Card.Body className="text-center">
                                <Card.Title>Pedro Pablo Pastene</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">@PPastene</Card.Subtitle>
                                <Card.Title>Abner Galvez</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">@abnergalvez</Card.Subtitle>

                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias eaque, architecto saepe optio reprehenderit soluta adipisci suscipit impedit laboriosam dolorum accusantium ea iste recusandae. Odio hic fugit facere pariatur?</Card.Text>
                            </Card.Body>
                        </Card>
                </Row>
                <Row className="justify-content-sm-center">
                  <Col md={3}>
                    <Card className="mb-2">
                      <Card.Img variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/532875698452069032/F1942BA577B8F26C219AFCB5F224407C631AFDE4/" />
                      <Card.Body className="text-center">
                        <Card.Title>Enrique Pino</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">@pinoliso</Card.Subtitle>
                        <Card.Text>El mas sueltohxx</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                </Row>
            </Container>
        </main>
    )
}

export default About
