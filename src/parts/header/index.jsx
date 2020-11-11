import React from 'react';
import { Nav, Navbar, NavDropdown, Button, Form, FormControl } from 'react-bootstrap'

import '../../assets/scss/header.scss'

export const Header = () => {
    return (
      <div className="header">
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">HIST Messaging Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="서비스 소개" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">문자</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">선거문자</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">알림톡</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">친구톡</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="연동형 API" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">문자 API</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">알림톡 API</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#help-center">고객센터</Nav.Link>
                    <Nav.Link href="#help-center">메세지 보내기</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="ID" className="mr-sm-2" />
                    <FormControl type="text" placeholder="PASSWORD" className="mr-sm-2" />
                    <Button variant="outline-success">LogIn</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
}
