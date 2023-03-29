import "./Login.scss";
import LoginForm from "./Components/LoginForm";
import { Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginMethods from "./Components/LoginMethods";
import test_image from "../../../assets/side_image.jpg";
import { LoginTitle as LoginTitle } from "./Components/Title";
import LoginImage from "./Components/LoginImage";
import Footer from "../../../components/footer/Footer";
import { HorizontalChip } from "./Components/HorizontalChip";
import AboutFooter from "../../../components/AboutFooter/AboutFooter";

import { useRef, useState, useEffect } from "react";
// import { getUsers } from "../../../services/users";
import { getUsers } from "../../../services/services";
import { userAuthorize, testReducer } from "../../../features";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";

/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login page
 */
const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const validateEmail = (e) => {
  return true;
};

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
      setUsers(res);
    }

    fetchUsers();
    console.log("users: ", users);
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.warn("User: ", user, " Pwd: ", pwd);

      const userExists = users.filter((u) => u.email === user);
      if (userExists.length !== 0) {
        if (userExists[0].password === pwd) {
          dispatch(userAuthorize(true));
          setSuccess(true);
          navigate("/");
        } else {
          setPasswordIncorrect(true);
          setSuccess(false);
          dispatch(userAuthorize(false));
        }
      } else {
        setEmailExist(false);
      }
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
        <Col md={6} className="g-0" style={{ padding: "100px 200px 0 225px" }}>
          <div style={{ maxWidth: "85%" }}>
            <Stack dir="vertical" gap={4}>
              <LoginTitle />
              <h1
                data-testid="login-header"
                id="login-login-h1"
                className="mb-5"
                style={{ minWidth: "200px" }}
              >
                Log in
              </h1>
            </Stack>
            {!emailExist && user.length > 5 ? (
              <div className="formMsg">
                <div></div>
                <p>
                  There is no account associated with the email.{" "}
                  <a>Create account.</a>{" "}
                </p>
              </div>
            ) : null}
            {passwordIncorrect ? (
              <div className="formMsg">
                <div></div>
                <p>Password is incorrect. </p>
              </div>
            ) : null}
            <LoginForm
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
            <HorizontalChip data_testid="horizontal-chip" />
            <LoginMethods
              data_testid="login-methods"
              name="login-methods-div"
            />
          </div>
        </Col>
        <Col md={6} className="g-0">
          <LoginImage
            data_testid="login-image"
            img_url={test_image}
            img_caption="Winston Baker"
            img_credit="Confluence Summit"
            img_location="San Francisco, CA"
          />
        </Col>
      </Row>
      <Row>
        <AboutFooter />
      </Row>
      <Row>
        <Footer data_testid="login-footer" />
      </Row>
    </Container>
  );
};

export default Login;
