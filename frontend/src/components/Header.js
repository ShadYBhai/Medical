import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Navbar>
          <Container>
            <Left>
              <Navbar.Brand href="#home" style={{ color: "white" }}>
                Medical <span>Central</span>
              </Navbar.Brand>
            </Left>

            <Nav style={{ marginLeft: "auto" }}>
              <Nav.Link
                href="/cart"
                style={{ color: "white", marginRight: "3rem" }}
              >
                <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
              <Nav.Link href="/login" style={{ color: "white" }}>
                <i className="fas fa-user"></i>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  /* display: flex; */
  justify-content: space-between;
  font-weight: 700;
  /* color: #000000; */
  color: #ffffff;
  background-color: #000000;
`;
const Left = styled.div`
  margin-left: 1rem;

  flex-grow: 1;
  &:hover {
    cursor: pointer;
  }
  font-family: "Moul", cursive;
  font-weight: 400;
`;

export default Header;
