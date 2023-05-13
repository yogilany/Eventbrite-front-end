import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headerpub from "../../../Publishpage/Headerpub";
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


const OrdersReport = () => {
  const { id } = useParams();
  const token = useSelector(selectUserToken);

  const [orders, setOrders] = useState([])


  const fetchOrders = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_API}/orders/event_id/${id}`, {
          headers: {
            ContentType: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
console.log("ordders", response.data);
          setOrders(response.data);
        
          

    
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

      }

      useEffect(() => {
        fetchOrders();
      }, []);


 
  const headers = [
    { label: "Order #", key: "id" },
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },

    { label: "Quantity", key: "tickets_count" },
    { label: "Price", key: "price" },
    { label: "Date", key: "created_date" },


  ];

  const csvReport = {
    data: orders,
    headers: headers,
    filename: "Orders.csv",
  };
  const navigate = useNavigate();


  return (
    <>
      <Headerpub data_testid="HDID" />
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
              Orders Report
            </h1>
            <h3 className="heading3 ">See all the orders for your event, including revenue and fees

</h3>

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
    
              {orders.map((order) => ( <tr>
                <td className="blue-data text-left">{order.id}</td>
                <td className=" text-left ">{order.first_name + " " + order.last_name}</td>
                <td className=" text-left ">{order.tickets_count}</td>

                <td className=" text-left "> {order.price}</td>
                <td className=" text-left ">{`${new Date(order.created_date).getMonth() + 1}/${new Date(order.created_date).getDate()}/${new Date(order.created_date).getFullYear()}`}</td>
              </tr>))
             }
            </tbody>
          </Table>
            <CSVLink {...csvReport}   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Export to CSV</CSVLink>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrdersReport;
