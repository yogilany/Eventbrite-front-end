import { Box, IconButton, LinearProgress } from "@mui/material";
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Stack } from 'react-bootstrap';
import * as TiIcons from 'react-icons/ti';
import zxcvbn from 'zxcvbn';
import '../Signup.scss';
import './SignupMethods';

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
    const result = zxcvbn(password).score
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
            return [4, "#16a85a", "Your password is very strong"]
        default: return "";
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
        labelString: 'Your password must be at least 8 characters',
    });
    useEffect(() => {
        const result = getPasswordState(props.password);
        setProgressBar(state => ({
            ...state, ...progressBar,
            value: result[0],
            colorHex: result[1],
            labelString: result[2]
        }));
    }, [props.password]);
    return (
        <Box sx={{ alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate"
                    value={progressBar.value * 25}
                    sx={{
                        '& .MuiLinearProgress-bar1Determinate': {
                            backgroundColor: progressBar.colorHex,
                        }
                    }}
                />
            </Box>
            <Box sx={{ minWidth: 35, fontSize: "0.8rem", pt: 2 }}>
                {
                    progressBar.labelString
                }
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
    const [password, setPassword] = useState('');

    const formStyle = {
        display: showSignUpInfo ? "block" : "none"
    }

    const validate = values => {
        const errors = {};
        if (!showSignUpInfo)
            return errors
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }


        if (!values.password) {
            errors.password = 'Required';
        } else if (zxcvbn(values.password) < 2) {
            errors.password = 'Password must be at least 8 characters long and have symbols or numbers';
        }

        if (!(values.email === values.emailConfirm)) {
            errors.emailConfirm = 'Emails must match'
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            emailConfirm: ''
        }, validate,

        onSubmit: values => {
            
            if (values.email && values.email.length && values.email.match(isValidEmail)) {
                setShowSignUpInfo(state => state = true)
                console.log("good email")
            } else {
                setShowSignUpInfo(state => state = false)
                console.log("bad email")
            }
            console.log("pressed on submit")

            alert(JSON.stringify(values, null, 2));
        }, validateOnChange: false

    });
    return (
        <Form data-testid={props.data_testid} onSubmit={formik.handleSubmit}>

            <InputGroup>
                <Form.Group className="mb-3" controlId="formLoginEmail" style={{ width: "100%" }}>
                    <Form.Control
                        disabled={showSignUpInfo}
                        type="email"
                        placeholder="Email address"
                        value={formik.values.email}
                        {...formik.getFieldProps('email')}
                    />
                    <Form.Control.Feedback type="invalid">Email address invalid.</Form.Control.Feedback>
                </Form.Group>
                <IconButton style={{
                    display: showSignUpInfo ? "inherit" : "none",
                    position: "absolute",
                    right: "1rem"
                    , top: "0.3rem",
                    backgroundColor: "transparent"

                }}
                    onClick={a => setShowSignUpInfo(false)}
                    type="reset"
                >
                    <TiIcons.TiPencil />
                </IconButton>
            </InputGroup>

            <div style={{ display: showSignUpInfo ? "block" : "none" }}>
                <Form.Group >
                    <Form.Control
                        type="email"
                        placeholder="Confirm Email"
                        id="emailConfirm"
                        {...formik.getFieldProps('emailConfirm')}
                        isInvalid={formik.touched.emailConfirm && formik.errors.emailConfirm}
                        isValid={!formik.touched.emailConfirm && !formik.errors.emailConfirm}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Control.Feedback type="invalid" >Email address doesn't match. Please try again</Form.Control.Feedback>
                </Form.Group>
                <Stack direction="horizontal" gap={3} className=" mt-3 ">
                    <Form.Group className='pb-4'>
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            id="firstName"
                            {...formik.getFieldProps('firstName')}
                            isValid={!formik.touched.firstName && !formik.errors.firstName}
                            isInvalid={formik.touched.firstName && formik.errors.firstName}
                            onBlur={formik.handleBlur}
                        />
                        <Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='pb-4'>
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            id="lastName"
                            name="lastName"
                            {...formik.getFieldProps('lastName')}
                            isValid={!formik.touched.lastName && !formik.errors.lastName}
                            isInvalid={formik.touched.lastName && formik.errors.lastName}
                            onBlur={formik.handleBlur}
                        />
                        <Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
                    </Form.Group>
                </Stack>
                <Form.Group className='mb-3'>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} value={password}
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"

                    />
                </Form.Group>
                <LinearProgressWithLabel password={password} />
            </div>
            {/* {showSignUpInfo ? SignUpInfoForms : <></>} */}

            <Button as="input" className='mt-5 mb-2' type="submit" value={showSignUpInfo ? "Create account" : "Continue"} variant="flat btn-flat" />{' '}

        </Form>
    );
};
export default (SignupForm);
