import { Box, IconButton, LinearProgress } from "@mui/material";
import { Formik, useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";
import * as TiIcons from "react-icons/ti";
import zxcvbn from "zxcvbn";
import SignupMethods from "./SignupMethods";
import { addUser } from "../../../../services/services";
import { useNavigate } from "react-router";
import '../Signup.scss';
import './SignupMethods';
import * as Yup from 'yup';

// const ShowInfo = () => {

//     // Grab values and submitForm from context

//     const { values, submitForm } = useFormikContext();

//     useEffect(() => {

//         // Submit the form imperatively as an effect as soon as form values.token are 6 digits long

//         if (values.email.length > 0) {
//             values.showSignupInfo2 = true
//         } else {
//             values.showSignupInfo2 = false

//         }

//     }, [values, submitForm]);

//     return null;

// };

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()

        .min(2, "Too Short!")

        .max(50, "Too Long!")

        .required("Required"),

    lastName: Yup.string()

        .min(2, "Too Short!")

        .max(50, "Too Long!")

        .required("Required"),

    email: Yup.string().notRequired(),
    emailConfirm: Yup.string().oneOf([Yup.ref('email'), null], "Email address doesn't match. Please try again")
        .required('Required')
});
/**
 * Regex for verifying emails.
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @type {{}}
 */
const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/**
 * Runs a check on the password and returns its score,
 *  a hex color indicating the score,
 *  and a short description about the password strength
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @param {*} password
 * @returns {{}}
 */
function getPasswordState(password) {
    const result = zxcvbn(password).score;
    switch (result) {
        case 0:
            return [0, "#e02e46", "Your password must be at least 8 characters"];
        case 1:
            return [1, "#e02e46", "Your password is weak"];
        case 2:
            return [2, "#f05537", "Your password is moderate"];
        case 3:
            return [3, "#16a85a", "Your password is strong"];
        case 4:
            return [4, "#16a85a", "Your password is very strong"];
        default:
            return "";
    }
}

/**
 * Create a linear progress bar with a label under it.
 * Must provide password in props
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {JSX.Element}
 */
function LinearProgressWithLabel(props) {
    const [progressBar, setProgressBar] = useState({
        value: 0,
        colorHex: "#1a90ff",
        labelString: "Your password must be at least 8 characters",
    });
    useEffect(() => {
        const result = getPasswordState(props.password);
        setProgressBar((state) => ({
            ...state,
            ...progressBar,
            value: result[0],
            colorHex: result[1],
            labelString: result[2],
        }));
    }, [props.password]);
    return (
        <Box sx={{ alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={progressBar.value * 25}
                    sx={{
                        "& .MuiLinearProgress-bar1Determinate": {
                            backgroundColor: progressBar.colorHex,
                        },
                    }}
                />
            </Box>
            <Box sx={{ minWidth: 35, fontSize: "0.8rem", pt: 2 }}>
                {progressBar.labelString}
            </Box>
        </Box>
    );
}
LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};
/**
 * The signup form which contains the information needed to create a new account.
 * This form validates all inputs before submission.
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {*}
 */
export const SignupForm = (props) => {
    const [showSignUpInfo, setShowSignUpInfo] = useState(false);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                emailConfirm: '',
                showSignupInfo2: false
            }}
            onSubmit={(values, actions) => {

                if (values.email && values.email.length && values.email.match(isValidEmail)) {
                    setShowSignUpInfo(state => state = true)
                    console.log("good email")
                } else {
                    setShowSignUpInfo(state => state = false)
                    console.log("bad email")
                }
                console.log("pressed on submit")
                addUser(
                    {
                        name: values.firstName,
                        email: values.email,
                        password: values.password,
                        username: values.lastName
                    }
                )
            }}
            validationSchema={SignupSchema}
            validateOnChange={false}
            validateOnMount={false}
        >
            {(props, setFieldValue) => (
                <>
                    {/* <ShowInfo /> */}

                    <Form data-testid={props.data_testid} onSubmit={props.handleSubmit}>
                        <InputGroup>
                            <Form.Group className="mb-3" controlId="formLoginEmail" style={{ width: "100%" }}>
                                <Form.Control
                                    disabled={props.values.showSignupInfo2}
                                    type="email"
                                    placeholder="Email address"
                                    value={props.values.email}
                                    {...props.getFieldProps('email')}
                                />
                                <Form.Control.Feedback type="invalid">Email address invalid.</Form.Control.Feedback>
                            </Form.Group>
                            <IconButton style={{
                                display: props.values.showSignupInfo2 ? "inherit" : "none",
                                position: "absolute",
                                right: "1rem"
                                , top: "0.3rem",
                                backgroundColor: "transparent"
                            }}
                                onClick={() => { props.setFieldValue('showSignupInfo2', false) }}
                                type="reset"
                            >
                                <TiIcons.TiPencil />
                            </IconButton>
                        </InputGroup>

                        <div style={{ display: props.values.showSignupInfo2 ? "block" : "none" }}>
                            <Form.Group >
                                <Form.Control
                                    type="email"
                                    placeholder="Confirm Email"
                                    id="emailConfirm"
                                    {...props.getFieldProps('emailConfirm')}
                                    isInvalid={props.touched.emailConfirm && props.errors.emailConfirm}
                                    isValid={!props.touched.emailConfirm && !props.errors.emailConfirm}
                                    onBlur={props.handleBlur}
                                />
                                <Form.Control.Feedback type="invalid" >Email address doesn't match. Please try again</Form.Control.Feedback>
                            </Form.Group>
                            <Stack direction="horizontal" gap={3} className=" mt-3 ">
                                <Form.Group className='pb-4'>
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        id="firstName"
                                        {...props.getFieldProps('firstName')}
                                        isValid={!props.touched.firstName && !props.errors.firstName}
                                        isInvalid={props.touched.firstName && props.errors.firstName}
                                        onBlur={props.handleBlur}
                                    />
                                    <Form.Control.Feedback type="invalid">{props.errors.firstName}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='pb-4'>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        id="lastName"
                                        name="lastName"
                                        {...props.getFieldProps('lastName')}
                                        isValid={!props.touched.lastName && !props.errors.lastName}
                                        isInvalid={props.touched.lastName && props.errors.lastName}
                                        onBlur={props.handleBlur}
                                    />
                                    <Form.Control.Feedback type="invalid">{props.errors.lastName}</Form.Control.Feedback>
                                </Form.Group>
                            </Stack>
                            <Form.Group className='mb-3'>
                                <Form.Control
                                    {...props.getFieldProps('password')}
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                />
                            </Form.Group>
                            <LinearProgressWithLabel value={0} password={props.values.password} />
                        </div>

                        {props.values.showSignupInfo2 ?
                            <Button as="input" className='mt-5 mb-2' type="submit" value={showSignUpInfo ? "Create account" : "Continue"} variant="flat btn-flat" /> :
                            <Button as="input" className='mt-5 mb-2'
                                onClick={() => {
                                    if (props.values.email.match(isValidEmail)) {
                                        props.setFieldValue('showSignupInfo2', true)
                                        props.setErrors({});
                                        props.setTouched({});
                                    }
                                }}
                                type="button" value="Continue" variant="flat btn-flat" />
                        }
                    </Form>
                    {props.values.showSignupInfo2 ? null : <SignupMethods />}
                </>
            )}
        </Formik>
    );
};
export default SignupForm;
