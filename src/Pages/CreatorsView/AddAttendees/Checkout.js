import React, { useEffect } from "react";
import TicketCard from "../../AttendeesView/SingleEvent/Components/TicketCard";
import { useState } from "react";
import axios from "axios";
import MainOrangeButton from "../../../Components/Buttons/MainOrangeButton";
import { set } from "date-fns";
import { useForm } from "react-hook-form";
import { Container, Row, Form } from "react-bootstrap";
import TextInputStyled from "../../../Components/TextInput/TextInput";
import AttendeeData from "../../AttendeesView/SingleEvent/Components/AttendeeData";
import { AttachEmail } from "@mui/icons-material";
import MainGrayButton from "src/Components/Buttons/MainGrayButton";
import { useSelector } from "react-redux";
import { selectUserToken } from "src/features/authSlice";
import AddAttendeesList from "./AddAttendeesList";

/**
 * @author Anas Sherif
 * @param {}
 * @description This is the same checkout component used in booking an event or a similar one.
 * @returns {JSX.Element}
 */

const Checkout = ({ setIsCheckout, img_url, event, tickets, totalvalue }) => {
  const token = useSelector(selectUserToken);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [email, setEmail] = useState("");
  const [firstName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [FinalOrder, setFinalOrder] = useState({});
  const [isNoTickets, setIsNoTickets] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [isPlaceorder, setIsPlaceOrder] = useState(false);
  const [orderID, setOrderID] = useState(null);
  const [isCheckoutDone, setIsCheckoutDone] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const [selectedTicket, setSelectedTicket] = useState([]);
  const [ticketsTypes, setTicketsTypes] = useState([
    {
      type: "regular",
      name: "Regular Ticket",
      max_quantity: 10,
      price: 50,
      sales_start_date_time: "2023-05-01T00:00:00",
      sales_end_date_time: "2023-05-31T23:59:59",
      event_id: "23dfbsdbf23",
      available_quantity: 10,
      id: "23dfbsdbf23",
    },
  ]);
  const [totalTickets, setTotal] = useState(0);
  const [isFinalCheckout, setIsFinalCheckout] = useState(false);
  const timerDuration = 1000;
  var count = 0;

  const [remainingTime, setRemainingTime] = useState(timerDuration);

  const handleClose = () => {
    setIsCheckout(false);
  };

  const fetchTicketsTypes = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API}/tickets/event_id/${event.id}`)
      .then(function (response) {

        setTicketsTypes(response);
      })
      .catch(function (error) {
        // handle error
        console.log("error", error);
      });
  };

  useEffect(() => {
    setRemainingTime(timerDuration);
  }, [isFinalCheckout]);

  useEffect(() => {
    var total = 0;
    for (let i = 0; i < selectedTicket.length; i++) {
      total += selectedTicket[i].quantity * selectedTicket[i].ticket_info.price;
    }
    setTotal(total);
  }, [selectedTicket]);

  useEffect(() => {
    fetchTicketsTypes();
  }, []);

  useEffect(() => {
  }, [selectedTicket]);

  // Format the remaining time as mm:ss
  const minutes = Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (remainingTime % 60).toString().padStart(2, "0");

  const handleCheckout = () => {
    if (selectedTicket.length === 0) {
      setIsNoTickets(true);
      return;
    } else {
      setIsNoTickets(false);
      setIsFinalCheckout(true);
      // Set the current time as the start time
      const startTime = new Date().getTime();

      // Update the remaining time every second
      const countdownInterval = setInterval(() => {
        // Calculate the time elapsed since the start time
        const elapsedSeconds = Math.floor(
          (new Date().getTime() - startTime) / 1000
        );

        // Calculate the remaining time
        const newRemainingTime = Math.max(timerDuration - elapsedSeconds, 0);

        // Update the remaining time state
        setRemainingTime(newRemainingTime);

        // Check if the timer has expired
        if (newRemainingTime === 0) {
          clearInterval(countdownInterval);
          setIsTimeOut(true);
        }
      }, 1000);

      // Clear the countdown interval on unmount
      return () => clearInterval(countdownInterval);
    }
  };

  const handlePlaceOrder = async () => {
    setIsPlaceOrder(true);

    const finalOrder = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      event_id: event.id,
      created_date: new Date(),
      price: totalTickets,
      image_link: "https://www.example.com/image.png",
    };

    // console.log("finalOrder", finalOrder, token);
    // console.log("event.id", event.id);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API}/orders/${event.id}/add_order`,
        finalOrder,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Order Res : ", response);
      setOrderID(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     console.log("isCheckoutDone", isCheckoutDone, "count", count);
  //     if(isCheckoutDone == count && isFinalCheckout){
  //         setIsCheckout(false);
  //     }

  //   }, [isCheckoutDone]);

  const handleCancel = () => {
    setIsCheckout(false);
  };

  const handleAddAttendee = (props) => {
    setAttendees([...attendees, props]);
  };

  useEffect(() => {
    // console.log("attendees", attendees);
  }, [attendees]);

  //   useEffect(() => {
  //     if(isPlaceorder){
  //         han

  //         // handleAddAttendee({...attendee, [e.target.name]: e.target.value});
  //       }  }, [isPlaceorder]);
  return (
    <>
      <div className="relative w-full max-w-5xl max-h-3xl ">
        <div className="relative bg-white    w-full max-w-5xl max-h-3xl  ">
          {!isTimeOut ? (
            !isSuccess ? (
              <>
                <div className="grid grid-cols-3">
                  <div className="bg-white p-4 col-span-2">
                    <div className="flex flex-col items-center  p-2 border-b rounded-t">
                      <h3 className="text-xl font-light text-gray-900 ">
                        {!isFinalCheckout ? event.basic_info.title : "Checkout"}
                      </h3>

                      <p className="text-xs font-light text-gray-500 ">
                        {!isFinalCheckout ? (
                          new Date(
                            event.date_and_time.start_date_time
                          ).toLocaleString("default", { month: "long" }) +
                          " " +
                          new Date(
                            event.date_and_time.start_date_time
                          ).getDay() +
                          " • " +
                          new Date(
                            event.date_and_time.start_date_time
                          ).toLocaleTimeString(navigator.language, {
                            hour: "2-digit",
                            minute: "2-digit",
                          }) +
                          " - " +
                          new Date(
                            event.date_and_time.end_date_time
                          ).toLocaleString("default", { month: "long" }) +
                          " " +
                          new Date(
                            event.date_and_time.start_date_time
                          ).getDay() +
                          " • " +
                          new Date(
                            event.date_and_time.start_date_time
                          ).toLocaleTimeString(navigator.language, {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        ) : (
                          <p>{`${minutes}:${seconds}`}</p>
                        )}
                        <br></br>
                      </p>
                    </div>
                    <div className="p-6 space-y-6 max-h-96 overflow-scroll">
                      <div>
                        <h2 className="font-bold text-2xl mb-4">
                          Contact information
                        </h2>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          style={{
                            minWidth: "100%",
                            width: "350px",
                          }}
                          id="login-form"
                          data-testid="login-form"
                        >
                          <Container
                            fluid
                            className="m-0"
                            style={{ minWidth: "200px" }}
                            //   data-testid={propdata_testid}
                          >
                            <Row className="mb-3 overflow-scroll">
                              <Form.Group
                                className="p-0"
                                style={{ width: "100%" }}
                              >
                                <div className=" grid grid-cols-2 gap-2 my-2">
                                  <Form.Floating
                                  // className={LoginMethodsCSS["form-floating"]}
                                  >
                                    <TextInputStyled
                                      id="login-email-input"
                                      data-testid="login-email-input"
                                      {...register("firstname", {
                                        required: "Required",
                                      })}
                                      autoComplete="off"
                                      name="firstname"
                                      type="text"
                                      value={firstName}
                                      onChange={(e) =>
                                        setFisrtName(e.target.value)
                                      }
                                      isInvalid={errors?.email}
                                      required
                                    />
                                    <label>First Name</label>
                                  </Form.Floating>
                                  <Form.Floating
                                  // className={LoginMethodsCSS["form-floating"]}
                                  >
                                    <TextInputStyled
                                      id="login-email-input"
                                      data-testid="login-email-input"
                                      {...register("lastname", {
                                        required: "Required",
                                      })}
                                      autoComplete="off"
                                      name="lastname"
                                      value={lastName}
                                      onChange={(e) =>
                                        setLastName(e.target.value)
                                      }
                                      type="text"
                                      isInvalid={errors?.email}
                                      required
                                    />
                                    <label>Last Name</label>
                                  </Form.Floating>
                                </div>

                                <Form.Floating
                                // className={LoginMethodsCSS["form-floating"]}
                                >
                                  <TextInputStyled
                                    id="login-email-input"
                                    data-testid="login-email-input"
                                    {...register("email", {
                                      required: "Required",
                                    })}
                                    autoComplete="off"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    isInvalid={errors?.email}
                                    required
                                  />
                                  <label>Email Address</label>
                                </Form.Floating>

                                {tickets.map((ticketType, key) => {
                                  return (
                                    <AddAttendeesList
                                    setIsSuccess={setIsSuccess}
                                      ticketType={ticketType}
                                      order_id={orderID}
                                      event={event}
                                    />
                                  );
                                })}
                              </Form.Group>
                            </Row>
                          </Container>
                        </form>
                      </div>
                    </div>

                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                      <MainOrangeButton
                        text="Place Order"
                        onClick={handlePlaceOrder}
                      />

                      {isNoTickets ? (
                        <div
                          class="flex p-2.5   mb-1 text-sm text-red-800 rounded-lg bg-red-50 "
                          role="alert"
                        >
                          <svg
                            aria-hidden="true"
                            class="flex-shrink-0 inline w-5 h-5 mr-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Info</span>
                          <div>
                            <span class="font-medium">
                              Select a ticket first!
                            </span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="bg-gray-100 p-0 ocl-span-1 ">
                    <img
                      src={
                        img_url
                          ? img_url
                          : "https://images.pexels.com/photos/16760200/pexels-photo-16760200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      }
                      alt="Your Image"
                      className="w-full h-40 object-cover"
                    />

                    {tickets.length != 0 ? (
                      <div className="p-4 ">
                        <h2
                          className="font-bold text-lg mb-4"
                          style={{ fontWeight: "600", fontSize: ".875rem" }}
                        >
                          Order Summary
                        </h2>
                        {tickets.map((ticket) => (
                          <div>
                            <div
                              className="flex justify-between"
                              style={{
                                fontSize: "14px",
                                lineHeight: "22px",
                                fontWeight: "400",
                              }}
                            >
                              <span>
                                {ticket.quantity} x {ticket.ticket.type}
                              </span>
                              <span>
                                ${ticket.quantity * ticket.ticket.price}
                              </span>
                            </div>
                            <div className="border-t border-gray-300 my-4"></div>
                          </div>
                        ))}

                        <div>
                          <div
                            className="flex justify-between"
                            style={{
                              fontSize: "1.125rem",
                              lineHeight: "22px",
                              fontWeight: "600",
                            }}
                          >
                            <span>Total</span>
                            <span>${totalvalue}</span>
                          </div>
                          <p className=" text-xs text-gray-500 text-right">
                            Price includes tax
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="h-12 w-12 text-gray-300"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setIsCheckout(false)}
                    type="button"
                    className=" absolute right-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="staticModal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>{" "}
              </>
            ) : (
              <div className=" p-12 flex flex-col items-center text-left">
                <svg
                className="w-24 h-24 text-green-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h1 className=" text-2xl font-bold">
                  Attendees added successfully!
                </h1>
              </div>
            )
          ) : (
            <div className=" bg-white items-center flex flex-col shadow  justify-center w-full h-96 my-0 max-w-5xl max-h-96">
              {" "}
              <h1 className=" text-center my-0 font-bold text-3xl">Time Out</h1>
              <MainOrangeButton
                text="Go Back"
                onClick={() => setIsCheckout(false)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
