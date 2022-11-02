import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/formContainer";
import styled from "styled-components";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutStep from "../components/CheckoutStep";

const ShippingScreen = () => {
  const history = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    // dispatch(createSellOrder(formDataObj));
    console.log(formDataObj);
    dispatch(saveShippingAddress(formDataObj));
    history("/payment");
  };

  const dispatch = useDispatch();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(saveShippingAddress({ address, city, postalCode, country }));
  // };

  return (
    <Div>
      <FormContainer>
        <CS>
          <CheckoutStep step1 step2 />
        </CS>

        <h1>Shipping</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              required
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              value={city}
              name="city"
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Postal Code"
              value={postalCode}
              name="postalCode"
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              value={country}
              name="country"
              required
              onChange={(e) => setCountry(e.target.value)}
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

export default ShippingScreen;
