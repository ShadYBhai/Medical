import React from "react";
import { useSelector } from "react-redux";
import { Button, Row, Col, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const SellOrderScreenView = () => {
  const { allSellOrders } = useSelector((state) => state.allSellOrder);

  return (
    <SELL>
      <Row>
        <Col md={9}>
          <h2>My Orders</h2>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>

                <th>Created At</th>
                <th>Quantity</th>
                <th>Approved</th>
              </tr>
            </thead>
            <tbody>
              {allSellOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.name}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.quantity}</td>

                  <td>
                    {order.isApproved ? (
                      order.isApproved.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </SELL>
  );
};

const SELL = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
`;

export default SellOrderScreenView;
