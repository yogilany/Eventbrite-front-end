import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import CreatorHeader from "../Details/Components/creatorHeader/CreatorHeader";
import "./ticketsPage.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
import Check from "./Components/Check";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import PromoCodesInfo from "./Components/PromoCodes/PromoCodesInfo";
import TicketInfo from "./Components/TicketsInfo/TicketInfo";
import { useEffect } from "react";
import { createContext } from "react";
import { Alert } from "react-bootstrap";
import { MdDone } from "react-icons/md";
export const AppEditContext = createContext({});
/**
 * @author Mahmoud Khaled
 * @param {}
 * @description This is Tickets Page contains Add tickets and Add Promo-codes
 * @returns {JSX.Element}
 */
const Tickets = ({ event, setEvent }) => {

  console.log("event in tickets: ", event);
  const [ID, setID] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditPromo, setIsEditPromo] = useState(false);
  const [ticketName, setTicketName] = useState("");
  const [success, setSuccess] = useState(false);
  const [ticketStartTime, setTiccketStartTime] = useState("");
  const [ticketEndTime, setTicketEndTime] = useState("");
  const [ticketPrice, setTicketPrices] = useState("");
  const [endTicketDate, setEndTicketDate] = useState(
    new Date().toISOString().slice(0, -5)
  );
  const [startTicketDate, setStartTicketDate] = useState(
    new Date().toISOString().slice(0, -5)
  );
  const [ticketQuantity, setTicketQuantity] = useState("");
  const [showTicket, setShowTicket] = useState(false);
  const [paidBtn, setPaidBtn] = useState(true);
  const [freeBtn, setFreeBtn] = useState(false);
  const [addmissionBtn, setAddmissionBtn] = useState(true);
  const [promoCodeBtn, setPromoCodesBtn] = useState(false);
  const [donationBtn, setDonationBtn] = useState(false);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [ticketIsLimited, setTicketIsLimited] = useState("");
  const [promoCodeName, setPromoCodeName] = useState("");
  const [LimitedAmount, setLimitedAmount] = useState("");
  const [percentageAmount, setPercentageAmount] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [promoStartDate, setPromoStartDate] = useState(
    new Date().toISOString().slice(0, -5)
  );
  const [promoEndDate, setPromoEndDate] = useState(
    new Date().toISOString().slice(0, -5)
  );
  const [isLimited, setIsLimited] = useState(false);
  const [promoStartTime, setPromoStartTime] = useState("");
  const [promoEndTime, setPromoEndTime] = useState("");
  const [isPercentage, setIsPercentage] = useState("");
  const [errorStartDate, setErrorStartDate] = useState(false);
  const [isTicketSavedSuccessfully, setIsTicketSavedSuccessfully] =
    useState(false);
  const [isPromoCodeSavedSuccessfully, setIsPromoCodeSavedSuccessfully] =
    useState(false);
  const [isPastDate, setIsPastDate] = useState(false);
  const promoCodeData = {
    name: promoCodeName,
    is_limited: isLimited,
    limited_amount: LimitedAmount,
    current_amount: LimitedAmount,
    is_percentage: isPercentage,
    discount_amount: discountAmount,
    start_date_time: promoStartDate + "T" + promoStartTime,
    end_date_time: promoEndDate + "T" + promoEndTime,
  };
  const data = {
    name: ticketName,
    quantity: ticketQuantity,
    price: ticketPrice,
    sales_start_date_time: startTicketDate + "T" + ticketStartTime,
    sales_end_date_time: endTicketDate + "T" + ticketEndTime,
  };
  const handleSubmit = () => {
    console.log(data);
    setIsTicketSavedSuccessfully(true);
  };
  const handleSubmitPromoCode = () => {
    if (
      promoCodeName !== "" &&
      (discountAmount !== "" || percentageAmount !== "")
    ) {
      if ((isLimited && LimitedAmount !== "") || !isLimited) {
        savePromoCode();
        setShowPromoCode(false);
      }
    }
  };
  const handleSubmitTickets = () => {
    if (ticketName !== "" && ticketQuantity !== "" && ticketPrice !== "") {
      saveData();
      setShowTicket(false);
    }
  };
  function saveData() {
    // spread old state and save new ticket
    const dateStart = new Date(startTicketDate);
    dateStart.setHours(
      ticketStartTime.slice(0, 2),
      ticketStartTime.slice(3, 5),
      ticketStartTime.slice(6, 8)
    );
    const dateEnd = new Date(endTicketDate);
    dateEnd.setHours(
      ticketEndTime.slice(0, 2),
      ticketEndTime.slice(3, 5),
      ticketEndTime.slice(6, 8)
    );
    console.log(endTicketDate);
    console.log(ticketEndTime);
    setEvent({
      ...event,
      tickets: [
        ...event.tickets,
        {
          type: "vip",
          name: ticketName,
          max_quantity: ticketQuantity,
          price: ticketPrice,
          sales_end_date_time: dateEnd.toISOString().slice(0, -5),
          sales_start_date_time: dateStart.toISOString().slice(0, -5),
        },
      ],
    });
    setSuccess(true);
  }
  function savePromoCode() {
    const dateStart = new Date(promoStartDate);
    dateStart.setHours(
      promoStartTime.slice(0, 2),
      promoStartTime.slice(3, 5),
      promoStartTime.slice(6, 8)
    );
    const dateEnd = new Date(promoEndDate);
    dateEnd.setHours(
      promoEndTime.slice(0, 2),
      promoEndTime.slice(3, 5),
      promoEndTime.slice(6, 8)
    );
    setEvent({
      ...event,
      promocodes: [
        ...event.promocodes,
        {
          name: promoCodeName,
          is_limited: isLimited,
          limited_amount: LimitedAmount,
          current_amount: LimitedAmount,
          is_percentage: isPercentage,
          discount_amount: discountAmount,
          start_date_time: dateStart.toISOString().slice(0, -5),
          end_date_time: dateEnd.toISOString().slice(0, -5),
        },
      ],
    });
    setSuccess(true);
    // alert("Saved");
  }
  function updateTicket(id) {
    console.log(event.tickets[id].sales_end_date_time);
    const dateStart = new Date(startTicketDate);
    dateStart.setHours(
      ticketStartTime.slice(0, 2),
      ticketStartTime.slice(3, 5),
      ticketStartTime.slice(6, 8)
    );
    const dateEnd = new Date(endTicketDate);
    dateEnd.setHours(
      ticketEndTime.slice(0, 2),
      ticketEndTime.slice(3, 5),
      ticketEndTime.slice(6, 8)
    );
    const newEvent = event;
    newEvent.tickets[id].name = ticketName;
    newEvent.tickets[id].max_quantity = ticketQuantity;
    newEvent.tickets[id].sales_start_date_time = dateStart
      .toISOString()
      .slice(0, -5);
    newEvent.tickets[id].sales_end_date_time = dateEnd
      .toISOString()
      .slice(0, -5);
    newEvent.tickets[id].price = ticketPrice;
    if (ticketName !== "" && ticketPrice !== "" && ticketQuantity !== "") {
      setEvent({ ...event, newEvent });
      setIsEdit(false);
    }
  }
  function updatePromoCode(id) {
    const dateStart = new Date(promoStartDate);
    dateStart.setHours(
      promoStartTime.slice(0, 2),
      promoStartTime.slice(3, 5),
      promoStartTime.slice(6, 8)
    );
    const dateEnd = new Date(promoEndDate);
    dateEnd.setHours(
      promoEndTime.slice(0, 2),
      promoEndTime.slice(3, 5),
      promoEndTime.slice(6, 8)
    );
    const newEvent = event;
    newEvent.promocodes[id].name = promoCodeName;
    newEvent.promocodes[id].is_limited = isLimited;
    newEvent.promocodes[id].limited_amount = LimitedAmount;
    newEvent.promocodes[id].current_amount = LimitedAmount;
    newEvent.promocodes[id].is_percentage = isPercentage;
    newEvent.promocodes[id].discount_amount = discountAmount;
    newEvent.promocodes[id].start_date_time = dateStart
      .toISOString()
      .slice(0, -5);
    newEvent.promocodes[id].end_date_time = dateEnd.toISOString().slice(0, -5);
    if (
      promoCodeName !== "" &&
      (discountAmount !== "" || percentageAmount !== "")
    ) {
      if ((isLimited && LimitedAmount !== "") || !isLimited) {
        setEvent({ ...event, newEvent });
        setIsEditPromo(false);
      }
    }
  }
  const checkPastDate = () => {
    const currentDate = new Date();
    const endDate = new Date(promoEndDate);
    if (currentDate >= endDate) setIsPastDate(true);
    else setIsPastDate(false);
  };
  const checkStartDate = () => {
    const currentDate = new Date();
    const startDate = new Date(promoStartDate);
    if (currentDate >= startDate) setErrorStartDate(true);
    else setErrorStartDate(false);
  };
  const checkTicketEnd = () => {
    const currentDate = new Date();
    const endDate = new Date(endTicketDate);
    if (currentDate >= endDate) setIsPastDate(true);
    else setIsPastDate(false);
  };
  const checkTicketStart = () => {
    const currentDate = new Date();
    const startDate = new Date(startTicketDate);
    if (currentDate >= startDate) setErrorStartDate(true);
    else setErrorStartDate(false);
  };

  
  useEffect(() => {
    setTimeout(() => {
      // After 3 seconds set the show value to false
      setSuccess(false);
    }, 3000);
  }, [success]);
  return (
    <AppEditContext.Provider
      value={{ isEdit, setIsEdit, ID, setID, isEditPromo, setIsEditPromo }}
    >
      <div className="tickets__page-container">
        <CreatorHeader />
        <div className="tickets__page-body">
          <div className="tickets-tab__selection">
            <h1 className="ticket__title">Tickets</h1>
            <div className="btns__selection">
              <button
                className={
                  addmissionBtn ? "addmission-selected__Btn" : "addmission__btn"
                }
                onClick={(e) => {
                  setAddmissionBtn(true);
                  setPromoCodesBtn(false);
                }}
              >
                Admission
              </button>
              <button
                className={
                  promoCodeBtn ? "promocode-selected__Btn" : "promoCodes__btn"
                }
                onClick={(e) => {
                  setPromoCodesBtn(true);
                  setAddmissionBtn(false);
                }}
              >
                Promo Codes
              </button>
            </div>
          </div>
          {addmissionBtn && (
            <button
              className="ticket__page-addBtn"
              onClick={() => {
                setShowTicket(true);
                setTicketName("");
                setTicketPrices("");
                setTicketQuantity("");
              }}
            >
              Add tickets
            </button>
          )}
          {promoCodeBtn && (
            <button
              className="ticket__page-addBtn"
              onClick={() => {
                setShowPromoCode(true);
                setPromoCodeName("");
                setDiscountAmount("");
                setPercentageAmount("");
                setIsLimited(false);
                setIsPercentage(false);
                setLimitedAmount("");
              }}
            >
              Add a code
            </button>
          )}
          {isEdit && (
            <div className="tickets__creation-sidebar">
              <div className="tickets__creation-sidebar-title">
                <h1
                  style={{
                    fontSize: "18px",
                    color: "color: #1e0a3c",
                    fontWeight: "600",
                  }}
                >
                  Add tickets
                </h1>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#3659e3",
                    fontSize: "15px",
                    fontWeight: "font-weight: 400;",
                  }}
                >
                  Learn more
                </a>
              </div>
              <div className="tickets__sidebar-line"></div>
              <div className="pagination__selectionPrices">
                <button
                  className={
                    paidBtn
                      ? "pagination__selected"
                      : "pagination__selection-btns"
                  }
                  onClick={() => {
                    setPaidBtn(true);
                    setFreeBtn(false);
                    setDonationBtn(false);
                  }}
                >
                  Paid
                </button>
                <button
                  className={
                    freeBtn
                      ? "pagination__selected"
                      : "pagination__selection-btns"
                  }
                  onClick={() => {
                    setFreeBtn(true);
                    setPaidBtn(false);
                    setDonationBtn(false);
                  }}
                >
                  Free
                </button>
                <button
                  className={
                    donationBtn
                      ? "pagination__selected"
                      : "pagination__selection-btns"
                  }
                  onClick={() => {
                    setDonationBtn(true);
                    setFreeBtn(false);
                    setPaidBtn(false);
                  }}
                >
                  Donation
                </button>
              </div>
              <input
                className={
                  ticketName === ""
                    ? "ticket_name-input-error"
                    : "ticket_name-input"
                }
                placeholder="Ticket name"
                style={{ width: "348px", height: "46px" }}
                onChange={(e) => setTicketName(e.target.value)}
                defaultValue={event.tickets[ID].name}
              />{" "}
              {ticketName === "" && (
                <p className="name__required-error">Name is required.</p>
              )}
              <input
                className={
                  ticketQuantity === ""
                    ? "ticket_quantity-input-error"
                    : "ticket_quantity-input"
                }
                placeholder="Available quantity"
                style={{ width: "348px", height: "46px" }}
                value={/^\d+$/.test(ticketQuantity) ? ticketQuantity : ""}
                onChange={(e) => {
                  /^\d+$/.test(e.target.value)
                    ? setTicketQuantity(e.target.value)
                    : setTicketQuantity("");
                }}
                defaultValue={event.tickets[ID].max_quantity}
              />{" "}
              {ticketQuantity === "" && (
                <p className="quantity__required-error">
                  Quantity is required.
                </p>
              )}
              {!freeBtn && !donationBtn && (
                <input
                  className={
                    ticketPrice === ""
                      ? "ticket_price-input-error"
                      : "ticket_price-input"
                  }
                  placeholder="Price"
                  style={{ width: "348px", height: "46px" }}
                  value={/^\d+$/.test(ticketPrice) ? ticketPrice : ""}
                  onChange={(e) => {
                    /^\d+$/.test(e.target.value)
                      ? setTicketPrices(e.target.value)
                      : setTicketPrices("");
                  }}
                  defaultValue={event.tickets[ID].price}
                />
              )}
              {ticketPrice === "" && (
                <p className="required__price">Price is required.</p>
              )}
              {freeBtn && (
                <input
                  className="ticket_price-input"
                  placeholder="Price"
                  style={{ width: "348px", height: "46px" }}
                  value="Free"
                  disabled={true}
                />
              )}
              {donationBtn && (
                <input
                  className="ticket_price-input"
                  placeholder="Price"
                  style={{ width: "348px", height: "46px" }}
                  value="Attendees can donate what they wish"
                  disabled={true}
                />
              )}
              {donationBtn && (
                <Check labelVal="Absorb fees: Ticketing fees are deducted from your donation amount" />
              )}
              <div className="tickets__inputs-label-start">
                <label htmlFor="start_date-field">Sales start:</label>
                <label
                  htmlFor="start_time-field"
                  style={{ marginRight: "90px" }}
                >
                  Start time:
                </label>
              </div>
              <div className="start_date-ticket">
                <input
                  id={errorStartDate ? "start_date-field" : ''}
                  type="date"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  onChange={(e) => {
                    setStartTicketDate(e.target.value);
                    checkTicketStart();
                  }}
                  defaultValue={event.tickets[ID].sales_start_date_time.slice(
                    0,
                    -9
                  )}
                />
                <input
                  id="start_time-field"
                  type="time"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  onChange={(e) => {
                    setTiccketStartTime(e.target.value);
                  }}
                  defaultValue={event.tickets[ID].sales_start_date_time.slice(
                    11
                  )}
                />
              </div>
              <div className="tickets__inputs-label-end">
                <label htmlFor="end_date-field">Sales end:</label>
                <label htmlFor="end_time-field" style={{ marginRight: "99px" }}>
                  End time:
                </label>
              </div>
              <div className="end_date-ticket">
                <input
                  id={isPastDate ? "end_date-field" : ''}
                  type="date"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  onChange={(e) => {
                    setEndTicketDate(e.target.value);
                    checkTicketEnd();
                  }}
                  defaultValue={event.tickets[ID].sales_end_date_time.slice(
                    0,
                    -9
                  )}
                />
                <input
                  id="end_time-field"
                  type="time"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  onChange={(e) => {
                    setTicketEndTime(e.target.value);
                  }}
                  defaultValue={event.tickets[ID].sales_end_date_time.slice(11)}
                />
              </div>
              <div className="advanced__Setting">
                <button className="advanced__Setting-btn">
                  Advanced Setting
                </button>
                <AiOutlineArrowDown className="down-arrow" />
              </div>
              <div className="submition__section">
                <button
                  className="submition-cancelBtn"
                  onClick={() => setIsEdit(false)}
                >
                  Cancel
                </button>
                <button
                  className="submition-saveBtn"
                  onClick={() => {
                    updateTicket(ID);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          {showTicket && (
            <div className="tickets__creation-sidebar">
              <div className="tickets__creation-sidebar-title">
                <h1
                  style={{
                    fontSize: "18px",
                    color: "color: #1e0a3c",
                    fontWeight: "600",
                  }}
                >
                  Add tickets
                </h1>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#3659e3",
                    fontSize: "15px",
                    fontWeight: "font-weight: 400;",
                  }}
                >
                  Learn more
                </a>
              </div>
              <div className="tickets__sidebar-line"></div>
              <div className="pagination__selectionPrices">
                <button
                  className={
                    paidBtn
                      ? "pagination__selected"
                      : "pagination__selection-btns"
                  }
                  onClick={() => {
                    setPaidBtn(true);
                    setFreeBtn(false);
                    setDonationBtn(false);
                  }}
                >
                  Paid
                </button>
                <button
                  className={
                    freeBtn
                      ? "pagination__selected"
                      : "pagination__selection-btns"
                  }
                  onClick={() => {
                    setFreeBtn(true);
                    setPaidBtn(false);
                    setDonationBtn(false);
                  }}
                >
                  Free
                </button>
                <button
                  className={
                    donationBtn
                      ? "pagination__selected"
                      : "pagination__selection-btns"
                  }
                  onClick={() => {
                    setDonationBtn(true);
                    setFreeBtn(false);
                    setPaidBtn(false);
                  }}
                >
                  Donation
                </button>
              </div>
              <input
                className={
                  ticketName === ""
                    ? "ticket_name-input-error"
                    : "ticket_name-input"
                }
                defaultValue=""
                placeholder="Ticket name"
                style={{ width: "348px", height: "46px" }}
                onChange={(e) => setTicketName(e.target.value)}
              />{" "}
              {ticketName === "" && (
                <p className="name__required-error">Name is required.</p>
              )}
              <input
                className={
                  ticketQuantity === ""
                    ? "ticket_quantity-input-error"
                    : "ticket_quantity-input"
                }
                defaultValue=""
                placeholder="Available quantity"
                style={{ width: "348px", height: "46px" }}
                onChange={(e) => {
                  /^\d+$/.test(e.target.value)
                    ? setTicketQuantity(e.target.value)
                    : setTicketQuantity("");
                }}
              />{" "}
              {ticketQuantity === "" && (
                <p className="quantity__required-error">
                  Quantity is required.
                </p>
              )}
              {!freeBtn && !donationBtn && (
                <input
                  className={
                    ticketPrice === ""
                      ? "ticket_price-input-error"
                      : "ticket_price-input"
                  }
                  defaultValue=""
                  placeholder="Price"
                  style={{ width: "348px", height: "46px" }}
                  onChange={(e) => {
                    /^\d+$/.test(e.target.value)
                      ? setTicketPrices(e.target.value)
                      : setTicketPrices("");
                  }}
                />
              )}
              {ticketPrice === "" && (
                <p className="required__price">Price is required.</p>
              )}
              {freeBtn && (
                <input
                  className="ticket_price-input"
                  placeholder="Price"
                  style={{ width: "348px", height: "46px" }}
                  value="Free"
                  disabled={true}
                />
              )}
              {donationBtn && (
                <input
                  className="ticket_price-input"
                  placeholder="Price"
                  style={{ width: "348px", height: "46px" }}
                  value="Attendees can donate what they wish"
                  disabled={true}
                />
              )}
              {donationBtn && (
                <Check labelVal="Absorb fees: Ticketing fees are deducted from your donation amount" />
              )}
              <div className="tickets__inputs-label-start">
                <label htmlFor="start_date-field">Sales start:</label>
                <label
                  htmlFor="start_time-field"
                  style={{ marginRight: "90px" }}
                >
                  Start time:
                </label>
              </div>
              <div className="start_date-ticket">
                <input
                  id={errorStartDate ? "start_date-field" : ""}
                  type="date"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  defaultValue="2023-03-04"
                  onChange={(e) => {
                    setStartTicketDate(e.target.value);
                    checkTicketStart();
                  }}
                />
                <input
                  id="start_time-field"
                  type="time"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  defaultValue="09:00:00"
                  onChange={(e) => {
                    setTiccketStartTime(e.target.value);
                  }}
                />
                {errorStartDate && (
                  <div className="error__date">Error start date</div>
                )}
              </div>
              <div className="tickets__inputs-label-end">
                <label htmlFor="end_date-field">Sales end:</label>
                <label htmlFor="end_time-field" style={{ marginRight: "99px" }}>
                  End time:
                </label>
              </div>
              <div className="end_date-ticket">
                <input
                  id={isPastDate ? "end_date-field" : ""}
                  type="date"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  defaultValue="2023-03-04"
                  onChange={(e) => {
                    setEndTicketDate(e.target.value);
                    checkTicketEnd();
                  }}
                />
                <input
                  id="end_time-field"
                  type="time"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  defaultValue="09:00:00"
                  onChange={(e) => {
                    setTicketEndTime(e.target.value);
                  }}
                />
                {isPastDate && (
                  <div className="error__date">Error end date</div>
                )}
              </div>
              <div className="advanced__Setting">
                <button className="advanced__Setting-btn">
                  Advanced Setting
                </button>
                <AiOutlineArrowDown className="down-arrow" />
              </div>
              <div className="submition__section">
                <button
                  className="submition-cancelBtn"
                  onClick={() => setShowTicket(false)}
                >
                  Cancel
                </button>
                <button
                  className="submition-saveBtn"
                  onClick={handleSubmitTickets}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          {isEditPromo && (
            <div className="tickets__creation-sidebar">
              <div className="tickets__creation-sidebar-title">
                <h1
                  style={{
                    fontSize: "18px",
                    color: "color: #1e0a3c",
                    fontWeight: "600",
                  }}
                >
                  Add code
                </h1>
              </div>
              <div className="tickets__sidebar-line"></div>
              <input
                type="text"
                placeholder="Code name"
                className={
                  promoCodeName === ""
                    ? "input__codeName-error"
                    : "input__codeName"
                }
                onChange={(e) => {
                  setPromoCodeName(e.target.value);
                }}
                defaultValue={event.promocodes[ID].name}
              />
              {promoCodeName === "" ? (
                <p className="required__promoName">Provide a code name</p>
              ) : (
                <p className="description__codeName">
                  Customers can also access this code via custom URL
                </p>
              )}
              <div className="Limited__section">
                <Box sx={{ width: "40%", marginLeft: "30px" }}>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Ticket limited
                    </InputLabel>
                    <NativeSelect
                      defaultValue={
                        event.promocodes[ID].is_limited
                          ? "Limited"
                          : "Unlimited"
                      }
                      inputProps={{
                        name: "age",
                      }}
                      onChange={(e) => {
                        setTicketIsLimited(e.target.value);
                        e.target.value === "Limited"
                          ? setIsLimited(true)
                          : setIsLimited(false);
                      }}
                    >
                      <option value="Limited">Limited</option>
                      <option value="Unlimited">Unlimited</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
                {ticketIsLimited === "Limited" && (
                  <input
                    type="text"
                    placeholder="Amount"
                    className="Limited__tickets"
                    onChange={(e) => {
                      setLimitedAmount(e.target.value);
                    }}
                    defaultValue={event.promocodes[ID].limited_amount}
                  />
                )}
              </div>
              <p
                className="description__codeName"
                style={{ marginTop: "10px" }}
              >
                Total number of tickets that can be purchased with this code
              </p>
              <div className="discount__section">
                <label
                  style={{
                    marginLeft: "30px",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Discount amount
                </label>
                <input
                  type="text"
                  defaultValue={event.promocodes[ID].discount_amount}
                  value={/^\d+$/.test(discountAmount) ? discountAmount : ""}
                  className="discount__input"
                  placeholder="$"
                  onChange={(e) => {
                    /^\d+$/.test(e.target.value)
                      ? setDiscountAmount(e.target.value)
                      : setDiscountAmount("");
                  }}
                  disabled={percentageAmount !== "" ? true : false}
                />
                <span style={{ marginLeft: "20px", marginRight: "20px" }}>
                  or
                </span>
                <input
                  type="text"
                  defaultValue=""
                  value={/^\d+$/.test(percentageAmount) ? percentageAmount : ""}
                  className="discount__input"
                  placeholder="%"
                  style={{ marginLeft: "0px" }}
                  onChange={(e) => {
                    e.target.value === ""
                      ? setIsPercentage(false)
                      : setIsPercentage(true);
                    setPercentageAmount(e.target.value);
                    /^\d+$/.test(e.target.value)
                      ? setPercentageAmount(e.target.value)
                      : setPercentageAmount("");
                  }}
                  disabled={discountAmount !== "" ? true : false}
                />
              </div>
              {discountAmount === "" && percentageAmount === "" && (
                <p className="discount__required-error">
                  Discount amount is required
                </p>
              )}
              <div
                className="promocode__inputs-label-start"
                style={{ marginTop: "15px" }}
              >
                <label
                  htmlFor="promocode_start_date-field"
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#39364F",
                  }}
                >
                  Promo code starts:
                </label>
              </div>
              <div className="start_date-ticket">
                <input
                  id={errorStartDate ? "promocode_start_date-field" : ''}
                  type="date"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  onChange={(e) => {
                    setPromoStartDate(new Date(e.target.value));
                    checkStartDate();
                  }}
                  defaultValue={event.promocodes[ID].start_date_time.slice(
                    0,
                    -9
                  )}
                />
                <input
                  id="start_time-field"
                  type="time"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  onChange={(e) => {
                    setPromoStartTime(e.target.value);
                  }}
                  defaultValue={event.promocodes[ID].start_date_time.slice(11)}
                />
              </div>
              <div
                className="promocode__inputs-label-start"
                style={{ marginTop: "15px" }}
              >
                <label
                  htmlFor="promocode_end_date-field"
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#39364F",
                  }}
                >
                  Promo code Ends:
                </label>
              </div>
              <div
                className="start_date-ticket"
                style={{ marginBottom: "120px" }}
              >
                <input
                  id={isPastDate ? "promocode_end_date-field" : ''}
                  type="date"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  onChange={(e) => {
                    setPromoEndDate(e.target.value);
                    checkPastDate();
                  }}
                  defaultValue={event.promocodes[ID].end_date_time.slice(0, -9)}
                />
                <input
                  id="start_time-field"
                  type="time"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  onChange={(e) => {
                    setPromoEndTime(e.target.value);
                  }}
                  defaultValue={event.promocodes[ID].end_date_time.slice(11)}
                />
              </div>
              <div
                className="submition__section"
                style={{ paddingBottom: "10px" }}
              >
                <button
                  className="submition-cancelBtn"
                  onClick={() => setIsEditPromo(false)}
                >
                  Cancel
                </button>
                <button
                  className="submition-saveBtn"
                  onClick={() => {
                    updatePromoCode(ID);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          {showPromoCode && (
            <div className="tickets__creation-sidebar">
              <div className="tickets__creation-sidebar-title">
                <h1
                  style={{
                    fontSize: "18px",
                    color: "color: #1e0a3c",
                    fontWeight: "600",
                  }}
                >
                  Add code
                </h1>
              </div>
              <div className="tickets__sidebar-line"></div>
              <input
                type="text"
                placeholder="Code name"
                className={
                  promoCodeName === ""
                    ? "input__codeName-error"
                    : "input__codeName"
                }
                onChange={(e) => {
                  setPromoCodeName(e.target.value);
                }}
              />
              {promoCodeName === "" ? (
                <p className="required__promoName">Provide a code name</p>
              ) : (
                <p className="description__codeName">
                  Customers can also access this code via custom URL
                </p>
              )}
              <div className="Limited__section">
                <Box sx={{ width: "40%", marginLeft: "30px" }}>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Ticket limited
                    </InputLabel>
                    <NativeSelect
                      defaultValue="Unlimited"
                      inputProps={{
                        name: "age",
                      }}
                      onChange={(e) => {
                        setTicketIsLimited(e.target.value);
                        e.target.value === "Limited"
                          ? setIsLimited(true)
                          : setIsLimited(false);
                      }}
                    >
                      <option value="Limited">Limited</option>
                      <option value="Unlimited">Unlimited</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
                {ticketIsLimited === "Limited" && (
                  <input
                    type="text"
                    placeholder="Amount"
                    className="Limited__tickets"
                    onChange={(e) => {
                      setLimitedAmount(e.target.value);
                    }}
                  />
                )}
              </div>
              <p
                className="description__codeName"
                style={{ marginTop: "10px" }}
              >
                Total number of tickets that can be purchased with this code
              </p>
              <div className="discount__section">
                <label
                  style={{
                    marginLeft: "30px",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Discount amount
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={/^\d+$/.test(discountAmount) ? discountAmount : ""}
                  className="discount__input"
                  placeholder="$"
                  onChange={(e) => {
                    /^\d+$/.test(e.target.value)
                      ? setDiscountAmount(e.target.value)
                      : setDiscountAmount("");
                  }}
                  disabled={percentageAmount !== "" ? true : false}
                />
                <span style={{ marginLeft: "20px", marginRight: "20px" }}>
                  or
                </span>
                <input
                  type="text"
                  defaultValue=""
                  value={/^\d+$/.test(percentageAmount) ? percentageAmount : ""}
                  className="discount__input"
                  placeholder="%"
                  style={{ marginLeft: "0px" }}
                  onChange={(e) => {
                    e.target.value === ""
                      ? setIsPercentage(false)
                      : setIsPercentage(true);
                    setPercentageAmount(e.target.value);
                    /^\d+$/.test(e.target.value)
                      ? setPercentageAmount(e.target.value)
                      : setPercentageAmount("");
                  }}
                  disabled={discountAmount !== "" ? true : false}
                />
              </div>
              {discountAmount === "" && percentageAmount === "" && (
                <p className="discount__required-error">
                  Discount amount is required
                </p>
              )}
              <div
                className="promocode__inputs-label-start"
                style={{ marginTop: "15px" }}
              >
                <label
                  htmlFor="promocode_start_date-field"
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#39364F",
                  }}
                >
                  Promo code starts:
                </label>
              </div>
              <div className="start_date-ticket">
                <input
                  id={errorStartDate ? "promocode_start_date-field" : ""}
                  type="date"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  defaultValue="2023-03-04"
                  onChange={(e) => {
                    setPromoStartDate(new Date(e.target.value));
                    checkStartDate();
                  }}
                />
                <input
                  id="start_time-field"
                  type="time"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  defaultValue="09:00:00"
                  onChange={(e) => {
                    setPromoStartTime(e.target.value);
                  }}
                />
                {errorStartDate && (
                  <div className="error__date">Error start date</div>
                )}
              </div>
              <div
                className="promocode__inputs-label-start"
                style={{ marginTop: "15px" }}
              >
                <label
                  htmlFor="promocode_end_date-field"
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#39364F",
                  }}
                >
                  Promo code Ends:
                </label>
              </div>
              <div
                className="start_date-ticket"
                style={{ marginBottom: "120px" }}
              >
                <input
                  id={isPastDate ? "promocode_end_date-field" : ""}
                  type="date"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  defaultValue="2023-03-04"
                  onChange={(e) => {
                    setPromoEndDate(e.target.value);
                    checkPastDate();
                  }}
                />
                <input
                  id="start_time-field"
                  type="time"
                  style={{ width: "166px", height: "48px", padding: "10px" }}
                  defaultValue="09:00:00"
                  onChange={(e) => {
                    setPromoEndTime(e.target.value);
                  }}
                />
                {isPastDate && (
                  <div className="errorEndDate">Error end date</div>
                )}
              </div>
              <div
                className="submition__section"
                style={{ paddingBottom: "10px" }}
              >
                <button
                  className="submition-cancelBtn"
                  onClick={() => setShowPromoCode(false)}
                >
                  Cancel
                </button>
                <button
                  className="submition-saveBtn"
                  onClick={handleSubmitPromoCode}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          <div style={{ marginTop: "100px" }}>
            {/* {event.tickets.map((ticket, id) =>
              addmissionBtn ? (
                <TicketInfo
                  ticketName={ticket.name}
                  ticketDate={
                    "On sale Ends " +
                    new Date(ticket.sales_end_date_time)
                      .toISOString()
                      .slice(0, -14) +
                    " at " +
                    new Date(ticket.sales_end_date_time)
                      .toISOString()
                      .slice(11, -5)
                  }
                  amount={"0 / " + ticket.max_quantity}
                  Price={"$" + ticket.price}
                  btnID={id}
                  event={event}
                  setEvent={setEvent}
                />
              ) : (
                ""
              )
            )} */}
            {promoCodeBtn && (
              <table style={{ width: "80%" }}>
                <tr className="data__row-table">
                  <th colSpan={1}>Name</th>
                  <th colSpan={2}>Code type</th>
                  <th colSpan={1}>Discount</th>
                  <th colSpan={2}>Uses</th>
                  <th colSpan={1}>Status</th>
                </tr>
                {/* {event.promocodes.map((promocode, id) => (
                  <PromoCodesInfo
                    name={promocode.name}
                    codeType="Applies discount"
                    disacount={"$ " + promocode.discount_amount}
                    Uses={
                      promocode.is_limited
                        ? "0 / " + promocode.limited_amount
                        : "0 / Unlimites"
                    }
                    Status="Ended"
                    btnID={id}
                    event={event}
                    setEvent={setEvent}
                  />
                ))} */}
              </table>
            )}
          </div>
        </div>
        {success ? (
          <Alert
            variant="success"
            style={{
              width: "70%",
              position: "fixed",
              top: "70px",
              zIndex: "999",
              left: "370px",
            }}
          >
            Data saved successfully.
          </Alert>
        ) : null}
      </div>
    </AppEditContext.Provider>
  );
};

export default Tickets;
