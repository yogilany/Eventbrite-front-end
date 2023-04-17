import { useEffect, useRef, useState } from "react";
import { Container, Col, Row, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import test_image from "../../../assets/side_image.jpg";
import imageLogin from "../../../assets/adelLogin.png";
import AboutFooter from "../../../Components/AboutFooter/AboutFooter";
import Footer from "../../../Components/footer/Footer";
import { authUser } from "../../../features/authSlice";
import { getUsers } from "../../../services/services";
import { HorizontalChip } from "./Components/HorizontalChip";
import LoginForm from "./Components/LoginForm";
import LoginImage from "./Components/LoginImage";
import LoginMethods from "./Components/LoginMethods";
import { LoginTitle } from "./Components/Title";
import "./Login.scss";

/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login page
 */
const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const validateEmail = (e) => {
  return true;
};

/**
 * This is the login page for attendees where they can log in using
 * their email & passwords.
 * This page is redirected to by signup after a successful sign up
 * @date 3/29/2023 - 2:46:54 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {JSX.Element}
 */
export const Login = (props) => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailExist, setEmailExist] = useState(true);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();

    async function fetchUsers() {
      const res = await getUsers();
      // console.log("res: ", res);
      setUsers(res);
    }
    fetchUsers();
    // console.log("users: ", users);
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        email: user,
        password: pwd,
      };
      // console.warn("User: ", user, " Pwd: ", pwd);
      dispatch(authUser(data))
        .unwrap()
        .then(() => {
          // console.log("SUCCESS::LOG IN");
          navigate("/");
          setSuccess(true);
          window.location.reload();
        })
        .catch(() => {
          console.log("ERROR::LOG IN");
          setSuccess(false);
        });
      //   const userExists = users.filter((u) => u.email === user);
      //   if (userExists.length !== 0) {
      //     if (userExists[0].password === pwd) {
      //       dispatch(authUser(data));
      //       setSuccess(true);
      //       window.User = userExists;
      //       navigate("/");
      //     } else {
      //       setPasswordIncorrect(true);
      //       setSuccess(false);
      //       dispatch(authUser(data));
      //     }
      //   } else {
      //     setEmailExist(false);
      //   }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const userExists = users.filter((u) => u.email === user);

    if (userExists.length === 0) {
      setEmailExist(false);
    } else {
      setEmailExist(true);
      setPasswordIncorrect(false);
    }
  }, [user]);

  return (
    <Container className={props.name} fluid style={{ height: "50px" }}>
      <Row>
        <Col
          className="contact-content"
          md={12}
          lg={6}
          sm={12}
          style={{
            display: "block",
            justifyContent: "center",
            alignContent: "center",
          }}
          id='login-column-left'
          data-testid='login-column-left'
        >
          <Col>
            <Row>
              <Stack dir="vertical" gap={4} className="">
                <LoginTitle className="login-title" />
                <h1
                  data-testid="login-header"
                  id="login-header"
                  className="mb-5"
                  style={{ minWidth: "200px" }}
                >
                  Log in
                </h1>
              </Stack>
            </Row>
            <Row>
              {!emailExist && user.length > 10 ? (
                <div className="formMsg">
                  <div></div>
                  <p>
                    There is no account associated with the email.{" "}
                    <a href="/signup">Create account.</a>{" "}
                  </p>
                </div>
              ) : null}
            </Row>
            <Row>
              {passwordIncorrect ? (
                <div className="formMsg">
                  <div></div>
                  <p>Password is incorrect. </p>
                </div>
              ) : null}
            </Row>
            <Row className="g-0">
              <LoginForm
                style={{
                  minWidth: "100%",
                  width: "350px",
                }}
                user_ref={userRef}
                User={user}
                set_Pwd={setPwd}
                set_User={setUser}
                Pwd={pwd}
                submitAction={handleSubmit}
                Success={success}
                data_testid="login-form"
                name="login-form-div"
              />
            </Row>
            <Row className="g-0">
              <HorizontalChip id='login-horizontalchip' data_testid="horizontal-chip" />
            </Row>
            <Row className="g-0">
              <LoginMethods
                data_testid="login-methods"
                name="login-methods-div"
              />
            </Row>
          </Col>
        </Col>
        <Col md={0} lg={6} sm={0} className="g-0 d-none d-lg-block">
          <LoginImage
            id='login-image'
            data_testid="login-image"
            img_url={imageLogin}
            img_caption="Winston Baker"
            img_credit="Confluence Summit"
            img_location="San Francisco, CA"
          />
        </Col>
      </Row>
      <Row className="d-none d-lg-block d-md-block">
        <AboutFooter id='login-aboutfooter' />
      </Row>
      <Row>
        <Footer id='login-footer' data_testid="login-footer" />
      </Row>
    </Container>
  );
};

export default Login;
