import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import Loader from "../components/Loader";
import styled from "styled-components";
import Message from "../components/Message";
import { listMyOrders } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";

const ProfileScreenOrder = () => {

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;
    return (
        <Col md={9}>
            <h2>My Orders</h2>
            {loadingOrders ? (
                <Loader />
            ) : errorOrders ? (
                <Message>{errorOrders}</Message>
            ) : (
                <Table striped bordered hover responsive className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERD</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt}</td>
                                <td>{order.total}</td>
                                <td>
                                    {order.isPaid ? (
                                        order.paidAt.substring(0, 10)
                                    ) : (
                                        <i
                                            className="fas fa-times"
                                            style={{ color: "red" }}
                                        ></i>
                                    )}
                                </td>
                                <td>
                                    {order.isDeliverd ? (
                                        order.deliverdAt.substring(0, 10)
                                    ) : (
                                        <i
                                            className="fas fa-times"
                                            style={{ color: "red " }}
                                        ></i>
                                    )}
                                    <td>
                                        <LinkContainer to={`/order/${order._id}`}>
                                            <Button variant="light">Details</Button>
                                        </LinkContainer>
                                    </td>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Col>
    );
};

const Login = styled.div`
  margin-top: 5rem;
`;

export default ProfileScreenOrder;
