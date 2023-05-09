import { useEffect, useState } from "react";
import "./RegInfo.scss";
import { Alert, Row, Col } from "react-bootstrap";

/**
 * @author Anas Sherif
 * @param {}
 * @description This is the second part of add attendees page, it adds the attendees info.
 * @returns {JSX.Element}
 */

function RegInfo({ event, setEvent }) {
  return (
    <>
      <Row>
        <Col>
          <div className="RegInfo_Container">
            <header className="g-cell g-cell-9-9">
              <div>
                <a href="#" onclick="embeddedCheckoutBackButtonHandler()">
                  <i className="ico-omnes-arrow-left" />
                  <span className="eds-l-pad-left-2">
                    Back to Add Attendees section
                  </span>
                </a>
              </div>
              <h1 className="eds-l-mar-top-6 eds-text-hm">
                Registration Information
              </h1>
              <hr className="eds-l-mar-top-4" />
            </header>
            <div className="RegInfo_Content_Container">
              <div className="eds-modal__title-container eds-modal__title-spacing">
                <h2
                  id="eds-modal-title"
                  className="eds-text-bl--fixed eds-text--truncate eds-modal__title eds-text-color--ui-800"
                  data-spec="eds-modal__title"
                >
                  Checkout
                </h2>
                <span
                  className="eds-l-pad-hor-4 eds-l-mar-top-4 eds-align--center eds-text-bs--fixed eds-text-color--ui-600"
                  data-spec="eds-modal__secondary-title"
                ></span>
                <div className="eds-modal__title-spacing">
                  <hr
                    className="eds-divider__hr eds-bg-color--ui-200 eds-divider--horizontal"
                    data-spec="divider-hr"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <h3 className="eds-text-hs eds-text-color--grey-800 eds-l-mar-bot-2">
                  <span data-spec="checkout-form-basic-info-header">
                    Contact information
                  </span>
                </h3>
                <div className="sub-title-section">
                  <span
                    className="sub-title-section__required-message eds-text-color--red"
                    data-spec="checkout-required-prompt"
                    aria-hidden="true"
                  >
                    Required
                  </span>
                </div>
                <div
                  className="eds-g-cell eds-l-pad-bot-2 eds-g-cell-6-12 eds-l-mar-top-2 eds-l-pad-right-2"
                  data-spec="validation-form-field-wrapper-buyer.N-first_name"
                >
                  <div
                    className="eds-field-styled eds-field-styled--static eds-field-styled--error"
                    style={{ marginBottom: 8 }}
                    data-automation="checkout-form-N-first_name-wrapper"
                    data-testid="input-field-wrapper"
                    data-spec="checkout-form-N-first_name"
                    data-heap-redact-attributes="data-val"
                  >
                    <div className="eds-field-styled__border-simulation">
                      <div className="eds-field-styled__internal">
                        <div className="eds-field-styled__input-container">
                          <div className="eds-field-styled__label-wrapper">
                            <label
                              className="eds-field-styled__label eds-label-primary eds-field-styled__label--required"
                              id="buyer.N-first_name-label"
                              htmlFor="buyer.N-first_name"
                              data-spec="label-label"
                            >
                              <span className="eds-label__content">
                                First name
                              </span>
                              <span
                                className="eds-label__required-indicator eds-text-bs"
                                data-spec="required-indicator"
                              >
                                <span> *</span>
                                <span className="eds-is-hidden-accessible">
                                  (required)
                                </span>
                              </span>
                            </label>
                          </div>
                          <input
                            data-spec="input-field-input-element"
                            aria-invalid="true"
                            aria-required="true"
                            className="eds-field-styled__input"
                            data-automation="checkout-form-N-first_name"
                            id="buyer.N-first_name"
                            maxLength={50}
                            name="buyer.N-first_name"
                            type="text"
                            role="textbox"
                            meta="[object Object]"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="eds-field__sub">
                      <div className="eds-field__sub--left">
                        <aside
                          className="eds-field-styled__annotation eds-text-bs eds-fx--fade-in eds-l-pad-top-1"
                          data-automation="eds-field-annotation"
                          role="alert"
                        >
                          First name is required.
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="eds-g-cell eds-l-pad-bot-2 eds-g-cell-6-12 eds-l-mar-top-2 eds-l-pad-left-2"
                  data-spec="validation-form-field-wrapper-buyer.N-last_name"
                >
                  <div
                    className="eds-field-styled"
                    style={{ marginBottom: 8 }}
                    data-automation="checkout-form-N-last_name-wrapper"
                    data-testid="input-field-wrapper"
                    data-spec="checkout-form-N-last_name"
                    data-heap-redact-attributes="data-val"
                  >
                    <div className="eds-field-styled__border-simulation">
                      <div className="eds-field-styled__internal">
                        <div className="eds-field-styled__input-container">
                          <div className="eds-field-styled__label-wrapper">
                            <label
                              className="eds-field-styled__label eds-label-primary eds-field-styled__label--required"
                              id="buyer.N-last_name-label"
                              htmlFor="buyer.N-last_name"
                              data-spec="label-label"
                            >
                              <span className="eds-label__content">
                                Last name
                              </span>
                              <span
                                className="eds-label__required-indicator eds-text-bm"
                                data-spec="required-indicator"
                              >
                                <span> *</span>
                                <span className="eds-is-hidden-accessible">
                                  (required)
                                </span>
                              </span>
                            </label>
                          </div>
                          <input
                            data-spec="input-field-input-element"
                            aria-invalid="false"
                            aria-required="true"
                            className="eds-field-styled__input"
                            data-automation="checkout-form-N-last_name"
                            id="buyer.N-last_name"
                            maxLength={50}
                            name="buyer.N-last_name"
                            type="text"
                            role="textbox"
                            meta="[object Object]"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="eds-g-cell eds-l-pad-bot-2 eds-g-cell-1-1"
                  data-spec="validation-form-field-wrapper-buyer.N-email"
                >
                  <div
                    className="eds-field-styled"
                    style={{ marginBottom: 8 }}
                    data-automation="checkout-form-N-email-wrapper"
                    data-testid="input-field-wrapper"
                    data-spec="checkout-form-N-email"
                    data-heap-redact-attributes="data-val"
                  >
                    <div className="eds-field-styled__border-simulation">
                      <div className="eds-field-styled__internal">
                        <div className="eds-field-styled__input-container">
                          <div className="eds-field-styled__label-wrapper">
                            <label
                              className="eds-field-styled__label eds-label-primary eds-field-styled__label--required"
                              id="buyer.N-email-label"
                              htmlFor="buyer.N-email"
                              data-spec="label-label"
                            >
                              <span className="eds-label__content">
                                Email address
                              </span>
                              <span
                                className="eds-label__required-indicator eds-text-bm"
                                data-spec="required-indicator"
                              >
                                <span> *</span>
                                <span className="eds-is-hidden-accessible">
                                  (required)
                                </span>
                              </span>
                            </label>
                          </div>
                          <input
                            data-spec="input-field-input-element"
                            aria-invalid="false"
                            aria-required="true"
                            className="eds-field-styled__input"
                            data-automation="checkout-form-N-email"
                            id="buyer.N-email"
                            maxLength={254}
                            name="buyer.N-email"
                            type="email"
                            role="textbox"
                            meta="[object Object]"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default RegInfo;
