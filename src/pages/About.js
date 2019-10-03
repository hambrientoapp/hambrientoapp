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
                                <Card.Title>User Three</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">@userthree</Card.Subtitle>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias eaque, architecto saepe optio reprehenderit soluta adipisci suscipit impedit laboriosam dolorum accusantium ea iste recusandae. Odio hic fugit facere pariatur?</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default About