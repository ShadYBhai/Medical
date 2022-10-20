import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import styled from "styled-components";

const ProductsScreen = () => {
  return (
    <>
      <H1>Shop By Products</H1>
      <Col>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={11} md={5} lg={5} xl={2}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
};

const H1 = styled.h1`
  margin-bottom: 3rem;
`;

export default ProductsScreen;
