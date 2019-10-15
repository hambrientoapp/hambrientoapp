import React from 'react'

import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container className="mt-4 mb-4">
            <footer  className="text-center">
                <span role='img' aria-label='burger emoji'>🍔 <br /> &copy; HAMBRIENTOapp</span>
            </footer>
        </Container>
    )
}