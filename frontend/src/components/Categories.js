import { React, useEffect, useState } from "react";
// import category from "../category";
import { Row, Col } from "react-bootstrap";
import Category from "../components/Category";
import styled from "styled-components";
import axios from "axios";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get("/api/category");

      setCategory(data);
    };
    fetchCategory();
  });

  return (
    <>
      <H1>Shop By Categories</H1>
      <Col>
        <Row>
          {category.map((category) => (
            <Col key={category._id} sm={11} md={5} lg={5} xl={2}>
              <Category category={category} />
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

export default Categories;
