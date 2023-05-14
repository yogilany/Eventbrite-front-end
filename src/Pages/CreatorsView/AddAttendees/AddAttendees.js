import { useEffect, useState } from "react";
import "./AddAttendees.scss";
import { Alert, Row, Col, Container } from "react-bootstrap";
import RowInput from "./RowInput";
import MainOrangeButton from "src/Components/Buttons/MainOrangeButton";
import Checkout from "./Checkout";
import axios from "axios";


/**
 * @author Anas Sherif
 * @param {}
 * @description This is the add attendees page, it adds the attendees to the event manually.
 * @returns {JSX.Element}
 */

function AddAttendees({ event, setEvent }) {
  const [ticketTypes, setTicketTypes] = useState(null);

  // define an array of ticket types to be used in the table


  const fetchTicketsTypes = () => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_API}/tickets/event_id/${event.id}`)
      .then(function (response) {
        console.log("tickets in add", response.data);

        setTicketTypes(response.data);
        setIsLoading(false);

      })
      .catch(function (error) {
        // handle error
        console.log("error", error);
      });
  };

  // const [ticketTypes, setTicketTypes] = useState([
  //   {
  //     type: "General Admission",
  //     sold: "0/200",
  //     price: 5.0,
  //   },
  //   {
  //     type: "VIP",
  //     sold: "0/100",
  //     price: 10.0,
  //   },
  // ]);

  const [orderType, setOrderType] = useState("check");
  const [totalvalue, setTotalValue] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [ isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    fetchTicketsTypes()
  }, []);


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
                        {!isLoading ? <table className="l-mar-left-2 responsive-table js-d-table-stacked responsive-table--stacked mt-4">
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
                            {ticketTypes ? ticketTypes.map((ticketType) => (
                              <tr>
                                <td>{ticketType.name}</td>
                                <td align="center">{ticketType.sold}</td>
                                <td align="center">{ticketType.price}</td>
                                <RowInput
                                  ticket={ticketType}
                                  setTickets={setTickets}
                                  tickets={tickets}
                                />
                              </tr>
                            )) :  null}
                          </tbody>
                        </table> : <div class="flex items-center justify-center rounded-lg mb-36">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-12 h-12 mr-2 text-gray-200 animate-spin  fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>}
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
                      <Checkout event={event} setIsCheckOut={setIsCheckOut} tickets={tickets} totalvalue={totalvalue}/>
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
