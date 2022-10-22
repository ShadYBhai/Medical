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

const IndivisualCategoryScreen = () => {
  // const { id } = useParams();

  const [category, setCategory] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get(`/api/productsByCategory/${id}`);
      console.log(data);
      setCategory(data);
    };

    fetchCategory();
  }, [id]);

  // const cat = category.find((p) => p._id === id);

  // if (!cat) return null;

  // console.log(cat);

  return (
    <Container>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Col>
        <Row>
          {category &&
            category.map((category) => (
              <Col key={category._id} sm={11} md={5} lg={5} xl={2}>
                <Category category={category} />
              </Col>
            ))}
        </Row>
      </Col>
    </Container>
  );
};

export default IndivisualCategoryScreen;
