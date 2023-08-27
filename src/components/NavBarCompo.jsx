import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';



function NavBarCompo(){
    return <>
        <div id="navBarDiv">
            <Navbar bg='light' variant='light' expand='md'>
                <Container>
                    <Navbar.Brand href='/'>GDSC</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='justify-content-end' style={{width:'100%'}}>
                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='/#aboutUs'>About Us</NavLink>
                        <NavLink href='/createBlog'>Create Blog</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </>
}

export default NavBarCompo;