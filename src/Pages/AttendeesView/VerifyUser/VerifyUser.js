import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../../../Components/header/Header";
import { logOut, selectLoading, verifyUser } from "../../../features/authSlice";

/**
 * @description VerifyUser function verifies a user token by dispatching verifyUser action and sets the verification state.
 * Upon successful verification, it logs out the user and redirects to login page after a specified time.
 * Otherwise, it sets the verification state to false.
 * @date 5/8/2023 - 11:31:57 AM
 * @author h4z3m
 *
 * @returns {*}
 */
const VerifyUser = () => {
  const secondsBeforeRedirect = 5;
  const [verificationState, setVerificationState] = useState(
    "Verification in progress..."
  );
  const [requestFulfilled, setRequestFulfilled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isLoading = useSelector(selectLoading);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
      // console.log(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  useEffect(() => {
    // get parameters from url
    const token = searchParams.get("token");
    // console.log("Token = ", token);
    dispatch(verifyUser(token))
      .unwrap(unwrapResult)
      .then((result) => {
        setRequestFulfilled(true);
        setVerificationState(result);
        logOut();
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, secondsBeforeRedirect * 1000);
      })
      .catch((err) => {
        setRequestFulfilled(true);
        setVerificationState(err);
        console.log(err);
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, secondsBeforeRedirect * 1000);
      });
  }, []);

  return (
    <>
      <Header screenSize={screenSize} />
      <Container>
        <Col className="  justify-content-center align-items-center text-center">
          <Row style={{ fontSize: "40px" }}>
            <p id="verification-message" data-testid="verification-message" className="font-bold text-6xl mt-36" style={{color: "#1e0a3c"}}>
              {verificationState}
            </p>
          </Row>
          <Row>
            <p id="spinner-message" data-testid="spinner-message">
              {isLoading ? <Spinner size="lg" animation="border" className="text-orange-500" /> : null}
            </p>
          </Row>
          {requestFulfilled ? (
            <>
              <Row>
                <p id="redirect-message" data-testid="redirect-message">
                  Redirecting to login...
                </p>
              </Row>
              <Row>
                <Link id="login-link" data-testid="login-link" to="/login" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  If you were not redirected within {secondsBeforeRedirect}{" "}
                  seconds, click here
                </Link>
              </Row>
            </>
          ) : null}
        </Col>
      </Container>
    </>
  );
};

export default VerifyUser;
