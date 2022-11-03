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

const ProfileScreenView = () => {
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;
    //   useEffect(() => {
    //     if (!userInfo) {
    //       history("/login");
    //     } else {
    //       if (!user.name) {
    //         dispatch(getUserDetails("profile"));
    //         dispatch(listMyOrders());
    //       } else {
    //         setName(user.name);
    //         setEmail(user.email);
    //       }
    //     }
    //   }, [dispatch, history, user, userInfo]);

    const submitHandler = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        // dispatch(createSellOrder(formDataObj));
        if (formDataObj.password !== formDataObj.confirmPassword) {
            setMessage("Password do not match");
        } else {
            dispatch(updateUserProfile(formDataObj));
        }
    };

    return (

        <Col md={3}>
            <h1>User Profile</h1>
            {message && <Message>{message}</Message>}
            {error && <Message>{"Please Enter Correct Details"}</Message>}
            {success && <Message>{"Profile Updated"}</Message>}

            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter name"
                        name={"name"}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name={"email"}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name={"password"}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name={"confirmPassword"}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Update
                </Button>
            </Form>
        </Col>
    );
};

const Login = styled.div`
  margin-top: 5rem;
`;

export default ProfileScreenView;
