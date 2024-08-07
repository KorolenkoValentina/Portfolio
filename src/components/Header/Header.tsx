import React from 'react';
import './header.scss';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink  } from 'react-router-dom'; 
import { useSearch } from '../SearchContext/SearchContext';
import PhotoMobile from '../../assets/images/sidebar-photo.svg'
import MobileBG from '../../assets/images/mobile.jpg'


    const Header: React.FC = () => {
    const { searchQuery, setSearchQuery } = useSearch();

    const handleSearch = () => {
       
        setSearchQuery(searchQuery);
      };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
   


    return (
        <header data-testid="header">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="mobile-search ">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Blog Search"
                                className="me-2 form-control-sm"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleInputChange}
                                
                            />
                        </Form>
                    </div>
                   <Navbar.Collapse id="basic-navbar-nav">
                        <div className="mobile-version">
                            <img src={MobileBG} alt="Mobile background" className="img-fluid"/>
                            <img src={PhotoMobile} alt="Dmitryi Valak" className="img-fluid second-img"/>
                                <div className="mobile-version__content">
                                <div className="title">Dmitryi Valak</div>
                            <p>blog front-end developer</p>
                            </div>
                        </div>
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" className='header__link'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className='header__link'>About me</Nav.Link>
                            <NavDropdown className='header__link' title="Articles" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/articles">Website creation</NavDropdown.Item>
                                <NavDropdown.Item href="#">Internet marketing</NavDropdown.Item>
                                <NavDropdown.Item href="#">Video Promotion</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/advertisement" className='header__link'>Advertisement</Nav.Link>
                            <Nav.Link as={NavLink} to="/profile" className='header__link'>Profile</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto d-flex align-items-center desktop-search ">
                            <Form className="d-flex ms-3">
                                <FormControl
                                    type="search"
                                    placeholder="Blog Search"
                                    className="me-2 form-control-sm"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                />
                                <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
  
export default Header;
