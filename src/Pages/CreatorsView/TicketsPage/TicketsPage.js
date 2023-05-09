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
/**
 * @author Mahmoud Khaled
 * @param {}
 * @description This is Tickets Page contains Add tickets and Add Promo-codes
 * @returns {JSX.Element}
 */
const Tickets = () => {
  const [ticketName, setTicketName] = useState("");
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
  const [promoStartTime, setPromoStartTime] = useState();
  const [promoEndTime, setPromoEndTime] = useState();
  const [isPercentage, setIsPercentage] = useState("");
  const [isTicketSavedSuccessfully, setIsTicketSavedSuccessfully] = useState(false);
  const [isPromoCodeSavedSuccessfully, setIsPromoCodeSavedSuccessfully] = useState(false);
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
    if (promoCodeName !== "" && (discountAmount !== "" || percentageAmount !== ""))
    {
      if ((isLimited && LimitedAmount === ""))
        setIsPromoCodeSavedSuccessfully(false);
      else {
        setIsPromoCodeSavedSuccessfully(true); setShowPromoCode(false);
      }
    }
    else
      setIsPromoCodeSavedSuccessfully(false);
    console.log(isPromoCodeSavedSuccessfully);
  };
  // const checkPastDate = () => {
  //   const currentDate = new Date().toISOString().slice(0, -5);
  //   if (currentDate >= endTicketDate)
  //     setIsPastDate(true);
  //   else
  //     setIsPastDate(false);
  // }
  return (
    <div className="tickets__page-container">
      <CreatorHeader />
      {/* <Sidebar /> */}
      <div className="tickets__page-body">
        {/* <div className="tickets__page-creation">
          <RiPagesLine className="title__icon" />
          <h1 className="tickets__page-creationTitle">Let's create tickets</h1>
          <p className="tickets__page-creationDescription">
            Create a section if you want to sell multiple ticket types that
            share the same inventory. i.e. Floor, Mezzanine.
          </p>
          <div className="creation__add-btns">
            <button className="ticket__page-createBtn">Create a section</button>
            <button className="ticket__page-addBtn" onClick = {() => setShowTicket(true)}>Add tickets</button>
          </div>
        </div> */}
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
            onClick={() => setShowTicket(true)}
          >
            Add tickets
          </button>
        )}
        {promoCodeBtn && (
          <button
            className="ticket__page-addBtn"
            onClick={() => setShowPromoCode(true)}
          >
            Add a code
          </button>
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
              placeholder="Available quantity"
              style={{ width: "348px", height: "46px" }}
              onChange={(e) => setTicketQuantity(e.target.value)}
            />{" "}
            {ticketQuantity === "" && (
              <p className="quantity__required-error">Quantity is required.</p>
            )}
            {!freeBtn && !donationBtn && (
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
              <label htmlFor="start_time-field" style={{ marginRight: "90px" }}>
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
              <label htmlFor="end_date-field">Sales end:</label>
              <label htmlFor="end_time-field" style={{ marginRight: "99px" }}>
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
              className={promoCodeName === "" ? "input__codeName-error" :"input__codeName"}
              onChange={(e) => {
                setPromoCodeName(e.target.value);
              }}
            />
            {promoCodeName === "" ? <p className="required__promoName">Provide a code name</p> : <p className="description__codeName">
              Customers can also access this code via custom URL
            </p>}
            <div className="Limited__section">
              <Box sx={{ width: "40%", marginLeft: "30px" }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
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
            <p className="description__codeName" style={{ marginTop: "10px" }}>
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
                value = {/^\d+$/.test(discountAmount) ? discountAmount : ""}
                className="discount__input"
                placeholder="$"
                onChange={(e) => {
                  /^\d+$/.test(e.target.value) ? setDiscountAmount(e.target.value) : setDiscountAmount("");
                }}
                disabled = {percentageAmount !== "" ? true : false}
              />
              <span style={{ marginLeft: "20px", marginRight: "20px" }}>
                or
              </span>
              <input
                type="text"
                defaultValue=""
                value = {/^\d+$/.test(percentageAmount) ? percentageAmount : ""}
                className="discount__input"
                placeholder="%"
                style={{ marginLeft: "0px" }}
                onChange={(e) => {
                  e.target.value === ""
                    ? setIsPercentage(false)
                    : setIsPercentage(true);
                  setPercentageAmount(e.target.value);
                  /^\d+$/.test(e.target.value) ? setPercentageAmount(e.target.value) : setPercentageAmount("");
                }}
                disabled = {discountAmount !== "" ? true : false}
              />
            </div>
            {discountAmount === "" && percentageAmount === "" && <p className="discount__required-error">Discount amount is required</p>}
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
                id="promocode_start_date-field"
                type="date"
                style={{ width: "166px", height: "48px", padding: "10px" }}
                defaultValue="2023-03-04"
                onChange={(e) => {
                  setPromoStartDate(new Date(e.target.value));
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
                id="promocode_end_date-field"
                type="date"
                style={{ width: "166px", height: "48px", padding: "10px" }}
                defaultValue="2023-03-04"
                onChange={(e) => {
                  setPromoEndDate(e.target.value);
                  // checkPastDate();
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
            </div>
            {isPastDate && <p>Error Date</p>}
            <div className="submition__section" style = {{paddingBottom:'10px'}}>
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
        {isPromoCodeSavedSuccessfully && <div>
          {promoCodeName} , {discountAmount} 
        </div>}
        <div style={{ marginTop: '100px' }}>
          {addmissionBtn && <TicketInfo ticketName = "General admission" ticketDate = "On sale Ends Jul 16,2023 at 7:00PM" amount = "0 / 10" Price = "$90" />}
          {promoCodeBtn && <PromoCodesInfo name = "Mahmoud Khaled" codeType = "Applies discount" disacount = "$20" Uses = "0 / Unlimites" Status = "Ended" />}
        </div>
      </div>
      
    </div>
  );
};

export default Tickets;
