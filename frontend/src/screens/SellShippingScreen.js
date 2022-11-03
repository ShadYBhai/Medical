import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/formContainer";
import styled from "styled-components";
import CheckoutStep from "../components/CheckoutStep";
import { saveSellShippingAddress } from "../actions/sellOrderActions";

const SellShippingScreen = () => {
  const history = useNavigate();
  const [success, setSucces] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    dispatch(saveSellShippingAddress(formDataObj));
    history("/confirmation");
  };

  return (
    <Div>
      <FormContainer>
        <CS>
          <CheckoutStep step1 step2 />
        </CS>

        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              name={"address"}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              name={"city"}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Postal Code"
              name={"postalCode"}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              name={"country"}
              required
            ></Form.Control>
          </Form.Group>
          <br />
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 2rem;
`;

const CS = styled.div`
  margin-bottom: 2rem;
`;

export default SellShippingScreen;
