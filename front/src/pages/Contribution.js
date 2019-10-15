import React from 'react'

import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

function Contribution() {
    return (
        <main>
            <div id="contribution">
                <Jumbotron fluid>
                    <Container>                
                        <h1>Contribution</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit impedit itaque! Laboriosam, nisi error aspernatur quae eius magnam exercitationem! Doloremque qui aliquam recusandae libero dolorum reprehenderit quae similique quam!
                        </p>
                    </Container>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col>
                            <h2>Report</h2>
                        </Col>
                        <Col>
                            <h2>Evaluate</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    )
}

export default Contribution