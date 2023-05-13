import React from "react";
import { Container, Col, Row, Table } from "react-bootstrap";

const OrdersTable = ({orders, event}) => {
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
    
              {orders.slice(0, 5).map((order) => ( <tr>
                <td className="blue-data text-left">{order.id}</td>
                <td className=" text-left ">{order.first_name + " " + order.last_name}</td>
                <td className=" text-left ">{order.tickets_count}</td>

                <td className=" text-left "> {order.price}</td>
                <td className=" text-left ">{`${new Date(order.created_date).getMonth() + 1}/${new Date(order.created_date).getDate()}/${new Date(order.created_date).getFullYear()}`}</td>
              </tr>))
             }
            </tbody>
          </Table>
          <a href={`/orders-report/${event.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Go to all orders</a>

        </Col>
      </Row>
    </Container>
  );
};

export default OrdersTable;
