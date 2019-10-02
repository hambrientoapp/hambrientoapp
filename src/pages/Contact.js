import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'

function Contact() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h1 className="mb-5">Get in touch</h1>
                    <h4>Email</h4>
                    <p>contact@hambientoapp.com</p>
                    <h4>Repository</h4>
                    <p>https://github.com/hambrientoapp/hambrientoapp/</p>
                </Col>
                <Col md={8}>
                    <h1>Say Hello.</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Your email"></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" row="3" placeholder="Your message..." />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact