import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import PropTypes from "prop-types";

const Category = ({ category }) => {
  return (
    <Card className="my-2 p-2 rounded">
      <Link to={`/category/${category._id}`}>
        <Card.Img src={category.image} variant="top" />
      </Link>

      <Card.Body>
        {/* <Link to={`/category/`}> */}
        <Card.Title as="div" variant="top">
          <strong>{category.name}</strong>
        </Card.Title>
        {/* </Link> */}
        {/* <Card.Text as="div">
          <Rating
            // value={category.rating}
            // text={`${Category.numReviews} Reviews`}
            className="my-3"
          ></Rating>
          {/* <Card.Text as="h3">${Category.price}</Card.Text> */}
        {/* </Card.Text> */}
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

export default Category;
