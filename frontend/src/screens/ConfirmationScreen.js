import React from "react";
import styled from "styled-components";
import { Card, CardContent, Button } from "@mui/material";
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
          <h1>Thank You So Much for selling your Medicines</h1>
          <h2>You are Helping for Bringing Change in the World</h2>
          <p>
            We will get back to you in two working days. Once our Pharmacist
            approves your medicines you will recieve the notification.
          </p>
        </CardContent>
        <Button variant="primary" onClick={handelClick}>
          Back to Website
        </Button>
      </Card>
    </ConfirmationDiv>
  );
};

const ConfirmationDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 6rem;
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
// const Button = styled.button`
//   display: flex;
//   align-self: center;
//   margin-left: 15rem;
// `;

export default ConfirmationScreen;
