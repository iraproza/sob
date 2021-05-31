import React from 'react'
import "../../index.css"
import {Nav, Navbar, NavDropdown, Container, Form,Button, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="bg-primary">
            <Container>
                <Navbar className="navbar navbar-expand-lg navbar-dark">
                    <Navbar.Brand className="navbar-brand">WOS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Link className="nav-link" to ='/'>Home</Link> */}
                            <Link className="nav-link" to ='/'>Content</Link>
                            <Link className="nav-link" to="/about-us">About us</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <Nav.Link className="nav-link">Sign In</Nav.Link>
                            <Nav.Link className="nav-link">Cart </Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header
