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
import AboutFooter from '../../../components/AboutFooter/AboutFooter'

import { useRef, useState, useEffect } from 'react'
import { getUsers } from "../../../services/users";
import { userAuthorize, testReducer } from "../../../features";
import { useSelector, useDispatch } from 'react-redux';
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
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.warn('User: ', user, ' Pwd: ', pwd);


    getUsers({ password: pwd, email: user })
      .then(function (response) {
        console.log(response)
        if (response) {
          dispatch(userAuthorize(true));
          setSuccess(true);
          navigate('/');
        } else {
          setSuccess(false);
          dispatch(userAuthorize(false));
          // Display error message or something
        }
      })
      .catch((error) => console.error(error));
  }

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
            <LoginForm
              user_ref={userRef}
              User={user}
              set_Pwd={setPwd}
              set_User={setUser}
              Pwd={pwd}
              submitAction={handleSubmit}
              Success={success}
              data_testid="login-form" name="login-form-div" />
            <HorizontalChip data_testid="horizontal-chip" />
            <LoginMethods data_testid="login-methods" name="login-methods-div" />
          </div>
        </Col>
        <Col md={6} className="g-0">
          <LoginImage data_testid="login-image"
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
    </Container >
  );
};

export default Login;
