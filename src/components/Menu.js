import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

export default function Menu() {
    return (
        <Navbar>
        <Navbar.Brand href="#">🍔 HAMBIENTOapp</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}