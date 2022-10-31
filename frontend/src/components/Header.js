import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Link to="/cart">
              <Nav
                style={{
                  color: "white",
                  marginRight: "3rem",
                  textAlign: "center",
                }}
              >
                <i style={{ margin: "auto" }} className="fas fa-shopping-cart">
                  Cart
                </i>
              </Nav>
            </Link>
            {userInfo ? (
              <NavDropdown
                title={
                  <span style={{ color: "white" }}>
                    {" "}
                    <i className="fas fa-user"></i> {userInfo.name}
                  </span>
                }
                id="username"
              >
                <Link
                  to="/profile"
                  style={{
                    margin: "auto",
                    padding: "0rem",
                    display: "flex",
                  }}
                >
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </Link>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to="/login">
                <Nav style={{ color: "white" }}>
                  <i className="fas fa-user">SIGN IN</i>
                </Nav>
              </Link>
            )}
          </Container>
        </Navbar>
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  /* display: flex; */
  margin: auto;
  justify-content: space-between;
  font-weight: 700;
  /* color: #000000; */
  color: #ffffff;
  background-color: #221e1e;
  /* background: #a3d9ab; */
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
