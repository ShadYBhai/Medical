import React from "react";
import styled from "styled-components";
import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ConfirmationScreen = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/");
  };

  return (
    <ConfirmationDiv>
      <Card>
        <CardContent>
          <h1>Thank You So Much for selling your Mediciens</h1>
          <h2>You are Helping in Bringing the Change in The World</h2>
          <p>
            Once our Pharmacist Approve your Medicines You Will Recive the
            Promised Amount.
          </p>
        </CardContent>
        <Button onClick={handelClick}>Back to Website</Button>
      </Card>
    </ConfirmationDiv>
  );
};

const ConfirmationDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-top: 2rem;
  }
  h2 {
    margin-top: 3rem;
  }
  p {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  display: flex;
  align-self: center;
  margin-left: 15rem;
`;

export default ConfirmationScreen;
