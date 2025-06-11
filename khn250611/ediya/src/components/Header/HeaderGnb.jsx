// HeaderGnb.jsx

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/logo.gif';

export default function HeaderGnb() {
  return (
    <Navbar data-bs-theme="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='이디야' />
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="#">원두</Nav.Link>
          <Nav.Link href="#">메뉴</Nav.Link>
          <Nav.Link href="#">유통제품</Nav.Link>
          <Nav.Link href="#">이디야멤버스</Nav.Link>
          <Nav.Link href="#">상품권·제휴카드</Nav.Link>
          <Nav.Link href="#">브랜드 소식</Nav.Link>
          <Nav.Link href="#">고객지원·케이터링</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
