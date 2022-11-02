import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Button, Col, ListGroup, Image } from "react-bootstrap";
import CheckoutStep from "../components/CheckoutStep";
import React, { useState, useEffect } from "react";
import Message from "../components/Message";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { USER_DETAILS_RESET } from "../constants/userConstants";
// import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import Loader from "../components/Loader";
import { PayPalButton } from "react-paypal-button-v2";

import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions";

const OrderScreenView = (sdkReady, setSdkReady, orderPay, loadingPay) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();

  // const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    history("/shipping");
  } else if (!cart.paymentMethod) {
    history("/payment");
  }

  // const orderPay = useSelector((state) => state.orderPay);
  // const { success: successPay, loading: loadingPay } = orderPay;

  // useEffect(() => {
  //   dispatch(getOrderDetails(id));
  // });

  // useEffect(() => {
  //   if (!order || order._id !== id) {
  //     dispatch(getOrderDetails(id));
  //   }
  // }, [dispatch, order, id]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(id));
  };

  return (
    <>
      {order && (
        <>
          <h1>Order {order._id}</h1>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name: </strong>
                    {order.user.name}
                  </p>
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                  <p>
                    <strong>Address:</strong>
                    {order.shippingAddress.address},{" "}
                    {order.shippingAddress.city}{" "}
                    {order.shippingAddress.postalCode},{" "}
                    {order.shippingAddress.country}
                  </p>
                  {order.isDelivered ? (
                    <Message>Deliverd On {order.deliveredAt}</Message>
                  ) : (
                    <Message>Not Deliverd</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <p>
                    <h2>Payment Method</h2>
                    <strong>Method: </strong>
                    {order.paymentMethod}
                  </p>

                  {order.isPaid ? (
                    <Message>Paid On {order.paidAt}</Message>
                  ) : (
                    <Message>Not Paid</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Order Items</h2>
                  {order.orderItems.length === 0 ? (
                    <Message>Your cart is empty</Message>
                  ) : (
                    <ListGroup variant="flush">
                      {order.orderItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/${item._id}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {item.qty} x ${item.price} = $
                              {item.qty * item.price}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <strong>Method:</strong>
                    {order.paymentMethod}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>${order.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>${order.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>${order.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>${order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  {!order.isPaid && (
                    <ListGroup.Item>
                      {loadingPay && <Loader />}
                      {!sdkReady ? (
                        <Loader />
                      ) : (
                        <PayPalButton
                          amount={order.totalPrice}
                          onSuccess={successPaymentHandler}
                        />
                      )}
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default OrderScreenView;
