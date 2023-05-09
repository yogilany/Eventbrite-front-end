import React from "react";
import { Container, Col, Row, Table } from "react-bootstrap";

const SalesTable = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={8}>
          <h3 className="heading3 ">Sales by ticket type</h3>
          <Table responsive="sm" className="sales-table">
            <thead>
              <tr>
                <th>Ticket Type</th>
                <th>Price</th>
                <th>Sold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Table cell</td>
                <td>Table cell</td>
                <td className="blue-data">Table cell</td>
              </tr>
              <tr>
                <td>Table cell</td>
                <td>Table cell</td>
                <td className="blue-data">Table cell</td>
              </tr>
              <tr>
                <td>Table cell</td>
                <td>Table cell</td>
                <td className="blue-data">Table cell</td>
              </tr>
            </tbody>
          </Table>
          
<a href="/sales-report" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Go to all sales</a>

        </Col>
      </Row>
    </Container>
  );
};

export default SalesTable;
