// import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";

const ProductsScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <H1>Shop By Products</H1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={11} md={5} lg={5} xl={2}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

const H1 = styled.h1`
  margin-bottom: 3rem;
`;

export default ProductsScreen;
