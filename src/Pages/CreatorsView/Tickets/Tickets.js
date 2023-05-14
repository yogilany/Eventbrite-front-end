import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import CreatorHeader from "../Details/Components/creatorHeader/CreatorHeader";
import "./tickets.css";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
const Tickets = () => {
  const [ticketName, setTicketName] = useState("");
  const [ticketStartTime, setTiccketStartTime] = useState("");
  const [ticketEndTime, setTicketEndTime] = useState("");
  const [ticketPrice, setTicketPrices] = useState("");
  const [endTicketDate, setEndTicketDate] = useState(new Date());
  const [startTicketDate, setStartTicketDate] = useState(new Date());
  const [ticketQuantity, setTicketQuantity] = useState("");
  const [showTicket, setShowTicket] = useState(false);
  const [paidBtn, setPaidBtn] = useState(true);
  const [freeBtn, setFreeBtn] = useState(false);
  const [donationBtn, setDonationBtn] = useState(false);
  const data = {
    name: ticketName,
    quantity: ticketQuantity,
    price: ticketPrice,
    sales_start_date_time: startTicketDate,
    sales_end_date_time: endTicketDate,
  };
  const handleSubmit = () => {
    // console.log(data);
  };
  return (
    <div className="tickets__page-container">
      <CreatorHeader />
      <Sidebar />
      <div className="tickets__page-body">
        <div className="tickets__page-creation">
          <RiPagesLine className="title__icon" />
          <h1 className="tickets__page-creationTitle">Let's create tickets</h1>
          <p className="tickets__page-creationDescription">
            Create a section if you want to sell multiple ticket types that
            share the same inventory. i.e. Floor, Mezzanine.
          </p>
          <div className="creation__add-btns">
            <button className="ticket__page-createBtn">Create a section</button>
            <button
              className="ticket__page-addBtn"
              data-testid="add-ticket-btn"
              onClick={() => setShowTicket(true)}
            >
              Add tickets
            </button>
          </div>
        </div>
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
              placeholder="Ticket name"
              data-testid="name-input"
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
              placeholder="Available quantity"
              style={{ width: "348px", height: "46px" }}
              onChange={(e) => setTicketQuantity(e.target.value)}
            />{" "}
            {ticketQuantity === "" && (
              <p className="quantity__required-error">Quantity is required.</p>
            )}
            {!freeBtn && (
              <input
                className="ticket_price-input"
                placeholder="Price"
                style={{ width: "348px", height: "46px" }}
                onChange={(e) => {
                  setTicketPrices(e.target.value);
                }}
              />
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
            <div className="tickets__inputs-label-start">
              <label for="start_date-field">Sales start:</label>
              <label for="start_time-field" style={{ marginRight: "90px" }}>
                Start time:
              </label>
            </div>
            <div className="start_date-ticket">
              <input
                id="start_date-field"
                type="date"
                style={{ width: "166px", height: "48px", padding: "10px" }}
                defaultValue="2023-03-04"
                onChange={(e) => {
                  setStartTicketDate(e.target.value);
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
            </div>
            <div className="tickets__inputs-label-end">
              <label for="end_date-field">Sales end:</label>
              <label for="end_time-field" style={{ marginRight: "99px" }}>
                End time:
              </label>
            </div>
            <div className="end_date-ticket">
              <input
                id="end_date-field"
                type="date"
                style={{ width: "166px", height: "48px", padding: "10px" }}
                defaultValue="2023-03-04"
                onChange={(e) => {
                  setEndTicketDate(e.target.value);
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
              <button className="submition-saveBtn" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
