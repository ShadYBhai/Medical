import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <Card className="my-2 p-2 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" variant="top">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} Reviews`}
            className="my-3"
          ></Rating>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Rating.defaultProps = {
//   color: "#f8e825",
// };

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Product;
