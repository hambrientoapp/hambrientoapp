import React from 'react'

import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container className="mt-4">
            <footer style={{ borderTop: '20px' }}>
                <p className="text-center">🍔 <br /> &copy; HAMBRIENTOapp</p>
            </footer>
        </Container>
    )
}