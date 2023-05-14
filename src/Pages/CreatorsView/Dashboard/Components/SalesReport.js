import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Sidebar/Sidebar";
import { Table } from "react-bootstrap";
import OnlyLinksSideBar from "../../Sidebar/OnlyLinksSidebar";
import { CSVLink } from "react-csv";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUserToken } from "src/features/authSlice";
import { useNavigate } from "react-router";
import Containerpub from "src/Pages/Publishpage/Containerpub";
import CreatorHeader from "../../Details/Components/creatorHeader/CreatorHeader";

const SalesReport = () => {
  const { id } = useParams();
  const token = useSelector(selectUserToken);

  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_API}/tickets/event_id/${id}`, {
        headers: {
          ContentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // console.log("tickets", response.data);
        setTickets(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const headers = [
    { label: "Ticket Type", key: "type" },
    { label: "Price", key: "price" },
    { label: "Available Quantity", key: "available_quantity" },
    { label: "Total Quantity", key: "max_quantity" },
  ];

  const csvReport = {
    data: tickets,
    headers: headers,
    filename: "Sales.csv",
  };
  const navigate = useNavigate();

  return (
    <>
      <CreatorHeader data_testid="HDID"  />
      <OnlyLinksSideBar />

      <Container fluid className="mt-5 pl-24">
        <Row>
          <Col md={8} className="ml-24 w-2/3">
            {/* <button onClick={() => navigate(-1)} >BAck</button> */}

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
                {tickets.map((ticket) => (
                  <tr>
                    <td className=" text-left ">{ticket.name}</td>
                    <td className=" text-left ">{ticket.price}</td>
                    <td className="blue-data text-left ">
                      {ticket.max_quantity - ticket.available_quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <CSVLink
              {...csvReport}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Export to CSV
            </CSVLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SalesReport;
