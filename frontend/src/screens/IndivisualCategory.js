////NEED TO FETCH THE SUBCATEGORIES PRODUCTSSS IN HERE..........
////    //////
///
/////
import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Image,
  Container,
  ListGroupItem,
} from "react-bootstrap";
// import Rating from "../components/Rating";
// import category from "../category";
import Category from "../components/Category";
import axios from "axios";
import Product from "../components/Product";
import Loader from "../components/Loader";

const IndivisualCategoryScreen = () => {
  // const { id } = useParams();

  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get(`/api/productsByCategory/${id}`);
      console.log(data);
      setProducts(data);
    };

    fetchCategory();
  }, [id]);
  console.log(products, "products");


  return (
    <Container>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Col>
        <Row>
          {products ?
            products.map((product) => (
              <Col key={product._id} sm={11} md={5} lg={5} xl={2}>
                <Product product={product} />
              </Col>
            )) : <Loader />}
        </Row>
      </Col>
    </Container>
  );
};

export default IndivisualCategoryScreen;
