import React from "react";
import { useSelector } from "react-redux";
import { Button, Row, Col, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SellOrderScreenView = () => {
  const { allSellOrders } = useSelector(state => state.allSellOrder);

  return (
    <>
      <Row>
        <Col md={9}>
          <h2>My Orders</h2>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERD</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allSellOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.total}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i
                        className="fas fa-times"
                        style={{ color: "red" }}
                      ></i>
                    )}
                  </td>
                  <td>
                    {order.isDeliverd ? (
                      order.deliverdAt.substring(0, 10)
                    ) : (
                      <i
                        className="fas fa-times"
                        style={{ color: "red " }}
                      ></i>
                    )}
                    <td>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button variant="light">Details</Button>
                      </LinkContainer>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default SellOrderScreenView;
