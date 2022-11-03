import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import styled from "styled-components";
import { listMyOrders } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";
import ProfileScreenView from "./ProfileScreenView";
import ProfileScreenOrder from "./ProfileScreenOrder";

const ProfileScreen = () => {
  const history = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history("/login");
    } else {
      dispatch(getUserDetails("profile"));
      dispatch(listMyOrders());
    }
  }, [dispatch]);

  return (
    <Login>
      <Row>
        <ProfileScreenView />
        <ProfileScreenOrder />
      </Row>
    </Login>
  );
};

const Login = styled.div`
  margin-top: 5rem;
`;

export default ProfileScreen;
