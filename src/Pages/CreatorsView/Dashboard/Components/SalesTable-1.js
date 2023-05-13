import React, { useEffect } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SalesTable = ({tickets, event}) => {


  
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
             { tickets.map((ticket) => (<tr>
                <td className=" text-left ">{ticket.name}</td>
                <td className=" text-left ">{ticket.price}</td>
                <td className="blue-data text-left ">{ticket.max_quantity - ticket.available_quantity}</td>
              </tr>))
            }
            </tbody>
          </Table>
          
<a href={`/sales-report/${event.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Go to all sales</a>

        </Col>
      </Row>
    </Container>
  );
};

export default SalesTable;
