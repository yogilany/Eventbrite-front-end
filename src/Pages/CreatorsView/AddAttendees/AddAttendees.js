import { useEffect, useState } from "react";
import "./AddAttendees.scss";
import { Alert, Row, Col, Container } from "react-bootstrap";
import RowInput from "./RowInput";
import MainOrangeButton from "src/Components/Buttons/MainOrangeButton";
import Checkout from "./Checkout";

const testEvent = {
  creator_id: "2dg3f4g5h6j7k8l9",
  basic_info: {
    title: "Let's be loyal",
    organizer: "Loyalty Organization",
    category: "Loyalty",
    sub_category: "Loyalty",
  },
  image_link: "https://www.example.com/image.png",
  summary: "This is a summary of the event",
  description: "This is a description of the event",
  state: {
    is_public: true,
    publish_date_time: "2023-05-01T09:00:00",
  },
  date_and_time: {
    start_date_time: "2023-05-01T15:30:00",
    end_date_time: "2023-05-01T18:30:00",
    is_display_start_date: true,
    is_display_end_date: true,
    time_zone: "US/Pacific",
    event_page_language: "en-US",
  },
  location: {
    is_online: false,
    city: "San Francisco",
  },
  id: "2dg3f4g5h6j7k8l9",
  price: 100,
  is_free: false,
};
/**
 * @author Anas Sherif
 * @param {}
 * @description This is the add attendees page, it adds the attendees to the event manually.
 * @returns {JSX.Element}
 */

function AddAttendees({ event, setEvent }) {
  // define an array of ticket types to be used in the table
  const [ticketTypes, setTicketTypes] = useState([
    {
      type: "General Admission",
      sold: "0/200",
      price: 5.0,
    },
    {
      type: "VIP",
      sold: "0/100",
      price: 10.0,
    },
  ]);

  const [orderType, setOrderType] = useState("check");
  const [totalvalue, setTotalValue] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [isCheckOut, setIsCheckOut] = useState(false);

  function saveData() {
    if (error.length !== 0) return;
    setEvent({
      ...event,
      orderType: orderType,
      totalvalue: totalvalue,
    });

    setSuccess(true);
  }

  useEffect(() => {
    setTimeout(() => {
      // After 3 seconds set the show value to false
      setSuccess(false);
    }, 3000);
  }, [success]);

  useEffect(() => {
    let total = 0;
    tickets.forEach((ticket) => {
      total += ticket.facevalue;
    });
    setTotalValue(total);

    console.log("new ticketssss", tickets, total);
  }, [tickets]);

  function quantityupdatehandler(e) {
    // set the total value of the tickets to the sume of each ticket type price * quantity
  }
  return (
    <>
      <Row>
        <Col>
          <div className="BasicinfoPage_Container mb-5 pb-5">
            <div className="Section_Container">
              <Container>
                <Row>
                  <Col>
                    {isCheckOut ? <><a
                    onClick={() => setIsCheckOut(false)}
                      href="#"
                      class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        <svg
                        className="w-4 h-4 mr-2"
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
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        ></path>
                      </svg>
                      Back to Add Attendees section

                    
                    </a>
                     <h1 className="eds-text-hm">Registration Information
</h1>
                   </>: <> <h1 className="eds-text-hm">Add Attendees</h1>
                    <p className="eds-text-bm eds-l-mar-top-2">
                      Manually add attendees info for complimentary tickets or
                      offline payments
                    </p></>}

                   
                    <hr className="line" />

                    {!isCheckOut ? (
                      <>
                        <div className="mt-8 ">
                          <label
                            className="label-primary"
                            for="pp_payment_status"
                          >
                            Order Type:
                          </label>
                        </div>
                        <div className="g-cell g-cell-9-9 g-cell-md-4-9">
                          <select
                            id="pp_payment_status"
                            name="pp_payment_status"
                            className="js-d-select-box "
                            onChange={(e) => setOrderType(e.target.value)}
                          >
                            <option value="check">Paid with check</option>
                            <option value="cash">Paid with cash</option>
                            <option value="paypal">
                              Paid directly online with PayPal
                            </option>
                            <option value="online">
                              Paid online non-PayPal
                            </option>
                            <option value="comp">Complimentary</option>
                            <option value="free">No payment necessary</option>
                            <option value="voucher">Paid With Voucher</option>
                            <option value="credit">
                              Paid Directly By Credit Card
                            </option>
                            <option value="debit">
                              Paid Directly By Debit Card
                            </option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <p className="mt-4">
                          {" "}
                          * Eventbrite does not charge any fees for manual
                          orders.
                        </p>
                        <table className="l-mar-left-2 responsive-table js-d-table-stacked responsive-table--stacked mt-4">
                          <thead>
                            <tr>
                              <th>Ticket Type</th>
                              <th align="center">Sold</th>
                              <th align="center">Price *</th>
                              <th width="20%" align="center">
                                Quantity
                              </th>
                              <th width="20%" align="center">
                                Face Value
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {ticketTypes.map((ticketType) => (
                              <tr>
                                <td>{ticketType.type}</td>
                                <td align="center">{ticketType.sold}</td>
                                <td align="center">{ticketType.price}</td>
                                <RowInput
                                  ticket={ticketType}
                                  setTickets={setTickets}
                                  tickets={tickets}
                                />
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="flex flex-row justify-end m-0">
                          <label
                            htmlFor="gross"
                            className="label-primary eds-align--center-vertical l-mar-top-2 l-mar-right-2"
                          >
                            Total value
                          </label>
                          <div className="mt-2 responsive-form__input--currency add-attendees-total">
                            <div className="responsive-form__input--currency__symbol">
                              $
                            </div>
                            <input
                              type="text"
                              maxLength={7}
                              className="add-attendee-currency-input"
                              name="gross"
                              disabled="disabled"
                              id="gross"
                              defaultValue="0.00"
                              data-automation="ticket-gross-1039617099"
                              value={totalvalue}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-end m-0 mt-4 p-0">
                          <MainOrangeButton
                            text="Continue"
                            onClick={() => setIsCheckOut(true)}
                          />
                        </div>
                      </>
                    ) : (
                      <Checkout event={testEvent} setIsCheckOut={setIsCheckOut} tickets={tickets} totalvalue={totalvalue}/>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AddAttendees;
