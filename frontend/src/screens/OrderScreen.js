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
import axios from "axios";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { success: successPay, loading: loadingPay } = orderPay;

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

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay) {
      dispatch(getOrderDetails(id));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, id, successPay, order]);

  return (
    <OrderScreenView
      sdkReady={sdkReady}
      setSdkReady={setSdkReady}
      orderPay={orderPay}
      loadingPay={loadingPay}
    />
  );
};

export default OrderScreen;
