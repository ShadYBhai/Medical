import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Navbar>
          <Container>
            <Left>
              <Link to="/">
                <Navbar.Brand style={{ color: "white" }}>
                  Medical <span>Central</span>
                </Navbar.Brand>
              </Link>
            </Left>

            <Nav style={{ marginLeft: "auto" }}>
              <Link to="/cart">
                <Nav style={{ color: "white", marginRight: "3rem" }}>
                  <i className="fas fa-shopping-cart"> Cart</i>
                </Nav>
              </Link>
              <Link to="/login">
                <Nav style={{ color: "white" }}>
                  <i className="fas fa-user"> SIGN IN</i>
                </Nav>
              </Link>
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
  background-color: #221e1e;
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
