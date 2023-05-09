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
  // define const variables here
  return (
    <>
      <Row>
        <Col>
          <div className="Add_Attendees_Container">
            <div className="Add_Attendees_Content_Container">
              <header class="page-heading eds-l-mar-bot-3 eds-l-mar-top-6 eds-show-up-md">
                <div class="l-pad-hor-3 eds-l-mar-bot-6">
                  <h1 class="eds-text-hm">Add Attendees</h1>
                  <p class="eds-text-bm eds-l-mar-top-2">
                    Manually add attendees info for complimentary tickets or
                    offline payments
                  </p>
                </div>
              </header>
            </div>
            <div class="l-mar-vert-6 g-group">
              <div class="g-cell g-cell-9-9">
                <label class="label-primary" for="pp_payment_status">
                  Order Type:
                </label>
              </div>
              <div class="g-cell g-cell-9-9 g-cell-md-4-9">
                <select
                  id="pp_payment_status"
                  name="pp_payment_status"
                  class="js-d-select-box"
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
              <p class="disclaimer l-mar-top-3 g-cell g-cell-9-9">
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
                  <th width="20%" align="center">
                    Face Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="ticket_row">
                  <td>
                    <div className="responsive-table--stacked__content">
                      General Admission
                    </div>
                  </td>
                  <td align="center">
                    <div className="responsive-table--stacked__content">
                      0/200
                    </div>
                  </td>
                  <td align="center">
                    <div className="responsive-table--stacked__content">
                      $2.00
                    </div>
                  </td>
                  <td align="center">
                    <div className="responsive-table--stacked__content">
                      <div className="l-mar-top-2">
                        <input
                          type="hidden"
                          name="first_id"
                          id="first_id"
                          defaultValue={1039617099}
                        />
                        <input
                          type="hidden"
                          name="ticket_quantity_total_1039617099"
                          id="ticket_quantity_total_1039617099"
                          defaultValue={200}
                        />
                        <input
                          type="hidden"
                          name="ticket_quantity_sold_1039617099"
                          id="ticket_quantity_sold_1039617099"
                          defaultValue={0}
                        />
                        <input
                          type="text"
                          maxLength={5}
                          pattern="\d*"
                          onkeyup="CheckNumeric(this.name,'I',10000,  UpdateQuantity,1039617099);"
                          name="quant_1039617099"
                          id="quant_1039617099"
                          defaultValue=""
                          className="js-attendees-quant-input"
                          data-automation="ticket-quantity-input-1039617099"
                        />
                      </div>
                    </div>
                  </td>
                  <td align="center">
                    <div className="responsive-table--stacked__content">
                      <input
                        type="hidden"
                        name="cost_1039617099"
                        id="cost_1039617099"
                        defaultValue={2.0}
                      />
                      <div className="l-mar-top-2 responsive-form__input--currency">
                        <div className="responsive-form__input--currency__symbol">
                          $
                        </div>
                        <input
                          type="text"
                          maxLength={7}
                          className="add-attendee-currency-input"
                          onkeyup="CheckNumeric(this.name,'F',0,UpdateGross);"
                          name="gross_1039617099"
                          id="gross_1039617099"
                          defaultValue=""
                          data-automation="ticket-gross-1039617099"
                        />
                        <input
                          type="hidden"
                          name="currency_1039617099"
                          id="currency_1039617099"
                          defaultValue="USD"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
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
                  onkeyup="CheckNumeric(this.name,'F');"
                  name="gross"
                  disabled="disabled"
                  id="gross"
                  defaultValue="0.00"
                  data-automation="ticket-gross-1039617099"
                />
              </div>
            </div>
            <br/>
            <div className="eds-align--right">
              <button
                type="submit"
                className="eds-continue-button"
                data-spec="continue-button"
                data-automation="continue-button"
                data-automation-click="AddAttendeesContinue"
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
