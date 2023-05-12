import React from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import MainOrangeButton from "../../../../Components/Buttons/MainOrangeButton";
import Checkout from "./Checkout";
import { useState } from "react";
export const EventTicketCard = (props) => {
  const [isCheckout, setIsCheckout] = useState(true);

  const handleCheckout = () => {
    setIsCheckout(true);
  };
  return (
    <Container fluid {...props}>
      <Col>
        <Row
        //   style={{
        //     border: "#3659e3 3px solid",
        //     borderRadius: "1.5vmin",
        //     padding: "3%",
        //     marginBottom: "2rem",
        //   }}
        >
          <Row>
            <Col className="text-center mb-4">
              <h5>
                <strong>Exhibition Ticket</strong>
              </h5>
            </Col>

            {/* <Col className="">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>
              </button>{" "}
             
                <span className=" m-2 font-semibold text-gray-900">
                  100
                </span>{" "}
             
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>{" "}
            </Col> */}
          </Row>
          {/* <Row>
            <div>
              <strong>Free&nbsp;</strong>
              <BiIcons.BiInfoCircle color="#2d49be" />
            </div>
          </Row> */}
        </Row>
        <Row>
          <MainOrangeButton text="Reserve a spot" onClick={handleCheckout} />
        </Row>
      </Col>
      {isCheckout ? (
        <Checkout
          setIsCheckout={setIsCheckout}
          img_url={props.img_url}
          event={props.event}
        />
      ) : null}{" "}
    </Container>
  );
};
