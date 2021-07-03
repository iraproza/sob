import React from 'react'
import "../../index.css"
import {Nav, Navbar, NavDropdown, Container, Form,Button, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {
    return (
        <header className="bg-primary">
            <Container>
                <Navbar className="navbar navbar-expand-lg navbar-dark">
                    <Navbar.Brand className="navbar-brand"> <i class="far fa-star"></i>SOB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Link className="nav-link" to ='/'>Home</Link> */}
                            <Link className="nav-link" to="/">Product</Link>
                            <Link className="nav-link" to="/about-us">About us</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <Link className="nav-link" to={`/product-add`}>Add Product </Link>
                            
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
