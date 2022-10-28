import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../Animation";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  const navigate = useNavigate();
  const navigateSell = () => {
    navigate("/sell");
  };

  return (
    <>
      <Head>
        <h1>
          Providing Medicine At Less than <span>80% Cost</span>, Making{" "}
          <span>World a Better Place!</span>
        </h1>
        <h2>
          <span>Medical Central</span> makes medicines <span>accessible</span>{" "}
          for everyone
        </h2>
      </Head>
      <Buttons>
        <Link to="/categories">
          <motion.button variants={fade} className="b1">
            BUY
          </motion.button>
        </Link>

        <motion.button
          onClick={navigateSell}
          variants={fade}
          button
          className="b2"
        >
          SELL
        </motion.button>
      </Buttons>
    </>
  );
};

const Head = styled.div`
  text-align: center;
  margin-top: 8rem;
  margin-bottom: 3.5rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  h1 {
    color: rgb(50, 49, 49);
    /* color: white; */
  }
  h2 {
    color: rgb(50, 49, 49);
    /* color: white; */
    margin-top: 2rem;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;

  .b1 {
    padding: 0.5rem 3rem;
    margin: 1rem;
  }
  .b2 {
    padding: 0.5rem 3rem;
    margin: 1rem;
  }
`;
export default HeroComponent;
