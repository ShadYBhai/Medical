import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Button, Col, ListGroup, Image } from "react-bootstrap";
import CheckoutStep from "../components/CheckoutStep";
import React, { useState, useEffect } from "react";
import Message from "../components/Message";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOrderDetails } from "../actions/orderActions";
// import { USER_DETAILS_RESET } from "../constants/userConstants";
// import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import Loader from "../components/Loader";
import OrderScreenView from "./OrderScreenView";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id]);

  return <OrderScreenView />;
};

export default OrderScreen;
