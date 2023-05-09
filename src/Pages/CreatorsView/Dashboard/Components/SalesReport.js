import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headerpub from "../../../Publishpage/Headerpub";
import Sidebar from "../../Sidebar/Sidebar";
import { Table } from "react-bootstrap";
import OnlyLinksSideBar from "../../Sidebar/OnlyLinksSidebar";
import { CSVLink } from "react-csv";

const SalesReport = () => {
  const headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Age", key: "age" },
  ];

  const data = [
    {
      firstName: "Warren",
      lastName: "Morrow",
      email: "sokyt@mailinator.com",
      age: "36",
    },
    {
      firstName: "Gwendolyn",
      lastName: "Galloway",
      email: "weciz@mailinator.com",
      age: "76",
    },
    {
      firstName: "Astra",
      lastName: "Wyatt",
      email: "quvyn@mailinator.com",
      age: "57",
    },
    {
      firstName: "Jasmine",
      lastName: "Wong",
      email: "toxazoc@mailinator.com",
      age: "42",
    },
    {
      firstName: "Brooke",
      lastName: "Mcconnell",
      email: "vyry@mailinator.com",
      age: "56",
    },
    {
      firstName: "Christen",
      lastName: "Haney",
      email: "pagevolal@mailinator.com",
      age: "23",
    },
    {
      firstName: "Tate",
      lastName: "Vega",
      email: "dycubo@mailinator.com",
      age: "87",
    },
    {
      firstName: "Amber",
      lastName: "Brady",
      email: "vyconixy@mailinator.com",
      age: "78",
    },
    {
      firstName: "Philip",
      lastName: "Whitfield",
      email: "velyfi@mailinator.com",
      age: "22",
    },
    {
      firstName: "Kitra",
      lastName: "Hammond",
      email: "fiwiloqu@mailinator.com",
      age: "35",
    },
    {
      firstName: "Charity",
      lastName: "Mathews",
      email: "fubigonero@mailinator.com",
      age: "63",
    },
  ];

  const csvReport = {
    data: data,
    headers: headers,
    filename: "Clue_Mediator_Report.csv",
  };

  return (
    <>
      <Headerpub data_testid="HDID" />
      <OnlyLinksSideBar />

      <Container fluid className="mt-5 pl-24">
        <Row>
          <Col md={8} className="ml-24 w-2/3">
            <h1
              className="mt-5 mb-2"
              style={{
                fontSize: "52px",
                fontFamily: "Neue Plak Bold !important",
                fontWeight: "bold",
              }}
            >
              Sales Report
            </h1>
            <h3 className="heading3 ">Sales by ticket type</h3>

            <Table className="sales-table ">
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
            <CSVLink {...csvReport}>Export to CSV</CSVLink>

            <a
              href="/sales-report"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Export to CSV
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SalesReport;
