import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Headerpub from "../../Publishpage/Headerpub";
import OnlyLinksSideBar from "../Sidebar/OnlyLinksSidebar";

const ManageEvents = () => {

    // const fetchMyevents = () => {
    //         axios
    //           .get(`${process.env.REACT_APP_BASE_API}/categories`)
    //           .then(function (response) {
    //             console.log(response);
    //             setCategories(response.data);
    //             setIsLoading(false);
    //           })
    //           .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //           });
    // }

  return (
    <>
    <Headerpub data_testid="HDID" />
    <OnlyLinksSideBar />

    <Container fluid className="mt-5 pl-24">
      <Row>
        <Col md={8} className="ml-24 w-2/3">
          <h1
            className="mt-5 mb-4 font-black text-6xl"
          >
            Events
          </h1>

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>


     
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default ManageEvents