import React from 'react';
import './header.scss';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 

const Header: React.FC = () => {
    return (
        <header data-testid="header">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" className='header__link'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className='header__link'>About me</Nav.Link>
                            <NavDropdown className='header__link' title="Articles" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/services">Website creation</NavDropdown.Item>
                                <NavDropdown.Item href="#">Internet marketing</NavDropdown.Item>
                                <NavDropdown.Item href="#">Video Promotion</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/advertisement" className='header__link'>Advertisement</Nav.Link>
                            <Nav.Link as={NavLink} to="/profile" className='header__link'>Profile</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto d-flex align-items-center">
                            <Form className="d-flex ms-3">
                                <FormControl
                                    type="search"
                                    placeholder="Blog Search"
                                    className="me-2 form-control-sm"
                                    aria-label="Search"
                                />
                                <Button variant="outline-primary">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
  
export default Header;
