import React from 'react'

import { Jumbotron, Container, Form } from 'react-bootstrap'

export default function Search() {
    return (
        <div id="search">
            <Jumbotron className="text-center">
                <Container>
                    <h1>HAMBRIENTO...</h1>
                    <p>pensando en ti desarrollamos esta app</p>
                    <Form className="mt-4">
                        <Form.Control size="lg" type="text" placeholder="burger, pizza, sushi ..." />
                    </Form>
                </Container>
            </Jumbotron>
        </div>
    )
}