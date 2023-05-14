import React, { useEffect } from "react";
import TicketCard from "./TicketCard";
import { useState } from "react";
import axios from "axios";
import MainOrangeButton from "../../../../Components/Buttons/MainOrangeButton";
import { add, set } from "date-fns";
import { useForm } from "react-hook-form";
import { Container, Row, Form, Modal } from "react-bootstrap";
import TextInputStyled from "../../../../Components/TextInput/TextInput";
import LoginMethodsCSS from "../../../AttendeesView/Login/Components/LoginMethods.module.scss";
import AttendeeData from "./AttendeeData";
import { AttachEmail } from "@mui/icons-material";
import MainGrayButton from "src/Components/Buttons/MainGrayButton";
import { useSelector } from "react-redux";
import { selectUserToken } from "src/features/authSlice";
import { Button } from "bootstrap";

/**
 * @description Checkout popup to book an event
 * @author h4z3m
 *
 * @param {*} props
 * @returns {JSX.Element}
 */

const Checkout = ({ setIsCheckout, img_url, event }) => {
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

  const [selectedTicket, setSelectedTicket] = useState([]);
  const [ticketsTypes, setTicketsTypes] = useState([]);
  const [promocodes, setPromocodes] = useState([]);
  const [promocode, setPromocode] = useState("");
  const [addedPromocodes, setAddedPromocodes] = useState(null);

  const [totalTickets, setTotal] = useState(0);
  const [isFinalCheckout, setIsFinalCheckout] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const timerDuration = 1000;
  var count = 0;

  const [remainingTime, setRemainingTime] = useState(timerDuration);

  // const handleClose = () => {
  //   setIsCheckout(false);
  // };

  const fetchPromocodes = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API}/promocodes/event_id/${event.id}`)
      .then(function (response) {
        // console.log("promocodes", response.data);
        setPromocodes(response.data);
      })
      .catch(function (error) {
        // handle error
        // console.log("error", error);
      });
  };

  const fetchTicketsTypes = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API}/tickets/event_id/${event.id}`)
      .then(function (response) {
        // console.log("tickets", response);
        setTicketsTypes(response.data);
        updateTicketsQuantity();


      })
      .catch(function (error) {
        // handle error
        // console.log("error", error);
      });
  };

  const updateTicketsQuantity = async () => {
    // update the quantity of tickets
    ticketsTypes.map(async (ticket) => {
      axios
      .put(`${process.env.REACT_APP_BASE_API}/tickets/ticket_id/${ticket.id}/quantity/${-1}`,{quantity: -1})
      .then(function (response) {
        // console.log("tickets u[date", response);
        setTicketsTypes(response.data);


      })
      .catch(function (error) {
        // handle error
        // console.log("error", error);
      });
    });
  }


  const handleAddTicket = (ticket, quantity) => {
    const newTicket = {
      ticket_id: ticket.id,
      quantity: quantity,
      ticket_info: ticket,
    };

    // check if ticket already exist
    const index = selectedTicket.findIndex(
      (ticket) => ticket.ticket_id === newTicket.ticket_id
    );
    const newSelectedTicket = [...selectedTicket];

    if (index !== -1) {
      // update quantity

      if (newTicket.quantity === 0) {
        newSelectedTicket.splice(index, 1);
        setSelectedTicket(newSelectedTicket);
      } else {
        newSelectedTicket[index].quantity = newTicket.quantity;
        setSelectedTicket(newSelectedTicket);
      }

      // if quantity is 0 remove ticket from selected tickets

      return;
    } else {
      // add new ticket to selected tickets
      setSelectedTicket([...selectedTicket, newTicket]);
    }

    setSelectedTicket([...selectedTicket, newTicket]);
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
    fetchPromocodes();
  }, []);

  useEffect(() => {
    // console.log("selectedTicket", selectedTicket);
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

  const handlePromocode =  () => {
    // check if promocode is found the promocodes array 
    // console.log("promocode", promocode)

    // check if promo code is found in the added promocodes array
    if(addedPromocodes){
      // console.log("promocode already added");
      return;
    }


    const index = promocodes.findIndex((pc) => pc.name == promocode);
    if (index != -1) {
      
      // console.log("promocode found" , promocodes[index]);
      // update the total price
      const promocode = promocodes[index];
      if(promocode.is_percentage){
        const discount = totalTickets * promocode.discount / 100;
        setTotal(totalTickets - discount);
        setAddedPromocodes(discount);

      }
      else{
        setTotal(totalTickets - promocode.discount_amount);
        setAddedPromocodes(promocode);


      }


      // finalOrder.price = finalOrder.price - promocodes[index].discount;
    }
    else{
      // console.log("promocode not found");

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
      // console.log("Res : ", response);

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
    console.log("attendees", attendees);
  }, [attendees]);

  //   useEffect(() => {
  //     if(isPlaceorder){
  //         han

  //         // handleAddAttendee({...attendee, [e.target.name]: e.target.value});
  //       }  }, [isPlaceorder]);
  return (
    <>
    
      <div
        className="fixed inset-0 z-40"
        style={{ backgroundColor: "#39364f", opacity: "0.7" }}
      ></div>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 w-full  flex items-center justify-center z-50    p-4 overflow-x-hidden  mx-auto overflow-y-auto md:inset-0 "
      >
        <div className="relative w-full max-w-5xl max-h-3xl ">
          <div className="relative bg-white   shadow w-full max-w-5xl max-h-3xl  ">
            {!isTimeOut ? (
              <div className="grid grid-cols-3">
                <div className="bg-white h-full  p-4 col-span-2">
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
                        new Date(event.date_and_time.start_date_time).getDay() +
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
                        new Date(event.date_and_time.start_date_time).getDay() +
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
                    {!isFinalCheckout ?  ticketsTypes.length == 0 ? <div class="h-96">Loading</div> : (
                      ticketsTypes.map((ticket) => (
                        <TicketCard
                          key={ticket.id}
                          ticket={ticket}
                          handleAddTicket={handleAddTicket}
                        />
                      ))
                    ) : (
                      <div>
                        <div className="mb-4">
                                 <h2 className="font-bold text-2xl mb-4">
                          Promocodes
                        </h2>
                        <Form.Floating
                                    className={LoginMethodsCSS["form-floating"]}
                                  >
                                    <TextInputStyled
                                    className="mb-2"
                                      id="login-email-input"
                                      data-testid="login-email-input"
                                     
                                      autoComplete="off"
                                      name="promocode"
                                      type="text"
                                      value={promocode}
                                      onChange={(e) =>
                                        setPromocode(e.target.value)
                                      }
                                      isInvalid={errors?.email}
                                      required
                                    />
                                    <label>Promocode</label>
                                  </Form.Floating>
                                  <MainOrangeButton  text="Apply" className="mt-2" onClick={handlePromocode}/>
                                  </div>
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
                                    className={LoginMethodsCSS["form-floating"]}
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
                                    className={LoginMethodsCSS["form-floating"]}
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
                                  className={LoginMethodsCSS["form-floating"]}
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
                                {
                                  //map on selected tickets and create a form for each ticket with the number of tickets selected
                                  selectedTicket.map((ticket, key) => {
                                    // render a form based on the quantity of tickets selected
                                    return Array.from(
                                      Array(ticket.quantity).keys()
                                    ).map((_, index) => {
                                      return (
                                        <AttendeeData
                                          index={++count}
                                          key={index}
                                          ticket={ticket}
                                          isPlaceorder={isPlaceorder}
                                          handleAddAttendee={handleAddAttendee}
                                          event={event}
                                          orderID={orderID}
                                          token={token}
                                          setIsCheckoutDone={setIsCheckoutDone}
                                          isCheckoutDone={isCheckoutDone}
                                          setIsCheckout={setIsCheckout}
                                          total={count}
                                        />
                                      );
                                    });
                                  })
                                }
                              </Form.Group>
                            </Row>
                          </Container>
                        </form>
                        
                      </div>
                    )}
                  </div>
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                    {isFinalCheckout ? (
                      <MainOrangeButton
                        text="Place Order"
                        onClick={handlePlaceOrder}
                      />
                    ) : (
                      <MainOrangeButton
                        text="Checkout"
                        onClick={handleCheckout}
                      />
                    )}
                    {isFinalCheckout ? (
                      <MainGrayButton text="Cancel" onClick={handleCancel} />
                    ) : null}
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
                    src={img_url}
                    alt="Your Image"
                    className="w-full h-40 object-cover"
                  />

                  {selectedTicket.length != 0 ? (
                    <div className="p-4 ">
                      <h2
                        className="font-bold text-lg mb-4"
                        style={{ fontWeight: "600", fontSize: ".875rem" }}
                      >
                        Order Summary
                      </h2>
                      {selectedTicket.map((ticket) => (
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
                              {ticket.quantity} x {ticket.ticket_info.name}
                            </span>
                            <span>
                              ${ticket.quantity * ticket.ticket_info.price}
                            </span>
                          </div>
                          <div className="border-t border-gray-300 my-4"></div>
                        </div>
                      ))}

                      <div>
                    { addedPromocodes ? <div
                          className="flex justify-between"
                          style={{
                            fontSize: "0.825rem",
                            lineHeight: "22px",
                            // fontWeight: "600",
                          }}
                        >
                          <span>Discount</span>
                          <span>${addedPromocodes.discount_amount}</span>
                        </div> : null}
                        <div
                          className="flex justify-between"
                          style={{
                            fontSize: "1.125rem",
                            lineHeight: "22px",
                            fontWeight: "600",
                          }}
                        >
                          <span>Total</span>
                          <span>${totalTickets}</span>
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
              </div>
            ) : (
              <div className=" bg-white items-center flex flex-col shadow  justify-center w-full h-96 my-0 max-w-5xl max-h-96">
                {" "}
                <h1 className=" text-center my-0 font-bold text-3xl">
                  Time Out
                </h1>
                <MainOrangeButton
                  text="Go Back"
                  onClick={() => setIsCheckout(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>


    </>
  );
};

export default Checkout;
