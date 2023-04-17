import React from "react";
import { Container, Col, Row, Table } from "react-bootstrap";

const OrdersTable = () => {
  return (
    <Container fluid className="mt-5 mb-5">
      <Row>
        <Col md={8}>
          <h3 className="heading3 ">Recent Orders</h3>
          <Table responsive="sm" className="sales-table">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="blue-data">Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>

                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td className="blue-data">Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>

                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td className="blue-data">Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>

                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersTable;
