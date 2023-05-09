import { useEffect, useState } from "react";
import "./AddAttendees.scss";
import { Alert, Row, Col } from "react-bootstrap";

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
      price: "$5.00",
    },
    {
      type: "VIP",
      sold: "0/100",
      price: "$10.00",
    },
  ]);

  const [orderType, setOrderType] = useState("check");
  const [totalvalue, setTotalValue] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState([]);

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

  function quantityupdatehandler(e)
  {
    // set the total value of the tickets to the sume of each ticket type price * quantity
    
  }
  return (
    <>
      <Row>
        <Col>
          <div className="Add_Attendees_Container">
            <div className="Add_Attendees_Content_Container">
              <header className="page-heading eds-l-mar-bot-3 eds-l-mar-top-6 eds-show-up-md">
                <div className="l-pad-hor-3 eds-l-mar-bot-6">
                  <h1 className="eds-text-hm">Add Attendees</h1>
                  <p className="eds-text-bm eds-l-mar-top-2">
                    Manually add attendees info for complimentary tickets or
                    offline payments
                  </p>
                </div>
              </header>
            </div>
            <div className="l-mar-vert-6 g-group">
              <div className="g-cell g-cell-9-9">
                <label className="label-primary" for="pp_payment_status">
                  Order Type:
                </label>
              </div>
              <div className="g-cell g-cell-9-9 g-cell-md-4-9">
                <select
                  id="pp_payment_status"
                  name="pp_payment_status"
                  className="js-d-select-box"
                  onChange={(e) => setOrderType(e.target.value)}
                >
                  <option value="check">Paid with check</option>
                  <option value="cash">Paid with cash</option>
                  <option value="paypal">
                    Paid directly online with PayPal
                  </option>
                  <option value="online">Paid online non-PayPal</option>
                  <option value="comp">Complimentary</option>
                  <option value="free">No payment necessary</option>
                  <option value="voucher">Paid With Voucher</option>
                  <option value="credit">Paid Directly By Credit Card</option>
                  <option value="debit">Paid Directly By Debit Card</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <p className="disclaimer l-mar-top-3 g-cell g-cell-9-9">
                * Eventbrite does not charge any fees for manual orders.
              </p>
            </div>
            <table className="l-mar-left-2 responsive-table js-d-table-stacked responsive-table--stacked">
              <thead>
                <tr>
                  <th>Ticket Type</th>
                  <th align="center">Sold</th>
                  <th align="center">Price *</th>
                  <th width="20%" align="center">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {ticketTypes.map((ticketType) => (
                  <tr>
                    <td>{ticketType.type}</td>
                    <td align="center">{ticketType.sold}</td>
                    <td align="center">{ticketType.price}</td>
                    <td align="center">
                      <input
                        type="text"
                        maxLength={3}
                        className="add-attendee-currency-input"
                        name="quantity"
                        id="quantity"
                        defaultValue={0}
                        data-automation="ticket-quantity-1039617099"
                        onChange={quantityupdatehandler(ticketType.type)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="eds-align--right">
              <label
                htmlFor="gross"
                className="label-primary eds-align--center-vertical l-mar-top-2 l-mar-right-2"
              >
                Total value
              </label>
              <div className="l-mar-top-2 responsive-form__input--currency add-attendees-total">
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
                />
              </div>
            </div>
            <br />
            <div className="eds-align--right">
              <button
                type="Addbtn"
                className="eds-addattendees-continue-button"
                onClick={saveData}
              >
                Continue
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AddAttendees;
