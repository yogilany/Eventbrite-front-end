import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Headerpub from '../../../Publishpage/Headerpub'
import Sidebar from '../../Sidebar/Sidebar'
import { Table } from 'react-bootstrap'

const TicketsReport = () => {
  return (
    <>
    <Headerpub data_testid="HDID" />
    <Sidebar />

    <div style={{ marginLeft: 450, marginTop: 20 }}>
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <h1
                className="pubhead"
                style={{ fontSize: "52px", fontFamily: "Neue Plak Bold !important" , fontWeight:'bold' }}
              >
                Tickets Report
              </h1>
            </Col>
          </Row>
        </Container>
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
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Go to all orders</a>

        </Col>
      </Row>
    </Container>

   
      </Container>
    </div>
  </>
  )
}

export default TicketsReport