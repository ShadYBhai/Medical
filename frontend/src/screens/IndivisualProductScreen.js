import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const IndivisualProductScreen = ({ match }) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  if (!product) return null;

  console.log(product);

  return (
    <>
      <div>{product.name}</div>
    </>
  );
};

export default IndivisualProductScreen;
